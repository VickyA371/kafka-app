const { Kafka } = require("kafkajs");

// creating instance for kafka
const kafka = new Kafka();

exports.client = kafka