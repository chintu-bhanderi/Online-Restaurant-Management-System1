const { CHEF_TYPE } = require('../authTypes');
const FoodOrder = require('../models/foodOrderModel');
const {Worker} = require('../models/workerModel')
const TableBook = require('../models/tableBookModel');
const Slot = require('../models/slotModel');


async function getAllChefs(req,res) {
    try{
        const chefs = await Worker.find({type:CHEF_TYPE});
        res.status(200).json(chefs);
    } catch(error){
        return res.status(404).json({
            error: {
                 errorMessage : ['Internal Sever Error']
            }
       })
    }
}

async function actionSomething(req,res) {
    try{
        await Slot.remove();
        res.status(200).json({message:"Successful"});
    } catch(error){
        return res.status(404).json({
            error: {
                 errorMessage : ['Internal Sever Error']
            }
       })
    }
}

module.exports = {
    getAllChefs,
    actionSomething
}