const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config(); 

const app = express();

app.use(cors());

app.use*(express.json());
app.use*(express.urlencoded({ extended: true }));

app.get("/", (res) => {
    res.send("API DE CRUD de Usuário");
});

const userRoutes = require("./routes/usuarios");
app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servifor rodando na porta ${PORT}`);
});