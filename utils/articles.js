window.ARTICLES = [
  {
    id: "google-bigtable",
    title: "Bigtable: A Distributed Storage System for Structured Data",
    url: "https://research.google/pubs/bigtable-a-distributed-storage-system-for-structured-data/",
    company: "Google",
    tags: ["storage", "nosql", "distributed", "paper", "foundational"],
    year: 2006,
    summary: "The seminal paper describing Google's wide-column store powering Search, Maps, and Analytics."
  },
  {
    id: "google-mapreduce",
    title: "MapReduce: Simplified Data Processing on Large Clusters",
    url: "https://research.google/pubs/mapreduce-simplified-data-processing-on-large-clusters/",
    company: "Google",
    tags: ["batch-processing", "distributed", "paper", "foundational"],
    year: 2004,
    summary: "Programming model for processing large data sets with a parallel, distributed algorithm on a cluster."
  },
  {
    id: "google-gfs",
    title: "The Google File System",
    url: "https://research.google/pubs/the-google-file-system/",
    company: "Google",
    tags: ["storage", "distributed", "paper", "foundational"],
    year: 2003,
    summary: "Scalable distributed file system for large data-intensive applications, tolerating frequent component failures."
  },
  {
    id: "google-spanner",
    title: "Spanner: Google's Globally-Distributed Database",
    url: "https://research.google/pubs/spanner-googles-globally-distributed-database/",
    company: "Google",
    tags: ["database", "distributed", "consistency", "paper"],
    year: 2012,
    summary: "Globally distributed NewSQL database with externally consistent distributed transactions."
  },
  {
    id: "google-chubby",
    title: "The Chubby Lock Service for Loosely-Coupled Distributed Systems",
    url: "https://research.google/pubs/the-chubby-lock-service-for-loosely-coupled-distributed-systems/",
    company: "Google",
    tags: ["consensus", "distributed", "coordination", "paper"],
    year: 2006,
    summary: "Coarse-grained locking service enabling reliable leader election and distributed consensus."
  },
  {
    id: "google-borg",
    title: "Large-scale cluster management at Google with Borg",
    url: "https://research.google/pubs/large-scale-cluster-management-at-google-with-borg/",
    company: "Google",
    tags: ["orchestration", "scheduling", "infrastructure", "paper"],
    year: 2015,
    summary: "Cluster manager running hundreds of thousands of jobs across many clusters. Inspiration for Kubernetes."
  },
  {
    id: "google-dapper",
    title: "Dapper, a Large-Scale Distributed Systems Tracing Infrastructure",
    url: "https://research.google/pubs/dapper-a-large-scale-distributed-systems-tracing-infrastructure/",
    company: "Google",
    tags: ["observability", "tracing", "distributed", "paper"],
    year: 2010,
    summary: "Distributed tracing system that inspired Zipkin, Jaeger, and the OpenTelemetry ecosystem."
  },
  {
    id: "google-f1",
    title: "F1: A Distributed SQL Database That Scales",
    url: "https://research.google/pubs/f1-a-distributed-sql-database-that-scales/",
    company: "Google",
    tags: ["database", "sql", "distributed", "paper"],
    year: 2013,
    summary: "Fault-tolerant globally-distributed OLTP and OLAP database used for Google AdWords."
  },
  {
    id: "google-sre",
    title: "Site Reliability Engineering — How Google Runs Production Systems",
    url: "https://sre.google/sre-book/table-of-contents/",
    company: "Google",
    tags: ["reliability", "operations", "sre", "book"],
    year: 2016,
    summary: "Google's approach to building and operating large-scale, highly reliable distributed systems."
  },
  {
    id: "google-tensorflow",
    title: "TensorFlow: A System for Large-Scale Machine Learning",
    url: "https://www.usenix.org/system/files/conference/osdi16/osdi16-abadi.pdf",
    company: "Google",
    tags: ["ml", "distributed", "paper"],
    year: 2016,
    summary: "Dataflow-based system for expressing ML algorithms and executing them at scale."
  },
  {
    id: "google-mesa",
    title: "Mesa: Geo-Replicated, Near Real-Time, Scalable Data Warehousing",
    url: "https://research.google/pubs/mesa-geo-replicated-near-real-time-scalable-data-warehousing/",
    company: "Google",
    tags: ["data-warehouse", "olap", "replication", "paper"],
    year: 2014,
    summary: "Highly scalable analytic data warehousing system that stores critical measurement data for Google's advertising business."
  },
  {
    id: "amazon-dynamo",
    title: "Dynamo: Amazon's Highly Available Key-value Store",
    url: "https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf",
    company: "Amazon",
    tags: ["nosql", "availability", "paper", "foundational"],
    year: 2007,
    summary: "Highly available, eventually consistent key-value store underpinning Amazon's e-commerce platform."
  },
  {
    id: "amazon-aurora",
    title: "Amazon Aurora: Design Considerations for High Throughput Cloud-Native Relational Databases",
    url: "https://www.allthingsdistributed.com/files/p1041-verbitski.pdf",
    company: "Amazon",
    tags: ["database", "sql", "cloud", "paper"],
    year: 2017,
    summary: "Cloud-native relational database that separates storage from compute, achieving 5x MySQL throughput."
  },
  {
    id: "amazon-s3",
    title: "Billions of Files: Amazon S3's Journey",
    url: "https://www.allthingsdistributed.com/2023/07/building-and-operating-a-pretty-big-storage-system.html",
    company: "Amazon",
    tags: ["storage", "object-storage", "cloud", "article"],
    year: 2023,
    summary: "Engineering post on operating S3 at exabyte scale — durability, availability, and metadata challenges."
  },
  {
    id: "amazon-deathstar",
    title: "Avoiding Fallback in Distributed Systems",
    url: "https://aws.amazon.com/builders-library/avoiding-fallback-in-distributed-systems/",
    company: "Amazon",
    tags: ["reliability", "resilience", "distributed", "article"],
    year: 2019,
    summary: "Amazon Builder's Library: why static stability and avoiding fallbacks improves resilience."
  },
  {
    id: "amazon-shuffle-sharding",
    title: "Shuffle Sharding: Massive and Magical Fault Isolation",
    url: "https://aws.amazon.com/builders-library/workload-isolation-using-shuffle-sharding/",
    company: "Amazon",
    tags: ["reliability", "sharding", "fault-isolation", "article"],
    year: 2020,
    summary: "Workload isolation technique that limits blast radius of failures using combinatorial assignment."
  },
  {
    id: "amazon-cell-architecture",
    title: "Reliability, constant work, and a good cup of coffee",
    url: "https://aws.amazon.com/builders-library/reliability-and-constant-work/",
    company: "Amazon",
    tags: ["reliability", "architecture", "article"],
    year: 2019,
    summary: "The 'constant work' pattern: doing the same amount of work regardless of load to avoid thundering herds."
  },
  {
    id: "amazon-timeouts",
    title: "Timeouts, retries, and backoff with jitter",
    url: "https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/",
    company: "Amazon",
    tags: ["reliability", "resilience", "networking", "article"],
    year: 2019,
    summary: "Practical patterns for handling failures in distributed systems — jitter, exponential backoff, deadlines."
  },
  {
    id: "amazon-leader-election",
    title: "Leader election in distributed systems",
    url: "https://aws.amazon.com/builders-library/leader-election-in-distributed-systems/",
    company: "Amazon",
    tags: ["consensus", "distributed", "coordination", "article"],
    year: 2019,
    summary: "How Amazon implements leader election safely without split-brain in distributed control planes."
  },
  {
    id: "meta-cassandra",
    title: "Cassandra: A Decentralized Structured Storage System",
    url: "https://www.cs.cornell.edu/projects/ladis2009/papers/lakshman-ladis2009.pdf",
    company: "Meta",
    tags: ["nosql", "distributed", "paper", "foundational"],
    year: 2009,
    summary: "Wide-column store combining Dynamo's distribution model with Bigtable's data model."
  },
  {
    id: "meta-tao",
    title: "TAO: Facebook's Distributed Data Store for the Social Graph",
    url: "https://www.usenix.org/system/files/conference/atc13/atc13-bronson.pdf",
    company: "Meta",
    tags: ["graph", "caching", "social", "paper"],
    year: 2013,
    summary: "Geographically distributed data store optimized for serving Facebook's social graph at scale."
  },
  {
    id: "meta-haystack",
    title: "Finding a needle in Haystack: Facebook's photo storage",
    url: "https://www.usenix.org/legacy/event/osdi10/tech/full_papers/Beaver.pdf",
    company: "Meta",
    tags: ["storage", "object-storage", "blob", "paper"],
    year: 2010,
    summary: "Efficient object storage system for billions of photos, eliminating unnecessary metadata overhead."
  },
  {
    id: "meta-scuba",
    title: "Scuba: Diving into Data at Facebook",
    url: "https://research.facebook.com/publications/scuba-diving-into-data-at-facebook/",
    company: "Meta",
    tags: ["analytics", "olap", "real-time", "paper"],
    year: 2013,
    summary: "In-memory distributed analytics database for real-time aggregation over time-series data."
  },
  {
    id: "meta-memcached",
    title: "Scaling Memcache at Facebook",
    url: "https://www.usenix.org/system/files/conference/nsdi13/nsdi13-final170_update.pdf",
    company: "Meta",
    tags: ["caching", "distributed", "scalability", "paper"],
    year: 2013,
    summary: "How Facebook scaled memcached to serve billions of requests per second across data centers."
  },
  {
    id: "meta-zippydb",
    title: "ZippyDB: The Distributed Key-Value Store at Facebook",
    url: "https://engineering.fb.com/2021/08/06/core-data/zippydb/",
    company: "Meta",
    tags: ["nosql", "distributed", "storage", "article"],
    year: 2021,
    summary: "Meta's geographically distributed key-value store built on RocksDB for data locality and low latency."
  },
  {
    id: "meta-ml-infra",
    title: "Scaling AI at Meta with Pytorch",
    url: "https://engineering.fb.com/2024/09/19/ml-applications/scaling-ai-training-meta-pytorch/",
    company: "Meta",
    tags: ["ml", "infrastructure", "distributed", "article"],
    year: 2024,
    summary: "How Meta scales AI model training to thousands of GPUs with PyTorch and custom infrastructure."
  },
  {
    id: "linkedin-kafka",
    title: "Kafka: a Distributed Messaging System for Log Processing",
    url: "https://www.cs.utah.edu/~lifeifei/cs6530/kafkaoriginalpaper.pdf",
    company: "LinkedIn",
    tags: ["messaging", "streaming", "distributed", "paper", "foundational"],
    year: 2011,
    summary: "High-throughput distributed messaging system designed for real-time log and event processing."
  },
  {
    id: "linkedin-samza",
    title: "Apache Samza: Stateful Scalable Stream Processing at LinkedIn",
    url: "https://dl.acm.org/doi/10.14778/3137765.3137770",
    company: "LinkedIn",
    tags: ["streaming", "distributed", "paper"],
    year: 2017,
    summary: "Stateful stream processing framework built on Kafka, enabling fault-tolerant local state management."
  },
  {
    id: "linkedin-espresso",
    title: "Espresso: LinkedIn's Horizontally-Scalable Document Store",
    url: "https://engineering.linkedin.com/espresso/introducing-espresso-linkedins-hot-new-distributed-document-store",
    company: "LinkedIn",
    tags: ["nosql", "document-store", "distributed", "article"],
    year: 2012,
    summary: "Online, fault-tolerant, document-oriented data store for LinkedIn's most critical business data."
  },
  {
    id: "linkedin-voldemort",
    title: "Project Voldemort: Reliable Distributed Storage at LinkedIn",
    url: "https://engineering.linkedin.com/article/2012/06/project-voldemort-reliable-distributed-storage",
    company: "LinkedIn",
    tags: ["nosql", "distributed", "storage", "article"],
    year: 2012,
    summary: "LinkedIn's distributed key-value store based on Dynamo principles for high availability."
  },
  {
    id: "uber-ringpop",
    title: "Building Ringpop, a Distributed Gossip Layer",
    url: "https://eng.uber.com/ringpop-open-source-nodejs-library/",
    company: "Uber",
    tags: ["distributed", "gossip", "coordination", "article"],
    year: 2016,
    summary: "Consistent hash ring and gossip protocol for cluster membership and request routing in Node.js."
  },
  {
    id: "uber-presto",
    title: "Presto at Uber: Powering Uber's Ad Analytics",
    url: "https://eng.uber.com/presto/",
    company: "Uber",
    tags: ["analytics", "olap", "sql", "article"],
    year: 2018,
    summary: "How Uber deployed Presto to power interactive ad analytics with sub-second query latency."
  },
  {
    id: "uber-schemaless",
    title: "Designing Schemaless, Uber Engineering's Scalable Datastore",
    url: "https://www.uber.com/en-IN/blog/schemaless-sql-database/",
    company: "Uber",
    tags: ["database", "scalability", "mysql", "article"],
    year: 2016,
    summary: "How Uber built a scalable, fault-tolerant datastore on top of MySQL with flexible schemas."
  },
  {
    id: "uber-geofence",
    title: "How Uber Handles Geofencing",
    url: "https://eng.uber.com/go-geofence-highest-query-per-second-service/",
    company: "Uber",
    tags: ["geospatial", "high-qps", "article"],
    year: 2019,
    summary: "Building a geofencing microservice handling millions of queries per second with Go."
  },
  {
    id: "uber-orcestration",
    title: "Orchestrating Data/ML Workflows at Scale with Netflix Maestro (adapted Uber)",
    url: "https://eng.uber.com/managing-data-workflows-at-scale/",
    company: "Uber",
    tags: ["workflow", "ml", "orchestration", "article"],
    year: 2022,
    summary: "How Uber manages data and ML workflows at scale with a declarative workflow engine."
  },
  {
    id: "netflix-chaos",
    title: "Chaos Engineering: Building Confidence in System Behavior Through Experiments",
    url: "https://netflixtechblog.com/the-netflix-simian-army-16e57fbab116",
    company: "Netflix",
    tags: ["reliability", "chaos", "resilience", "article"],
    year: 2011,
    summary: "How Netflix deliberately injects failures to build confidence in their distributed systems."
  },
  {
    id: "netflix-zuul",
    title: "Zuul 2: The Netflix Journey to Asynchronous Non-Blocking Systems",
    url: "https://netflixtechblog.com/zuul-2-the-netflix-journey-to-asynchronous-non-blocking-systems-45947377fb5c",
    company: "Netflix",
    tags: ["api-gateway", "networking", "async", "article"],
    year: 2016,
    summary: "Migration of Netflix's API gateway from blocking I/O to fully async, improving throughput 25%."
  },
  {
    id: "netflix-hollow",
    title: "Netflix Hollow: Handling In-Memory Data Sets at Scale",
    url: "https://netflixtechblog.com/netflix-hollow-a-revolutionary-paradigm-for-building-cache-in-memory-data-sets-b2765a426c66",
    company: "Netflix",
    tags: ["caching", "in-memory", "article"],
    year: 2017,
    summary: "In-memory dataset library where one producer publishes data consumed by many cache nodes."
  },
  {
    id: "netflix-keystone",
    title: "Keystone Real-time Stream Processing Platform",
    url: "https://netflixtechblog.com/keystone-real-time-stream-processing-platform-a3ee651812a",
    company: "Netflix",
    tags: ["streaming", "real-time", "flink", "article"],
    year: 2018,
    summary: "Netflix's stream processing platform built on Flink, handling trillions of events per day."
  },
  {
    id: "netflix-titus",
    title: "Titus: Netflix Container Management Platform",
    url: "https://netflixtechblog.com/titus-the-netflix-container-management-platform-is-now-open-source-f868c9fb5436",
    company: "Netflix",
    tags: ["containers", "orchestration", "infrastructure", "article"],
    year: 2018,
    summary: "Netflix's proprietary container management platform integrating deeply with AWS infrastructure."
  },
  {
    id: "netflix-atlas",
    title: "Introducing Atlas: Netflix's Primary Telemetry Platform",
    url: "https://netflixtechblog.com/introducing-atlas-netflixs-primary-telemetry-platform-bd31f4d8ed9a",
    company: "Netflix",
    tags: ["observability", "metrics", "telemetry", "article"],
    year: 2014,
    summary: "In-memory time-series database for dimensional metrics at Netflix scale — billions of metrics/min."
  },
  {
    id: "twitter-snowflake",
    title: "Announcing Snowflake: Globally Unique ID Generation",
    url: "https://blog.twitter.com/engineering/en_us/a/2010/announcing-snowflake",
    company: "Twitter",
    tags: ["distributed", "id-generation", "article", "foundational"],
    year: 2010,
    summary: "Distributed unique ID generation service producing 64-bit IDs at high throughput without coordination."
  },
  {
    id: "twitter-manhattan",
    title: "Manhattan: Our Real-Time, Multi-Tenant Distributed Database for Twitter Scale",
    url: "https://blog.twitter.com/engineering/en_us/a/2014/manhattan-our-real-time-multi-tenant-distributed-database-for-twitter-scale",
    company: "Twitter",
    tags: ["nosql", "distributed", "real-time", "article"],
    year: 2014,
    summary: "Twitter's distributed key-value store powering Tweets, DMs, Timelines with multi-tenant isolation."
  },
  {
    id: "twitter-timeline",
    title: "The Infrastructure Behind Twitter: Scale",
    url: "https://blog.twitter.com/engineering/en_us/topics/infrastructure/2017/the-infrastructure-behind-twitter-scale",
    company: "Twitter",
    tags: ["scalability", "infrastructure", "article"],
    year: 2017,
    summary: "How Twitter's infrastructure evolved to handle 500M tweets/day with fanout and timeline caching."
  },
  {
    id: "stripe-idempotency",
    title: "Designing Robust and Predictable APIs with Idempotency",
    url: "https://stripe.com/blog/idempotency",
    company: "Stripe",
    tags: ["api", "reliability", "payments", "article"],
    year: 2019,
    summary: "How Stripe uses idempotency keys to make payment APIs safe to retry without duplicating charges."
  },
  {
    id: "stripe-sorbet",
    title: "Sorbet: A type checker for Ruby at Stripe",
    url: "https://stripe.com/blog/sorbet-stripes-type-checker-for-ruby",
    company: "Stripe",
    tags: ["type-systems", "ruby", "tooling", "article"],
    year: 2019,
    summary: "How Stripe built and adopted a gradual type checker across millions of lines of Ruby."
  },
  {
    id: "stripe-payment-flows",
    title: "Stripe's payments APIs: designing for reliability",
    url: "https://stripe.com/blog/payment-api-design",
    company: "Stripe",
    tags: ["api", "payments", "distributed", "reliability", "article"],
    year: 2022,
    summary: "Design principles behind Stripe's payment APIs — idempotency, atomicity, and failure handling."
  },
  {
    id: "airbnb-microservices",
    title: "Untangling Microservices: How Airbnb Reorganized Its Architecture",
    url: "https://medium.com/airbnb-engineering/loosely-coupling-airbnb-s-microservices-17e8a696c6b",
    company: "Airbnb",
    tags: ["microservices", "architecture", "article"],
    year: 2022,
    summary: "How Airbnb restructured thousands of microservices into a services mesh with centralized discovery."
  },
  {
    id: "airbnb-minerva",
    title: "Minerva: Airbnb's Metric Store",
    url: "https://medium.com/airbnb-engineering/how-airbnb-achieved-metric-consistency-at-scale-f23cc53dea70",
    company: "Airbnb",
    tags: ["analytics", "metrics", "data-platform", "article"],
    year: 2021,
    summary: "Centralized metric store ensuring consistent business metrics across reporting tools and teams."
  },
  {
    id: "airbnb-chronon",
    title: "Chronon: Airbnb's Feature Platform for ML",
    url: "https://medium.com/airbnb-engineering/chronon-airbnbs-data-platform-for-ai-3d0ad2b4a34a",
    company: "Airbnb",
    tags: ["ml", "feature-store", "data-platform", "article"],
    year: 2023,
    summary: "End-to-end feature engineering platform that bridges offline training and online serving of ML features."
  },
  {
    id: "cloudflare-workers",
    title: "Cloudflare Workers: Edge Computing Architecture",
    url: "https://blog.cloudflare.com/cloud-computing-without-containers/",
    company: "Cloudflare",
    tags: ["edge", "serverless", "v8", "article"],
    year: 2018,
    summary: "Running JavaScript at 200+ PoPs using V8 isolates instead of containers for cold-start performance."
  },
  {
    id: "cloudflare-durable-objects",
    title: "Durable Objects: Stateful Serverless at the Edge",
    url: "https://blog.cloudflare.com/durable-objects-easy-fast-correct-choose-three/",
    company: "Cloudflare",
    tags: ["edge", "stateful", "serverless", "article"],
    year: 2021,
    summary: "Strong consistency in a globally distributed system — how Durable Objects coordinate state at the edge."
  },
  {
    id: "cloudflare-ratelimiting",
    title: "How Cloudflare Handles Rate Limiting at Scale",
    url: "https://blog.cloudflare.com/counting-things-a-lot-of-different-things/",
    company: "Cloudflare",
    tags: ["rate-limiting", "distributed", "algorithms", "article"],
    year: 2021,
    summary: "Approximate counting in distributed systems — sliding windows without shared state."
  },
  {
    id: "discord-trillion-messages",
    title: "How Discord Stores Trillions of Messages",
    url: "https://discord.com/blog/how-discord-stores-trillions-of-messages",
    company: "Discord",
    tags: ["storage", "cassandra", "scalability", "article"],
    year: 2023,
    summary: "Discord's journey from Cassandra to ScyllaDB to store trillions of messages with consistent latency."
  },
  {
    id: "discord-read-states",
    title: "How Discord Stores Billions of Read States",
    url: "https://discord.com/blog/how-discord-stores-billions-of-messages",
    company: "Discord",
    tags: ["storage", "cassandra", "article"],
    year: 2017,
    summary: "Tracking whether each user has read each channel — an extreme write-amplification problem at Discord scale."
  },
  {
    id: "discord-rust",
    title: "Why Discord is Switching from Go to Rust",
    url: "https://discord.com/blog/why-discord-is-switching-from-go-to-rust",
    company: "Discord",
    tags: ["performance", "rust", "gc", "article"],
    year: 2020,
    summary: "Eliminating GC pauses in a latency-sensitive read states service by rewriting Go in Rust."
  },
  {
    id: "databricks-delta-lake",
    title: "Delta Lake: High-Performance ACID Table Storage over Cloud Object Stores",
    url: "https://www.vldb.org/pvldb/vol13/p3411-armbrust.pdf",
    company: "Databricks",
    tags: ["storage", "data-lake", "acid", "paper"],
    year: 2020,
    summary: "ACID transactions over object stores like S3 using transaction logs and optimistic concurrency."
  },
  {
    id: "databricks-photon",
    title: "Photon: A Fast Query Engine for Lakehouse Systems",
    url: "https://www.databricks.com/research/photon-technical-paper",
    company: "Databricks",
    tags: ["query-engine", "vectorized", "performance", "paper"],
    year: 2022,
    summary: "Vectorized execution engine in C++ for Apache Spark, delivering 4x–19x speedup over JVM-based Spark."
  },
  {
    id: "apache-flink",
    title: "Apache Flink: Stream and Batch Processing in a Single Engine",
    url: "https://asterios.katsifodimos.com/assets/publications/flink-deb.pdf",
    company: "Apache",
    tags: ["streaming", "batch", "distributed", "paper"],
    year: 2015,
    summary: "Unified batch and stream processing engine with stateful operators and exactly-once semantics."
  },
  {
    id: "snowflake-elastic-warehouse",
    title: "The Snowflake Elastic Data Warehouse",
    url: "https://dl.acm.org/doi/pdf/10.1145/2882903.2903741",
    company: "Snowflake",
    tags: ["data-warehouse", "cloud", "paper"],
    year: 2016,
    summary: "Multi-cluster shared data architecture separating compute from storage for elastic data warehousing."
  },
  {
    id: "cockroachdb-architecture",
    title: "CockroachDB: The Resilient Geo-Distributed SQL Database",
    url: "https://dl.acm.org/doi/pdf/10.1145/3318464.3386134",
    company: "CockroachDB",
    tags: ["database", "distributed", "sql", "paper"],
    year: 2020,
    summary: "Geo-distributed SQL database providing serializable isolation and high availability without sharding."
  },
  {
    id: "tidb-architecture",
    title: "TiDB: A Raft-based HTAP Database",
    url: "https://www.vldb.org/pvldb/vol13/p3072-huang.pdf",
    company: "PingCAP",
    tags: ["database", "distributed", "htap", "raft", "paper"],
    year: 2020,
    summary: "HTAP database combining TiKV (row-store) and TiFlash (columnar) with Raft for strong consistency."
  },
  {
    id: "cap-theorem",
    title: "Brewer's Conjecture and the Feasibility of Consistent, Available, Partition-Tolerant Web Services",
    url: "https://users.ece.cmu.edu/~adrian/731-sp04/readings/GL-cap.pdf",
    company: "Academic",
    tags: ["distributed", "cap", "theory", "paper", "foundational"],
    year: 2002,
    summary: "Proof of the CAP theorem: distributed systems can only guarantee two of consistency, availability, partition-tolerance."
  },
  {
    id: "raft",
    title: "In Search of an Understandable Consensus Algorithm (Raft)",
    url: "https://raft.github.io/raft.pdf",
    company: "Academic",
    tags: ["consensus", "distributed", "paper", "foundational"],
    year: 2014,
    summary: "Raft consensus algorithm designed for understandability as an alternative to Paxos."
  },
  {
    id: "paxos",
    title: "Paxos Made Simple",
    url: "https://lamport.azurewebsites.net/pubs/paxos-simple.pdf",
    company: "Academic",
    tags: ["consensus", "distributed", "paper", "foundational"],
    year: 2001,
    summary: "Lamport's accessible description of the Paxos algorithm for fault-tolerant distributed consensus."
  },
  {
    id: "consistent-hashing",
    title: "Consistent Hashing and Random Trees",
    url: "https://www.cs.princeton.edu/courses/archive/fall09/cos518/papers/chash.pdf",
    company: "Academic",
    tags: ["distributed", "hashing", "paper", "foundational"],
    year: 1997,
    summary: "Algorithm for distributing data across nodes so adding/removing nodes minimizes remapping."
  },
  {
    id: "vector-clocks",
    title: "Time, Clocks, and the Ordering of Events in a Distributed System",
    url: "https://lamport.azurewebsites.net/pubs/time-clocks.pdf",
    company: "Academic",
    tags: ["distributed", "clocks", "theory", "paper", "foundational"],
    year: 1978,
    summary: "Lamport's seminal paper on logical clocks for establishing causal order of events without physical clocks."
  },
  {
    id: "two-phase-commit",
    title: "Notes on Distributed Databases (Two-Phase Commit)",
    url: "https://www.cs.cmu.edu/~dga/15-712/F14/papers/bernstein-1987.pdf",
    company: "Academic",
    tags: ["distributed", "transactions", "paper", "foundational"],
    year: 1987,
    summary: "Classic treatment of distributed transaction commit protocols including 2PC and 3PC."
  },
  {
    id: "crdt",
    title: "A Comprehensive Study of Convergent and Commutative Replicated Data Types",
    url: "https://hal.inria.fr/inria-00555588/document",
    company: "Academic",
    tags: ["distributed", "crdt", "consistency", "paper"],
    year: 2011,
    summary: "CRDTs: data structures that merge automatically without coordination, enabling strong eventual consistency."
  },
  {
    id: "pinterest-sharding",
    title: "Sharding Pinterest: How we scaled our MySQL fleet",
    url: "https://medium.com/pinterest-engineering/sharding-pinterest-how-we-scaled-our-mysql-fleet-3f341e96ca6f",
    company: "Pinterest",
    tags: ["mysql", "sharding", "scalability", "article"],
    year: 2015,
    summary: "How Pinterest sharded MySQL to support billions of pins without cross-shard transactions."
  },
  {
    id: "pinterest-distcache",
    title: "Caching with consistency: Pinterest's approach",
    url: "https://medium.com/pinterest-engineering/how-we-ensure-data-consistency-in-our-distributed-systems-4b5ffc0ab2eb",
    company: "Pinterest",
    tags: ["caching", "consistency", "distributed", "article"],
    year: 2022,
    summary: "Cache invalidation patterns for maintaining consistency between MySQL and memcache at Pinterest scale."
  },
  {
    id: "slack-flannel",
    title: "Flannel: An Application-Level Edge Cache to Make Slack Scale",
    url: "https://slack.engineering/flannel-an-application-level-edge-cache-to-make-slack-scale-b9d30834e8fe",
    company: "Slack",
    tags: ["caching", "edge", "scalability", "article"],
    year: 2019,
    summary: "Application-level edge caching layer reducing load on Slack's backend by 75%."
  },
  {
    id: "slack-search",
    title: "Scaling Slack's Search Infrastructure",
    url: "https://slack.engineering/search-infrastructure-for-slack-messages/",
    company: "Slack",
    tags: ["search", "scalability", "elasticsearch", "article"],
    year: 2019,
    summary: "How Slack rebuilt its search infrastructure to handle billions of messages with low latency."
  },
  {
    id: "shopify-pods",
    title: "Shopify's Architecture to Handle the World's Biggest Flash Sales",
    url: "https://shopify.engineering/how-shopify-handles-flash-sales",
    company: "Shopify",
    tags: ["scalability", "flash-sales", "architecture", "article"],
    year: 2021,
    summary: "Pods architecture enabling horizontal isolation for millions of shops under extreme flash sale traffic."
  },
  {
    id: "shopify-ident",
    title: "Refactoring Legacy Code with the Strangler Fig Pattern",
    url: "https://shopify.engineering/refactoring-legacy-code-strangler-fig-pattern",
    company: "Shopify",
    tags: ["refactoring", "architecture", "patterns", "article"],
    year: 2022,
    summary: "Migrating a decade-old Rails monolith without rewrites using the strangler fig migration pattern."
  },
  {
    id: "dropbox-magic-pocket",
    title: "Magic Pocket: Dropbox's Exabyte-Scale Blob Storage System",
    url: "https://dropbox.tech/infrastructure/magic-pocket-infrastructure",
    company: "Dropbox",
    tags: ["storage", "blob", "object-storage", "article"],
    year: 2016,
    summary: "Custom exabyte-scale storage system that saved Dropbox $75M/year by moving off AWS S3."
  },
  {
    id: "dropbox-nucleus",
    title: "Nucleus: Dropbox's Migration to a Modular Monolith",
    url: "https://dropbox.tech/infrastructure/atlas--our-journey-from-a-python-monolith-to-a-managed-platform",
    company: "Dropbox",
    tags: ["architecture", "migration", "python", "article"],
    year: 2018,
    summary: "How Dropbox migrated their Python monolith to a typed, modular service platform."
  },
  {
    id: "figma-multiplayer",
    title: "How Figma's Multiplayer Technology Works",
    url: "https://www.figma.com/blog/how-figmas-multiplayer-technology-works/",
    company: "Figma",
    tags: ["crdt", "real-time", "collaboration", "article"],
    year: 2019,
    summary: "Operational transforms vs CRDTs for real-time collaborative design editing at Figma's scale."
  },
  {
    id: "figma-postgres",
    title: "How Figma Scaled to Multiple Databases",
    url: "https://www.figma.com/blog/how-figma-scaled-to-multiple-databases/",
    company: "Figma",
    tags: ["database", "postgres", "scalability", "article"],
    year: 2020,
    summary: "Vertical partitioning and PgBouncer connection pooling to scale Figma's Postgres past a single node."
  },
  {
    id: "github-mysql-ha",
    title: "MySQL High Availability at GitHub",
    url: "https://github.blog/engineering/mysql-high-availability-at-github/",
    company: "GitHub",
    tags: ["mysql", "ha", "reliability", "article"],
    year: 2018,
    summary: "Orchestrator-based MySQL HA with automated failover supporting GitHub's core data tier."
  },
  {
    id: "github-actions-scale",
    title: "Scaling GitHub Actions with GitHub-hosted runners",
    url: "https://github.blog/2024-03-19-scaling-github-actions-with-github-hosted-runners/",
    company: "GitHub",
    tags: ["ci-cd", "orchestration", "scaling", "article"],
    year: 2024,
    summary: "How GitHub elastically provisions millions of ephemeral runner VMs for Actions workflows."
  },
  {
    id: "spotify-event-delivery",
    title: "Event Delivery at Spotify",
    url: "https://engineering.atspotify.com/2016/03/spotifys-event-delivery-the-road-to-the-cloud-part-i/",
    company: "Spotify",
    tags: ["streaming", "events", "kafka", "article"],
    year: 2016,
    summary: "Spotify's migration to cloud-based event delivery pipeline processing billions of events per day."
  },
  {
    id: "spotify-backstage",
    title: "What is Backstage: An Open Platform for Building Developer Portals",
    url: "https://engineering.atspotify.com/2020/03/what-is-backstage-and-why-do-we-build-it/",
    company: "Spotify",
    tags: ["developer-experience", "platform", "article"],
    year: 2020,
    summary: "Developer portal unifying infrastructure tooling, service discovery, and docs across Spotify's 2000+ services."
  },
  {
    id: "msft-cosmos",
    title: "Azure Cosmos DB: A Globally Distributed, Multi-Model Database Service",
    url: "https://dl.acm.org/doi/abs/10.1145/3035918.2967942",
    company: "Microsoft",
    tags: ["database", "distributed", "cloud", "paper"],
    year: 2017,
    summary: "Multi-model globally distributed database with five well-defined consistency levels."
  },
  {
    id: "msft-sinfonia",
    title: "Sinfonia: A New Paradigm for Building Scalable Distributed Systems",
    url: "https://www.cs.cornell.edu/andru/cs6410/fall12/papers/sinfonia.pdf",
    company: "Microsoft",
    tags: ["distributed", "transactions", "paper"],
    year: 2007,
    summary: "Mini-transaction abstraction on top of shared memory nodes for building distributed applications."
  },
  {
    id: "apple-foundationdb",
    title: "FoundationDB: A Distributed Unbundled Transactional Key Value Store",
    url: "https://www.foundationdb.org/files/fdb-paper.pdf",
    company: "Apple",
    tags: ["database", "distributed", "transactions", "paper"],
    year: 2021,
    summary: "Strictly serializable, distributed KV store used as the backbone for CloudKit and other Apple services."
  },
  {
    id: "highscalability-uber",
    title: "Uber's Big Data Platform: 100+ Petabytes with Minute Latency",
    url: "https://www.uber.com/blog/uber-big-data-platform/",
    company: "Uber",
    tags: ["big-data", "data-platform", "hadoop", "article"],
    year: 2018,
    summary: "Uber's data platform evolution to petabyte-scale with near-real-time analytics."
  },
  {
    id: "real-world-software-arch",
    title: "How GitHub Delivers Millions of SSH Keys via the Filesystem",
    url: "https://github.blog/engineering/how-we-made-github-fast/",
    company: "GitHub",
    tags: ["ssh", "filesystem", "performance", "article"],
    year: 2009,
    summary: "Filesystem-backed SSH key authorization at GitHub scale — elegant simplicity over complexity."
  },
  {
    id: "instagram-postgres",
    title: "Sharding & IDs at Instagram",
    url: "https://instagram-engineering.com/sharding-ids-at-instagram-1cf5a71e5a5c",
    company: "Instagram",
    tags: ["sharding", "postgres", "id-generation", "article"],
    year: 2012,
    summary: "Instagram's ID generation strategy using PostgreSQL sequences to create time-sortable shard-aware IDs."
  },
  {
    id: "instagram-caching",
    title: "What Powers Instagram: Hundreds of Instances, Dozens of Technologies",
    url: "https://instagram-engineering.com/what-powers-instagram-hundreds-of-instances-dozens-of-technologies-adf2e22da2ad",
    company: "Instagram",
    tags: ["infrastructure", "scalability", "article"],
    year: 2011,
    summary: "Early Instagram stack serving millions of photos — Django, PostgreSQL, Redis, Gearman, and nginx."
  },
  {
    id: "whatsapp-scale",
    title: "WhatsApp: Making the Case for Simple Scale",
    url: "https://highscalability.com/whatsapp-making-the-case-for-simple-scale/",
    company: "WhatsApp",
    tags: ["scalability", "erlang", "messaging", "article"],
    year: 2014,
    summary: "50 engineers, 900M users: Erlang, FreeBSD, and ruthless simplicity as the architecture of WhatsApp."
  },
  {
    id: "designing-data-intensive",
    title: "Designing Data-Intensive Applications (DDIA) — Chapter Summaries",
    url: "https://dataintensive.net/",
    company: "O'Reilly",
    tags: ["book", "distributed", "databases", "foundational"],
    year: 2017,
    summary: "Martin Kleppmann's essential guide to storage engines, replication, partitioning, and stream processing."
  },
  {
    id: "google-colossus",
    title: "A peek behind Colossus, Google's file system",
    url: "https://cloud.google.com/blog/products/storage-data-transfer/a-peek-behind-colossus-googles-file-system",
    company: "Google",
    tags: ["storage", "distributed", "infrastructure", "article"],
    year: 2021,
    summary: "Overview of Colossus, the successor to GFS that underpins Google Cloud storage — disaggregation, metadata, and reliability at exabyte scale."
  },
  {
    id: "linkedin-log-unifying",
    title: "The Log: What Every Software Engineer Should Know About Real-Time Data's Unifying Abstraction",
    url: "https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying",
    company: "LinkedIn",
    tags: ["streaming", "distributed", "messaging", "article", "foundational"],
    year: 2013,
    summary: "Jay Kreps on logs as the universal primitive: databases, replication, stream processing, and Kafka all unified through the append-only log abstraction."
  },
  {
    id: "netflix-realtime-infra",
    title: "The Four Innovation Phases of Netflix's Trillions Scale Real-time Data Infrastructure",
    url: "https://zhenzhongxu.com/the-four-innovation-phases-of-netflixs-trillions-scale-real-time-data-infrastructure-2370938d7f01",
    company: "Netflix",
    tags: ["streaming", "real-time", "infrastructure", "article"],
    year: 2022,
    summary: "How Netflix's real-time data infrastructure evolved across four phases from 2015–2021, covering Kafka, Flink, and the Keystone platform."
  },
  {
    id: "meta-log-time-denorm",
    title: "Using Log-Time Denormalization for Data Wrangling at Meta",
    url: "https://medium.com/meta-analytics/using-log-time-denormalization-for-data-wrangling-at-meta-3b6fc050268a",
    company: "Meta",
    tags: ["analytics", "data-platform", "performance", "article"],
    year: 2023,
    summary: "Meta's technique of pre-joining and denormalizing datasets at log time to reduce query latency across their analytics infrastructure."
  },
  {
    id: "uber-deepeta",
    title: "DeepETA: How Uber Predicts Arrival Times Using Deep Learning",
    url: "https://eng.uber.com/deepeta-how-uber-predicts-arrival-times/",
    company: "Uber",
    tags: ["ml", "infrastructure", "real-time", "article"],
    year: 2022,
    summary: "Uber's deep learning model layered on top of routing graph ETAs, combining real-time signals with historical data for more accurate arrival time predictions."
  },
  {
    id: "uber-two-tower",
    title: "Innovative Recommendation Applications Using Two Tower Embeddings at Uber",
    url: "https://www.uber.com/en-IN/blog/innovative-recommendation-applications-using-two-tower-embeddings/",
    company: "Uber",
    tags: ["ml", "search", "infrastructure", "article"],
    year: 2022,
    summary: "Replacing 1,035 city-specific DeepMF models with a single global Two-Tower embedding model, drastically cutting training time while improving quality."
  },
  {
    id: "netflix-personalized-homepage",
    title: "Learning a Personalized Homepage",
    url: "https://netflixtechblog.com/learning-a-personalized-homepage-aa8ec670359a",
    company: "Netflix",
    tags: ["ml", "architecture", "article"],
    year: 2017,
    summary: "How Netflix's homepage ranking system personalizes the layout of rows and row members for each member using contextual bandits."
  },
  {
    id: "instagram-explore-recsys",
    title: "Powered by AI: Instagram's Explore Recommender System",
    url: "https://ai.meta.com/blog/powered-by-ai-instagrams-explore-recommender-system/",
    company: "Meta",
    tags: ["ml", "search", "infrastructure", "article"],
    year: 2019,
    summary: "Instagram's two-stage retrieval and ranking pipeline for Explore, handling billions of candidate media items with FAISS and neural rankers."
  },
  {
    id: "meta-building-threads",
    title: "Building Meta's Threads App (Real-World Engineering Challenges)",
    url: "https://newsletter.pragmaticengineer.com/p/building-the-threads-app",
    company: "Meta",
    tags: ["infrastructure", "scalability", "architecture", "article"],
    year: 2023,
    summary: "How Meta launched Threads to 100M users in its first week — architecture decisions, ActivityPub integration, and scaling surprises."
  },
  {
    id: "amazon-inside-engineering",
    title: "Inside Amazon's Engineering Culture",
    url: "https://newsletter.pragmaticengineer.com/p/amazon",
    company: "Amazon",
    tags: ["architecture", "infrastructure", "article"],
    year: 2023,
    summary: "Deep dive into Amazon's engineering culture: two-pizza teams, working backwards, operational reviews, and how the org structure shapes system design."
  },
  {
    id: "uber-master-green",
    title: "Keeping Master Green at Scale",
    url: "https://dl.acm.org/doi/pdf/10.1145/3302424.3303970",
    company: "Uber",
    tags: ["infrastructure", "ci-cd", "scalability", "paper"],
    year: 2019,
    summary: "Uber's system for maintaining a green master branch across hundreds of engineers committing simultaneously — probabilistic testing and merge queues."
  },
  {
    id: "notion-data-model",
    title: "Exploring Notion's Data Model: A Block-Based Architecture",
    url: "https://www.notion.so/blog/data-model-behind-notion",
    company: "Notion",
    tags: ["database", "architecture", "article"],
    year: 2021,
    summary: "Notion's universal block model — how every piece of content is a typed block stored in a single table, enabling flexible document structure without schema migrations."
  },
  {
    id: "algolia-search-arch",
    title: "Evolution of Search Engines Architecture — Algolia New Search Architecture",
    url: "http://highscalability.com/blog/2021/8/2/evolution-of-search-engines-architecture-algolia-new-search.html",
    company: "Algolia",
    tags: ["search", "architecture", "distributed", "article"],
    year: 2021,
    summary: "Algolia's evolution from a single-node search engine to a distributed, replicated architecture capable of sub-10ms global queries."
  },
  {
    id: "cloudflare-ecc",
    title: "A (Relatively Easy To Understand) Primer on Elliptic Curve Cryptography",
    url: "https://blog.cloudflare.com/a-relatively-easy-to-understand-primer-on-elliptic-curve-cryptography/",
    company: "Cloudflare",
    tags: ["networking", "security", "article"],
    year: 2013,
    summary: "How ECC works under the hood — point multiplication on curves, why it's efficient, and how Cloudflare deploys it across millions of TLS connections."
  },
  {
    id: "etsy-deep-learning-search",
    title: "Deep Learning for Search Ranking at Etsy",
    url: "https://www.etsy.com/codeascraft/deep-learning-for-search-ranking-at-etsy",
    company: "Etsy",
    tags: ["search", "ml", "infrastructure", "article"],
    year: 2020,
    summary: "Etsy's migration from gradient-boosted trees to deep learning for search ranking, including training infrastructure and serving latency challenges."
  },
  {
    id: "etsy-dl-platform",
    title: "Improving Support for Deep Learning in Etsy's ML Platform",
    url: "https://www.etsy.com/codeascraft/improving-support-for-deep-learning-in-etsy39s-ml-platform",
    company: "Etsy",
    tags: ["ml", "infrastructure", "article"],
    year: 2021,
    summary: "How Etsy extended their ML platform to support GPU training, experiment tracking, and model serving for deep learning workloads."
  },
  {
    id: "google-rules-of-ml",
    title: "Rules of Machine Learning: Best Practices for ML Engineering",
    url: "https://developers.google.com/machine-learning/guides/rules-of-ml",
    company: "Google",
    tags: ["ml", "infrastructure", "article"],
    year: 2018,
    summary: "Martin Zinkevich's 43 rules for productive ML engineering: when to use ML, feature engineering, training-serving skew, and evaluation pitfalls."
  },
  {
    id: "snap-ad-ranking",
    title: "Machine Learning for Snapchat Ad Ranking",
    url: "https://eng.snap.com/machine-learning-snap-ad-ranking",
    company: "Snap",
    tags: ["ml", "infrastructure", "article"],
    year: 2022,
    summary: "Snap's multi-stage ad ranking pipeline: candidate retrieval, feature engineering, click/install prediction models, and real-time serving at scale."
  },
  {
    id: "howcomplexsystemsfail",
    title: "How Complex Systems Fail",
    url: "https://how.complexsystems.fail/",
    company: "Academic",
    tags: ["reliability", "architecture", "foundational", "article"],
    year: 1998,
    summary: "Richard Cook's 18 observations on failure in complex systems — latent conditions, defense layers, and why practitioners are always operating near failure."
  },
  {
    id: "anthropic-building-agents",
    title: "Building Effective Agents",
    url: "https://www.anthropic.com/engineering/building-effective-agents",
    company: "Anthropic",
    tags: ["ml", "architecture", "article"],
    year: 2024,
    summary: "Anthropic's framework for building reliable AI agents: workflows vs. agents, tool use patterns, multi-agent architectures, and safety considerations."
  },
  {
    id: "hnsw-pinecone",
    title: "Hierarchical Navigable Small Worlds (HNSW)",
    url: "https://www.pinecone.io/learn/series/faiss/hnsw/",
    company: "Pinecone",
    tags: ["search", "algorithms", "ml", "article"],
    year: 2021,
    summary: "How HNSW builds a layered graph index for approximate nearest-neighbor search — the algorithm behind most production vector databases."
  },
  {
    id: "knightmare-devops",
    title: "Knightmare: A DevOps Cautionary Tale",
    url: "https://dougseven.com/2014/04/17/knightmare-a-devops-cautionary-tale/",
    company: "Knight Capital",
    tags: ["reliability", "infrastructure", "article"],
    year: 2014,
    summary: "How a faulty deployment at Knight Capital sent $397M of erroneous orders in 45 minutes — a case study in deployment safety and rollback procedures."
  },
  {
    id: "puffer-streaming",
    title: "Puffer: Stanford's Adaptive Bitrate Video Streaming Research",
    url: "https://puffer.stanford.edu/faq/",
    company: "Academic",
    tags: ["networking", "infrastructure", "article"],
    year: 2019,
    summary: "Stanford's live TV streaming system using ML-based adaptive bitrate algorithms, deployed in the wild to study real network conditions."
  },
  {
    id: "systems-design-explains-world",
    title: "Systems Design Explains the World: Volume 1",
    url: "https://apenwarr.ca/log/20201227",
    company: "Academic",
    tags: ["architecture", "distributed", "article"],
    year: 2020,
    summary: "Avery Pennarun on systems design patterns that recur across disciplines: CAP theorem analogies, queueing theory, and why bureaucracy looks like cache invalidation."
  },
  {
    id: "community-notes-ranking",
    title: "How Are Community Notes Ranked?",
    url: "https://communitynotes.x.com/guide/en/under-the-hood/ranking-notes",
    company: "Twitter",
    tags: ["algorithms", "ml", "article"],
    year: 2023,
    summary: "The open-source matrix factorization algorithm that surfaces notes with cross-partisan agreement — bridging-based ranking to resist polarization."
  },
];