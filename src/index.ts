import  express, {Request, Response} from 'express'
import { initDatabase } from './repository/postRepository';
import { PORT } from './config';
import { postRouter } from './router/postRouter';
import { rateLimiterMiddleware } from './middleware/rateLimiter';

const app = express();


app.use(rateLimiterMiddleware)
app.use("/", postRouter)


const setup = async () =>{
    await initDatabase();
}

setup().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running at PORT: ${PORT}.`)
    })
})