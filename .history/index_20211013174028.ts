import express from 'express'
import { diaryRouter }

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log(`Pong!!`);
    res.send('pong');
});

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
    console.log(`Server running on the port ${PORT}`)
}); 