## READ — Architecture Summary

### Layers

```
SOURCES → STORE → FILTERED DECK → WINDOW → SINK
```

Each layer has one job and a narrow interface to the next. Nothing reaches across layers.

---

### Modules

**SeenStore** — persistent 24h seen-URL registry. Backed by localStorage. Only layer that touches persistence.

**FeedStore** — append-only, immutable article log. Single source of truth. Deduplicates on ingest. Never mutated after an article is added.

**Filters** — singleton predicate registry. Named predicates: `date`, `source`, `seen`, `hidden`. `Filters.set(state)` is the single sync point between Vue state and the module layer. `Filters.for([...keys])` returns a predicate subset for a specific deck to own.

**Deck** — two named singleton instances (`Deck.main`, `Deck.swipe`) built from `_create(predicates, pageSize)`. Each holds its own buffer and drawn window. `rebuild()` re-filters FeedStore through its predicates and resets the draw. `drawMore()` pulls the next page randomly from the buffer. Deck owns all randomisation logic.

**Scheduler** — swipe-mode card picker. `pickNext(cards, context) → Article`. Reads from `Deck.swipe.drawn` (full eligible pool). Replaceable without touching anything else.

**Vue app** — purely presentational. Owns reactive UI state (`filters`, `viewMode`, `activeTag`, `hideSeen`, etc.). `_syncAndRebuild()` is the single bridge: push state into `Filters.set()`, then call `Deck.*.rebuild()`. No predicate logic, no draw logic, no persistence in the Vue layer.

---

### Key invariants

- **Articles are immutable** once in FeedStore. All state about an article (seen, filtered, drawn) lives outside it.
- **Filters are stateless pure functions.** `Filters.set()` updates `_state`; predicates close over it. No predicate knows about Vue.
- **Deck.swipe gets all eligible articles** (unbounded draw). Deck.main gets PAGE_SIZE at a time. Same `_create()` factory, different arguments.
- **One sync point.** `_syncAndRebuild()` is the only place Vue state flows into the module layer. All filter changes funnel here.
- **One ingestion gate.** `FeedStore.ingest()` is the only door into the store. Dedup happens here and nowhere else.

---

### Adding a feature

Feature -- Where it goes |

New filter (e.g. keyword search) -- New predicate in `Filters._predicates`, add key to `Filters.for([...])` calls
New deck (e.g. a tab, bookmarks) -- `Deck._create(Filters.for([...]), pageSize)` — name it on `Deck`
New sort/ranking in swipe -- Replace `Scheduler.pickNext()`
New sort in list/card -- Add a sort step inside `Deck._create` before `drawn.value = _drawRandom(...)`
Persist read-later -- New singleton alongside SeenStore, new predicate that reads from it
New UI control -- Reactive ref in Vue, included in `Filters.set()` call, new predicate if it filters
New view mode -- New render block in HTML, same `displayedArticles` from `Deck.main.drawn`