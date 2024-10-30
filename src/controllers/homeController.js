import { Router } from "express";
import { HOME_TITLE } from "../constants.js";
import itemService from "../services/itemService.js";

const router = Router();

router.get('/', async (req, res) => {
    const items = await itemService.getAll().limit(3).sort({$natural: -1}).lean();
    // res.render('home', {title: 'TechStore - Laptops and Computers'});
    res.render('home', {title: HOME_TITLE, items});
    // res.render('home', {title: HOME_TITLE}); //to simulate there are no items to show
}); 

export default router;