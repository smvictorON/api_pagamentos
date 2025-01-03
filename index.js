import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

const app = express()

// Config JSON response
app.use(express.json())

// Solve CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

// Public folder for images
app.use(express.static('public'))

// Routes
import PaymentsRoutes from './src/routers/payments.js';
app.use('/payments', PaymentsRoutes);

app.listen(process.env.PORT, () => {
  console.log("🚀 ~ app.running PORT:", process.env.PORT)
})
