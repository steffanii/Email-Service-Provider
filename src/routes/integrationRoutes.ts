import { Router } from "express";
import {saveIntegration , fetchLists } from "../controllers/integrationController";

const router = Router();

router.post("/esp", saveIntegration);
router.get("/esp/lists", fetchLists)

export default router;