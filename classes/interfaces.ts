import { Request, Response } from 'express';

export interface callbackListen {
    ():void;
}

export interface callbackExpressMethod {
    (req: Request, res: Response): any;
}


export type MyExpressAvailableMethods = 'get' | 'post' | 'put' | 'delete';