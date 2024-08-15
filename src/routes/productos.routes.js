import { Router } from 'express'
import ProductoController from '../controllers/producto.controller.js'
import { validateId } from '../middlewares/middleware.js'

const router = Router()

router.get('/', ProductoController.index)
router.get('/:id', validateId, ProductoController.find)
router.post('/', ProductoController.create)
router.put('/:id', validateId, ProductoController.update)
router.patch('/:id', validateId, ProductoController.partialUpdate)
router.delete('/:id', validateId, ProductoController.delete)

export default router
