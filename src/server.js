import express from "express";

const app = express();

const PORT = 3000;
const listenHandler = () => console.log(`i'm listening from http://localhost:${PORT}!!`);

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use("/public", express.static(__dirname + "/public"));

app.get("/",(req, res) => res.render("home"));

app.listen(PORT, listenHandler);