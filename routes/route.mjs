import express from "express";
import { AddData, DeleteData, ReadData, UpdateData } from "../controller/bookcontroller.mjs";

const router = express.Router();

router.get("/api/books/search",ReadData);
router.post("/api/books/add", AddData);
router.delete("/api/books/delete/:id",DeleteData);
router.put("/api/books/update/:id",UpdateData)
export default router;