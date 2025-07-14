import mongoose from "mongoose"
import { Contact } from "../models/contact.model.js"

// Get all contacts route
export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({})
        res.status(200).json({ success: true, data: contacts })
    } catch (error) {
        console.log("Error in retrieving contacts:", error.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }
}

// Create contact route
export const createContact = async (req, res) => {
    const contact = req.body // user sends this data

    if (
        !contact.jobAppNum ||
        !contact.name ||
        !contact.company ||
        !contact.emailAddress ||
        !contact.phoneNumber
    ) {
        return res
            .status(400)
            .json({
                success: false,
                message: "Please enter all required fields",
            })
    }

    const newContact = new Contact(contact)

    try {
        await newContact.save()
        res.status(201).json({ success: true, data: newContact })
    } catch (error) {
        console.error("Error in creating contact:", error.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }
}

// Update contact route
export const updateContact = async (req, res) => {
        const { id } = req.params

        const contact = req.body

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res
                .status(404)
                .json({ success: false, message: "Contact not found" })
        }
        try {
            const updatedContact = await Contact.findByIdAndUpdate(
                id,
                contact,
                {
                    new: true,
                }
            )
            res.status(200).json({ success: true, data: updatedContact })
        } catch (error) {
            res.status(500).json({ success: false, message: "Server Error" })
        }
    }

// Delete contact route
export const deleteContact = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
            .status(404)
            .json({ success: false, message: "Contact not found" })
    }

    try {
        await Contact.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: "Contact deleted" })
    } catch (error) {
        console.log("Error in deleting contact:", error.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }
}
