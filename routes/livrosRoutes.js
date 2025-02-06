import express from 'express'
import { atualizarLivro, buscarLivroPorId, criarLivro, excluirLivro, listarLivros } from '../controllers/livrosController.js';
const router = express.Router();

router.get('/', listarLivros)
router.post('/', criarLivro)
router.get('/:id', buscarLivroPorId)
router.put('/:id', atualizarLivro)
router.delete('/:id', excluirLivro)

export {router}