// Date: 7/19/25
// Adapted From:
// https://www.youtube.com/watch?v=9VHTDhwo9u0
// How to use express handlebar to render pages

const mongoose = require ("mongoose")
const express = require("express")
const Contact = require("../models/contact.model.js")
const router = express.Router()


// Get all contacts route
router.get('/', (req, res) => {
    Contact.find()
        .then(data => {
            res.render('contacts/index', {contacts: data})
            // res.status(200).json({ success: true, data: contacts })
        })
        .catch (error =>
            console.log("Error in retrieving contacts:", error.message))
        // res.status(500).json({ success: false, message: "Server Error" })
    })


// Get contact
router.get('/createOrEdit', (req, res) => {
    res.render("contacts/createOrEdit" )

    })

// Read contact
router.get('/createOrEdit/:id', (req,res) => {

    Contact.findById(req.params.id)
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
        }
        const { _id } = req.body
        if (_id == "")
            new Contact({...contact}).save()
         .then(data => res.redirect("/contacts"))
         .catch(error => console.log("Server Error", error))
        else
            Contact.findByIdAndUpdate(_id, contact)
            .then( data => res.redirect("/contacts"))
            .catch(error =>console.log("Server Error", error))
        })
       

// Delete contact route
router.post('/delete/:id', (req, res) => {
  Contact.findByIdAndDelete(req.params.id)
    .then(data => res.redirect('/contacts'))
    .catch(error => console.log('Unable to delete:', error))
})

module.exports = router
