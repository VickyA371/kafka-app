const {client} = require('./client')

const init = async () => {
    console.log('connecting admin...')
    await client.connect()
    console.log('connected with admin\n')

    console.log('creating topic rider-updates...')
    await client.createTopics({
        topics: [
            {
                topic: 'rider-updates',
                numPartitions: 2,
            }
        ]
    })
    console.log('topic created\n')

    console.log('disconnecting admin...')
    await client.disconnect()
    console.log('disconnected with admin\n')
}

init();

