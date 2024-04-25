import express from "express";
import {sendForm} from "../controller/form.js"
const router = express.Router();

router.post('/send', sendForm);
export default router;