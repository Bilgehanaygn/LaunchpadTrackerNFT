import express from "express";

import {
  getAppeals,
  createAppeal,
  updateAppeal,
  deleteAppeal,
} from "../controllers/appeal.js";

const router = express.Router();

router.get("/", ensureToken, getAppeals);
router.post("/", ensureToken, createAppeal);
router.put("/:id", ensureToken, updateAppeal);
router.delete("/:id", ensureToken, deleteAppeal);

function ensureToken (req, res, next){
  const bearerHeader = req.headers["authorization"];
  if(typeof bearerHeader !== "undefined"){
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    next();
  }
  else{
    res.status(403).json({error: "token error"});
  }
}



export default router;