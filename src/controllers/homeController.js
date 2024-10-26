import { Router } from "express";
import { HOME_TITLE } from "../constants.js";

const router = Router();

router.get('/', (req, res) => {
    // res.render('home', {title: 'TechStore - Laptops and Computers'});
    res.render('home', {title: HOME_TITLE});
}); 

export default router;