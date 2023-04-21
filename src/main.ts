import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { APIRouterV1 } from './routes';

dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(cors());

app.use('/api', APIRouterV1);

app.get('/', (req, res) => {
	res.json({ message: true });
});

app.listen(PORT, () => {
	console.log('Server is listening on port ' + PORT);
});
