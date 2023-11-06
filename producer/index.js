const {client} = require('../client')
const readline = require('readline')

// creating cli interface to read input from user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const init = async () => {
    const producer = client.producer();

    console.log('connecting producer...')
    await producer.connect()
    console.log('connected with producer\n')

    rl.setPrompt('>');
    rl.prompt();

    rl.on("line", async (line) => {
        const [name, location] = line.split(' '); // reading name and location from user input

        console.log('sending an message...')
        await producer.send({
            topic: 'rider-updates',
            messages: [
                {
                    partition: location.toLowerCase() === 'north' ? 0 : 1, // specifying partition
                    key: 'location-update',
                    value: JSON.stringify({
                        name,
                        location
                    })
                }
            ],
        })
        console.log('message sent...')
    }).on('close', async () => {
        console.log('disconnecting producer...')
        await producer.disconnect()
        console.log('disconnected with producer\n')
    })
}

init();

