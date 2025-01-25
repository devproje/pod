// @deno-types="npm:@types/express"
import express from "npm:express";
import { index } from "./routes/index.ts";
import cookieParser from "npm:cookie-parser";

const app = express();

app.set("views", "views");
app.set("view engine", "pug");

app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));

app.use("/", index);

console.log("server port bind at http://0.0.0.0:3000");
app.listen(3000);
