import Item from "../models/Item.js";

const itemService = {
    create(item, userId) {
        return Item.create({...item, owner: userId});
    }
}; 

export default itemService;