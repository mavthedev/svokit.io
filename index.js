import { Server as Sock } from "socket.io"
import config from "./config.js"

export default {
    name: `realtime`,
    async configureServer(serv) {
        console.log('config')
        const io = new Sock(serv.httpServer)
        (await config).mount(io, serv)
    }
}
export function defineConfig(config) {return config}