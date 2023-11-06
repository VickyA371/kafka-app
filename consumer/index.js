const {client} = require('../client')

const init = async () => {
    const consumer = client.consumer({
        groupId: 'user-1'
    });

    // subscribing topic
    await consumer.subscribe({
        topics: ['rider-updates']
    })

    // subscribing listening messages from producers
    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            // message data is in buffer type so we are using toString to convert it to string
            console.log(`Topic: ${topic} Partition: ${partition} Message: ${message.value.toString()}`)
        }
    })

    // disconnect consumer when no longer needed, mostly won't needed
    // await consumer.disconnect()
}

init()