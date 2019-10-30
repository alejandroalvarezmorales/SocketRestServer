import { Request, Response} from 'express';
import { AppRouter } from '../classes/router.class';
import { SERVER } from '../classes/server.class';


const router = new AppRouter();
export const ROUTER = router.getRouter();

router.addRoute('/*/:id', 'post', (req: Request, res: Response ) => {
    
    SERVER.getIOServer().emit('message', {
        question: req.body.question,
        response: req.body.response
    });
    
    return res.json({
        ok: true,
        table: req.originalUrl.split('/')[1],
        params: req.params.id
    });
});

