import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";

export class BurgersController extends BaseController{
    constructor(){
        super('api/burgers')

        this.router
            .get('', this.getBurgers)
            .get('/:burgerId', this.getBurger)
            .post('', this.createBurger)
            .put('/:tigerId', this.editBurger)
    }
    async getBurgers(req, res, next) {
        try {
            logger.log('what is the request id', req.params.burgerId)
            const burgers = await burgersService.getAllBurgers()
            res.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    async getBurger(req,res,next){
        try {
            const burger = await burgersService.getBurgerById(req.params.burgerId)
            res.send(burger)
        } catch (error) {
            next(error)
        }
    }

    async createBurger(req, res, next){
        try {
            const burger = await burgersService.createBurger(req.body)
            res.send(burger)
        } catch (error) {
            next(error)
        }
    }

    async editBurger(req, res, next){
        try {
            const burger = await burgersService.editBurger(req.body)
            res.send(burger)
        } catch (error) {
            next(error)
        }
    }
}