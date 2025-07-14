import express from "express"

import {
    createContact,
    deleteContact,
    getContacts,
    updateContact,
} from "../controllers/contact.controller.js"

const router = express.Router()

router.get("/", getContacts)
router.post("/", createContact)
router.put("/:id", updateContact)
router.delete("/:id", deleteContact)

export default router
