const express = require("express");
const app = express();
const path = require("path");
const routerIndex = require("./routes/index")

app.use(express.json());
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")))


app.use("/", routerIndex);

app.listen(3000,()=>{
    console.log("Servidor funcionando!")
})