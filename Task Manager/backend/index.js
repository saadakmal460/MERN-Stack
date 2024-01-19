import  express  from "express";
import {Port} from "./config.js"
import tasks from "./controllers/routes/taskRoutes.js" 
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Tutorial');
});



app.use('/tasks' , tasks)


app.listen(Port , ()=>{
    console.log(`App is listening to port ${Port}`);
})