import Item from "../models/Item.js";

const itemService = {
    create(item, userId) {
        return Item.create({...item, owner: userId});
    }, 
    getAll() {
        return Item.find();
    }, 
    getOne(itemId) {
        return Item.findById(itemId);
    }, 
}; 

export default itemService;