import express from "express";

const app = express();

const PORT = 3000;
const listenHandler = () => console.log(`i'm listening from http://localhost:${PORT}!!`);

app.listen(PORT, listenHandler);