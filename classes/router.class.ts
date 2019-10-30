import { Router } from "express";
import { callbackExpressMethod, MyExpressAvailableMethods } from "./interfaces";


export class AppRouter {
    router: Router;
    
    constructor(){
        this.router = Router();
    }
     
    addRoute(path: string, type: MyExpressAvailableMethods, callback: callbackExpressMethod){
        switch(type){
            case 'get':
                this.router.get(path, callback);
                break;
            case 'post':
                this.router.post(path, callback);
                break;
            case 'put':
                this.router.put(path, callback);
                break;
            case 'delete':
                this.router.delete(path, callback);
                break;
            default:
                this.router.get(path, callback);
                break;                
        }
    }

    getRouter(){
        return this.router;
    }

}