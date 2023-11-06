const {client} = require('./client')

const admin = client.admin();

const init = async () => {
    console.log('connecting admin...')
    await admin.connect()
    console.log('connected with admin\n')

    console.log('creating topic rider-updates...')
    await admin.createTopics({
        topics: [
            {
                topic: 'rider-updates',
                numPartitions: 2,
            }
        ]
    })
    console.log('topic created\n')

    console.log('disconnecting admin...')
    await admin.disconnect()
    console.log('disconnected with admin\n')
}

init();

