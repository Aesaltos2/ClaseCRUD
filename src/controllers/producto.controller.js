import Producto from '../models/Producto.js'

class ProductoController {
  static async index(req, res) {
    const productos = await Producto.find()
    res.json(productos)
  }

  static async find(req, res) {
    try {
      const { id } = req.params
      const producto = await Producto.findById(id)
      res.json(producto)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  static async create(req, res) {
    console.log('Datos recibidos:', req.body)

    if (!req.body) {
      return res.status(400).json({ message: 'No se recibieron datos' })
    }

    try {
      const producto = new Producto(req.body)
      await producto.save()
      res.status(201).json(producto)
    } catch (error) {
      console.error('Error al crear producto:', error)
      res.status(400).json({ message: error.message })
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params
      const productoActualizado = await Producto.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
      if (!productoActualizado) {
        return res.status(404).json({ message: 'Producto no encontrado' })
      }
      res.json(productoActualizado)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }

  static async partialUpdate(req, res) {
    try {
      const { id } = req.params
      const productoActualizado = await Producto.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
      if (!productoActualizado) {
        return res.status(404).json({ message: 'Producto no encontrado' })
      }
      res.json(productoActualizado)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params
      const productoEliminado = await Producto.findByIdAndDelete(id)
      if (!productoEliminado) {
        return res.status(404).json({ message: 'Producto no encontrado' })
      }
      res.json({ message: 'Producto eliminado correctamente' })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}

export default ProductoController
