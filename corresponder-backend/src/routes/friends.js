import friendsController from '../controllers/friend/index'
import {asyncWrapper} from '../middlewares/errorHandler'
import roomController from "../controllers/room"
const Router = require('express').Router()


Router.get('/', asyncWrapper(friendsController.getList))

Router.get('/:name', asyncWrapper(friendsController.search))

Router.post('/', asyncWrapper(friendsController.add))

Router.delete('/', asyncWrapper(friendsController.remove))

Router.delete('/fromList', asyncWrapper(friendsController.removeFromTheList))


export default Router