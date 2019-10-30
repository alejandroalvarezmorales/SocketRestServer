import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import SocketIO from 'socket.io';
import http from 'http';
import * as events from '../sockets/socket';
import { CONFIG } from '../global/environment';

class Server {
    private app: express.Application;
    private port: number;

    private io: SocketIO.Server;
    private httpServer: http.Server;

    getIOServer(): SocketIO.Server{
        return this.io;
    }

    constructor(port: number){
        this.app = express();
        this.port = port;

        //add body parser
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(bodyParser.json());
        
        //add cors
        this.app.use(cors({origin:true, credentials: true}));
        
        //add socketio to server
        this.httpServer = new http.Server(this.app);
        this.io = SocketIO(this.httpServer);
        this.enableSockets();

    }

    start( callback: Function ) {
        this.httpServer.listen(this.port);
        callback({
            status: true,
            port: this.port
        })
    }



    addMiddleware(middleware: any) {
        this.app.use('/', middleware);
    }

    private enableSockets() {
        console.log('Socket server ready to listen clients.')
        this.io.on('connection', client => {
            console.log('Usuario Conectado:');

            // set socket events here events here...
            // from sockets/socket.ts
            events.disconnect(client);

        });
    }


}

export const SERVER = new Server(CONFIG.express_port);