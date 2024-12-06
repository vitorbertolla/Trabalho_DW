const express = require('express');

const app = express();
const port = 1234;

// colocar dados


app.use(express.json());


app.get('/tarefas', (req, res) => {
    res.json(tarefas); // Retorna todas as tarefas
});

// Rota POST para adicionar uma nova tarefa
app.post('/tarefas', (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json({ error: 'O campo "nome" é obrigatório.' });
    }

    const novaTarefa = {
        id: tarefas.length + 1,
        nome,
        feito: false
    };

    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa); // Retorna a tarefa criada
});

// Rota GET para listar alunos
app.get('/alunos', (req, res) => {
    res.json(alunos); // Retorna a lista de alunos
});

// Rota POST para adicionar um novo aluno
app.post('/alunos', (req, res) => {
    const { nome, idade } = req.body;

    if (!nome || !idade) {
        return res.status(400).json({ error: 'Os campos "nome" e "idade" são obrigatórios.' });
    }

    const novoAluno = {
        id: alunos.length + 1,
        nome,
        idade
    };

    alunos.push(novoAluno);
    res.status(201).json(novoAluno); // Retorna o aluno criado
});

// Inicializa o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
