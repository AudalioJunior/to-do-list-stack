const express = require('express');
const router = express.Router();
const Todo = require('../models/TodoModel');

router.get('/getTasks', async (req, res) => {
    const tasks = await Todo.find();
    return res.json({tasks})
})

router.post('/createTask', async (req, res) => {
    try {
        const task = new Todo ({
            title: req.body.title,
            content: req.body.content,
        })
        await task.save();

        return res.json({task});

    } catch (error) {
        return res.status(400).json({error: 'Error ao criar uma tarefa!'});
    }
})

router.put('/markTask', async (req, res) => {
    try {
        const {_id, select} = req.body;
        await Todo.findByIdAndUpdate(_id, {select: select});
        return res.json({message: 'Tarefa marcada com sucesso!'})
    } catch (error) {
        return res.status(400).json({erro: 'Error ao marcar a tarefa!'})
    }
})

router.delete('/deleteTask/:id', async (req, res) => {
    try {
        const task = await Todo.findOne({_id: req.params.id});
        await task.remove();
        return res.json({message: "Deletado com sucesso!"});
    } catch (error) {
        return res.status(400).json({erro: "Error ao deletar esta tarefa!"});
    }
})
router.delete('/deleteTaskAll', async (req, res) => {
    try {
        await Todo.remove();
        return res.status(400).json({mensagem: "Todos os dados foram deletados com sucesso!"});
    } catch (error) {
        return res.status(400).json({erro: "Error ao deletar todos os dados!"})
    }
})


module.exports = router;