var express = require('express')
var router = express.Router()
var schemas = require("../models/contact.model.js")

/* Get Contacts Page */
router.get('/', function(req, res, next) {
    res.render('contacts', title)
    let contact = schemas.contact

})

/* Post form user enters data */

router.post('/', function(req, res) {
    var jobAppNum = req.body.jobAppNum
    var name = req.body.name
    var company = req.body.company
    var emailAddress = req.body.emailAddress
    var phoneNumber = req.body.phoneNumber
    res.render('contact', {jobAppNum, name, company, emailAddress, phoneNumber})
})

module.exports = router