import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import  connectDB  from './db/db.js';


connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/notes', notesRoutes);


app.get('/',(req,res)=>(
    res.send('Hello, World!')
))
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});