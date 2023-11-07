# kafka-app

Kafka-app is a demo for kafka usage for beginner level.

> Apache Kafka is an open-source distributed streaming system used for stream processing, real-time data pipelines, and data integration at scale. Originally created to handle real-time data feeds at LinkedIn in 2011, Kafka quickly evolved from messaging queue to a full-fledged event streaming platform capable of handling over 1 million messages per second, or trillions of messages per day.

Basic Understanding

> Basically database directly can't handle thousands of requests at the same time, database may go down if we try to do so at that time we can use kafka to decide which services to execute at run time and can process data before db operations and we also can insert those processed data in bulk order to our db.

## Features
- Create kafka client
- Create producer to send messages to consumers
- Create consumer (multiple consumers also supported)
- Listener messages from producer


## Prerequisite
- Knowledge
  - Node.JS Intermediate level
  - Experience with designing distributed systems
- Tools
  - Node.js: [Download Node.JS](https://nodejs.org/en)
  - Docker: [Download Docker](https://www.docker.com)
  - VsCode: [Download VSCode](https://code.visualstudio.com)

## Commands
- Start Zookeper Container and expose PORT `2181`.
```bash
docker run -p 2181:2181 zookeeper
```

- Start Kafka Container, expose PORT `9092` and setup ENV variables.
```bash
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```


## Running Locally
- Run Multiple Consumers
```bash
node consumer.js <GROUP_NAME>
```

- Create Producer
```bash
node producer.js
```

```bash
> tony south
> tony north
```

> Resources Reference: https://www.youtube.com/watch?v=ZJJHm_bd9Zo&t=2s
