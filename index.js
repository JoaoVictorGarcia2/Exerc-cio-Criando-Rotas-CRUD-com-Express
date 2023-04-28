const express = require("express");
const { v4: uuidv4 } = require('uuid');
const { pool } = require("./data/data");
const app = express();
app.use(express.json());
app.listen(8080, () => {
    console.log("O servidor esta ativo na porta 8080!!!")
});

app.get("/getUsers", async (req, res) => {
    try {
        const client = await pool.connect();
        const { rows } = await client.query("SELECT * FROM Users");
        console.table(rows);
        res.status(200).send(rows);
    } catch (error) {
        console.error(error);
        res.sendStatus(500).send("Erro de conexão com o servidor");
    }
});

app.post("/postUsers", async (req, res) => {
    try {
    const client = {
        id: uuidv4(),
        nome: req.body.nome
    };
    client.push(client);
    console.log(client);
} catch (error) {
    console.error(error);
    res.sendStatus(500).send("Erro de conexão com o servidor");
}
});

app.delete("/deleteUsers", async (req, res) => {
    try {
        client = client.filter(client => client.id !== req.params.id);
    res.json({ message: 'client removida' });
    }  catch (error) {
        console.error(error);
        res.sendStatus(500).send("Erro de conexão com o servidor");
    }
});

  app.put("/putUsers", async (req, res) => {
    try {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    const resourceToUpdate = resources.find((resource) => resource.id === id);
    }  catch (error) {
        console.error(error);
        res.sendStatus(500).send("Erro de conexão com o servidor");
    }
  });
  