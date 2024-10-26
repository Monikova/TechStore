import { Router } from "express";
import { CREATE_TITLE } from "../constants.js";

const itemController = Router();

itemController.get('/create', (req, res) => {
    res.render('create', {title: CREATE_TITLE});
});

export default itemController;