import { error } from 'node:console'
import {randomUUID} from 'node:crypto'

let livros = [
    {
        id: randomUUID(),
        titulo:"As Aventuras de PI",
        autor:"Jorge Campbell",
        ano:"2003"
    }
]

const listarLivros = (req, res)=> {
    res.json(livros)
}

const criarLivro = (req, res)=> {
    const {titulo, autor, ano} = req.body

    if(!titulo || !autor || !ano) {
        return res.json({
            erro: true,
            mensagem: 'Falta valores a inserir'
        })
    }

    const livro = {
        id: randomUUID(),
        titulo,
        autor,
        ano
    }
    try {
        livros.push(livro)
        return res.json({
            erro: false,
            mensagem: 'Livro Inserido no Banco de Dados'
        })
    } catch (error) {
        console.log(error)
        return res.json({
            erro: true,
            mensagem: error
        })
    }
}

const buscarLivroPorId = (req, res) => {
    const {id} = req.params
    const livro = livros.find((a) => a.id === id)

    if(!livro){
        return res.json({
            erro: true,
            mensagem: 'Livro não encontrado'
        })
    }
    res.json(livro)
}

const atualizarLivro = (req, res) => {
    const {id} = req.params;
    const {titulo, autor, ano} = req.body;

    const livro = livros.find((a) => a.id === id);

    if(!livro){
        return res.json({
            erro: true,
            mensagem: 'livro não encontrado'
        })
    }

    if(!titulo || !autor || !ano) {
        return res.json({
            erro: true,
            mensagem: 'Falta valores a inserir'
        })
    }

    livro.titulo = titulo;
    livro.autor = autor;
    livro.ano = ano;

    res.json({
        erro: false,
        mensagem: 'Livro alterado',
        livro
    })
}

const excluirLivro = (req, res) => {
    const {id} = req.params;
    const index = livros.findIndex((a) => a.id === id)

    if(index === -1){
        return res.json({
            erro: true,
            mensagem: 'Livro não encontrado'
        })
    }

    livros.splice(index, 1);
    res.json({
        erro: false,
        mensagem: 'Livro deletado'
    })
}

export {listarLivros, criarLivro, buscarLivroPorId, atualizarLivro, excluirLivro}