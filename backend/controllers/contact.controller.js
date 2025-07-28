/* Citation:
// Date: 7/19/25
// Adapted From:
// https://www.youtube.com/watch?v=9VHTDhwo9u0
// How to use express handlebar to render pages */

const mongoose = require ("mongoose")
const express = require("express")
const contact = require("../models/contact.model.js")
const router = express.Router()


// Get all contacts route
router.get('/', (req, res) => {
    contact.find()
        .then(data => {
            res.render('contacts', {contacts: data, layout:false })

        })
        .catch (error =>
            console.log("Error in retrieving contacts:", error.message))
    })


// Get contact
router.get('/createOrEdit', (req, res) => {
    res.render("contacts/createOrEdit" )

    })

// Read contact
router.get('/createOrEdit/:id', (req,res) => {

    contact.findById(req.params.id)
        .then(data => res.render('contacts/createOredit',{ Contact :data}))
        
        .catch (error => 
            console.log("Error in retrieving contact:", error.message))
           
    })


// Create new contact
router.post('/createorEdit', (req, res) => {
        const contact = {
            jobAppNum: req.body.jobAppNum,
            name: req.body.name,
            company: req.body.company,
            emailAddress: req.body.emailAddress,
            phoneNumber: req.body.phoneNumber

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
        const { _id } = req.body
        if (_id == "")
            new contact({...contact}).save()
         .then(data => res.redirect("/contacts"))
         .catch(error => console.log("Server Error", error))
        else
            contact.findByIdAndUpdate(_id, contact)
            .then( data => res.redirect("/contacts"))
            .catch(error =>console.log("Server Error", error))
        })
       

// Delete contact route
router.post('/delete/:id', (req, res) => {
  contactontact.findByIdAndDelete(req.params.id)
    .then(data => res.redirect('/contacts'))
    .catch(error => console.log('Unable to delete:', error))
})


module.exports = router

