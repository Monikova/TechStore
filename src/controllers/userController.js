import { Router } from "express";
import userService from "../services/userService.js";
import { AUTH_COOKIE_NAME, LOGIN_TITLE, REGISTER_TITLE } from "../constants.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const userController = Router(); 

userController.get('/register', (req, res) => {
    res.render('register', {title: REGISTER_TITLE});
});

userController.post('/register', async (req, res) => {
    const {name, email, password, rePassword} = req.body;

    try {
        const token = await userService.register(name, email, password, rePassword);
        res.cookie(AUTH_COOKIE_NAME, token, {httpOnly: true});
        res.redirect('/');
    } catch(err) {
        const error = getErrorMessage(err);
        res.render('register', {title: REGISTER_TITLE, name, email, error});
    }
});

userController.get('/login', (req, res) => {
    // res.render('login', {title: 'TechStore - Login'});
    res.render('login', {title: LOGIN_TITLE});
}); 

userController.post('/login', async (req, res) => {
    const {email, password} = req.body; 

    try { 
        const token = await userService.login(email, password);
        res.cookie(AUTH_COOKIE_NAME, token, {httpOnly: true});
        res.redirect('/');
    } catch (err) {
        const error = getErrorMessage(err);
        // res.render('login', {title: 'TechStore - Login', email, error});
        res.render('login', {title: LOGIN_TITLE, email, error});
    }
}); 

userController.get('/logout', (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME);
    res.redirect('/');
})

export default userController;