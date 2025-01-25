// @deno-types="npm:@types/express"
import { Router, Request, Response } from "express";

export const index = Router();

index.use("/", (_: Request, res: Response) => {
	res.render("index", { title: "Home" });
});
