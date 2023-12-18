/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";

export function errorHandler(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) {
	console.error(err);

	if (err instanceof CustomError) {
		return res.status(err.statusCode).json({ error: err.message });
	}

	return res.status(500).json({ error: "Internal Server Error" });
}

export class CustomError extends Error {
	constructor(public statusCode: number, message: string) {
		super(message);
		this.name = "CustomError";
	}
}
