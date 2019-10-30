import { ROUTER } from './routes/routes';
import { SERVER } from './classes/server.class';

let main = () => {
    SERVER.addMiddleware(ROUTER);

    SERVER.start( (status: any) => {
        console.log(`Server started in port: ${ status.port }`);
    });
};



main();