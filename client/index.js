const { Kafka } = require("kafkajs");

// creating instance for kafka
const kafka = new Kafka({
    clientId: 'my-app', // any string that we suppose to use as our app clientId
    brokers: [
        '192.168.1.2:9092' // <host>/<port_addr>
    ]
});

exports.client = kafka