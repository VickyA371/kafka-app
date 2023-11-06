const {client} = require('../client')


const init = async () => {
    const producer = client.producer();

    console.log('connecting producer...')
    await producer.connect()
    console.log('connected with producer\n')
    
    console.log('sending an message...')
    await producer.send({
        topic: 'rider-updates',
        messages: [
            {
                key: 'location-update',
                value: JSON.stringify({
                    name: 'Tony Stark',
                    location: 'SOUTH'
                })
            }
        ],
    })
    console.log('message sent...')

    console.log('disconnecting producer...')
    await producer.disconnect()
    console.log('disconnected with producer\n')
}

init();

