const houses = require("./db.json")
let currentId = 4

module.exports = {
    getHouse: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        let index = houses.findIndex((element) => element.id === +req.params.id)
            houses.splice(index, 1)
            res.status(200).send(houses)
        
    },
    createHouse: (req, res) => {
        let {address, price, imageURL} = req.body
        let newHouse = {
            id: currentId,
            address,
            price,
            imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        currentId = currentId + 1
    },
    updateHouse: (req, res) => {
        let {id} = req.params
        let {type} = req.body
        let index = houses.findIndex((element) => element.id === +id)

        if(type === "plus"){
            houses[index].price += 10000
            res.status(200).send(houses)
        }else if(type === "minus"){
            houses[index].price -= 10000
            res.status(200).send(houses)
        }
    }
}
