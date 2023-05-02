import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { APIRouterV1 } from './routes';
import { authenticateToken } from './middleware/auth';

dotenv.config();

const PORT = process.env.PORT || 5050;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', APIRouterV1);

app.get('/', (req, res) => {
	res.json({ message: true });
});

app.listen(PORT, () => {
	console.log('Server is listening on port ' + PORT);
});
