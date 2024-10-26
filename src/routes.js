import { Router } from "express";
import homeController from "./controllers/homeController.js";
import userController from "./controllers/userController.js";
import itemController from "./controllers/itemController.js";

const router = Router(); 

router.use(homeController);
router.use(userController);
router.use(itemController);

router.all('*', (req, res) => {
    res.render('404', {title: '404 Page'});
})

export default router; 