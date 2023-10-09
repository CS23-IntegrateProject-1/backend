import express,{Request,Response} from 'express';
import cors from 'cors';
import configureCors from './configs/corsConfig';
import loadEnv from './configs/dotenvConfig';
import cookieParser from 'cookie-parser';
import { errorHandler } from './middlewares/errorHandler';

loadEnv(); 

const app = express();

app.use(cors(configureCors()));
app.use(express.json());
app.use(cookieParser());

// Error handling middleware (should be placed after your routes)
app.use(errorHandler);

const port = process.env.PORT || 3000;

app.get('/', (req : Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});