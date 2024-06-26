import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
// import categoryRoute from './routes/categoryRoute.js';
// import productRoute from './routes/productRoute.js';
import cors from 'cors';
import path from "path";
import { fileURLToPath } from 'url';

//configure env
dotenv.config();

//database config
connectDB();

//es module file variable
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//rest object
const app = express()
  
//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
// app.use(express.static(path.join(__dirname, './client/build')));

//routes
app.use('/auth',authRoutes);
// app.use('/category', categoryRoute);
// app.use('/product', productRoute);

app.use('*', function(req,res){
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
})

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT,()=>{
  console.log(`server running on ${process.env.DEV_MODE} mode on port ${PORT}`);
})


// command to start : npm run dev