import express from 'express'
import { router } from './routes/livrosRoutes.js'

const app = express()

app.use(express.json())

app.use('/livros', router)

app.listen(3333, ()=> {
    console.log('Servidor rodando na porta 3333')
})

