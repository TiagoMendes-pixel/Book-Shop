import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", error);
});

conexao.once("open", () => {
    console.log("conexão feita com sucesso");
});

const app = express();
routes(app);

app.delete("/Livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro foi removido com sucesso.")
})


export default app;