const server = require("./server")

const exitStatusSuccess = 0
const exitStatusFailure = 1

;(async () => {
    try {
        await server.start()
        const exitSignals = ["SIGINT", "SIGTERM", "SIGQUIT"]
        for (const exitSignal of exitSignals) {
            process.on(exitSignal, async () => {
                try {
                    await server.stop()
                    console.info("App exited with success")
                    process.exit(exitStatusSuccess)
                } catch (err) {
                    console.error(`App exited with error: ${err}`)
                    process.exit(exitStatusFailure)
                }
            })
        }
    } catch (err) {
        console.error(`App exited with error: ${err}`)
        process.exit(exitStatusFailure)
    }
})()
