import express from 'express'
import { connectDB } from './config/db.js'
import { PORT } from './config/config.js'
import productosRoutes from './routes/productos.routes.js'

const app = express()

app.use(express.json())
app.use('/api/productos', productosRoutes)


connectDB()
  .then(() => app.listen(PORT, () => console.log(`http://localhost:${PORT}`)))
  .catch(error => console.log(error))
