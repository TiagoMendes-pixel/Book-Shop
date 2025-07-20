import livro from "../models/Livro.js";

class LivroController {

    //rota que devolve uma lista de livros
    static async listarLivros(req, res) {
        try {

            const livroEncontrado = await livro.find({});
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição` });
        }

    }

    //rota que devolve um único livro
    static async listarLivrosPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição` });
        }

    }

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "criado com sucesso", livro: novoLivro })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar livro` });
        }

    }

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na atualização do livro` });
        }

    }


    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro removido" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na remoção` });
        }

    }





};

export default LivroController;