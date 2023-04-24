import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const EXPIRES_IN = process.env.EXPIRES_IN;

export const generateAccessToken = (payload: string | Object | Buffer) => {
	return jwt.sign(payload, JWT_SECRET as string, { expiresIn: EXPIRES_IN as string });
};
