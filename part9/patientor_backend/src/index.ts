import express from 'express';
import cors from 'cors';
import diagnosesRouter from './routes/diagnoses';

const app = express();
app.use(express.json());
app.use(cors());


const PORT = 3001;

app.use('/api/diagnoses', diagnosesRouter);

app.get('/ping', (_request, response) => {
  console.log('pong');
  response.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});