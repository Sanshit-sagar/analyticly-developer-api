import express from 'express'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log(`Pong!!`);
    res.send('pong');
});
