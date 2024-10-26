import { Router } from "express";
import { CREATE_TITLE } from "../constants.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import itemService from "../services/itemService.js";

const itemController = Router();

itemController.get('/create', (req, res) => {
    res.render('create', {title: CREATE_TITLE});
});

itemController.post('/create', async (req, res) => {
    const item = req.body; 
    const userId = req.user._id;

    try {
        await itemService.create(item, userId); 
        res.redirect('/catalog');
    } catch (err) {
        const error = getErrorMessage(err);
        res.render('create', {title: CREATE_TITLE, item, error});
    }
});

export default itemController;