import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { FakeDb } from "../db/FakeDb.js"

class BurgersService {
    editBurger(updateBurgerData) {
        const burger = this.getBurgerById(updateBurgerData.id)
        burger.name = updateBurgerData.name || burger.name
        burger.picture = updateBurgerData.picture || burger.picture
        return burger
    }
    getBurgerById(burgerId) {
        const burger = FakeDb.burgers.find(b => b.id == burgerId)
        if (!burger){
            throw new BadRequest('Invalid Burger Id')
        }
        return burger
    }
    getAllBurgers(){
        return FakeDb.burgers
    }

    createBurger(newBurgerData){
        newBurgerData.id = ~~(Math.random() * 5556) +'nw'
        FakeDb.burgers.push(newBurgerData)
        return newBurgerData
    }
}


export const burgersService = new BurgersService()