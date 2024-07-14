const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa el paquete cors
const pool = require('./database'); // Asegúrate de que la ruta sea correcta

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors()); // Usa el middleware cors

app.post('/submit-quiz', async (req, res) => {
    const { username, score } = req.body;
    
    try {
        await pool.query('INSERT INTO quiz_results (username, score) VALUES ($1, $2)', [username, score]);
        res.status(200).send('Resultado guardado exitosamente');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al guardar el resultado');
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

app.use(cors({
    origin: 'http://localhost:4000'
}));
