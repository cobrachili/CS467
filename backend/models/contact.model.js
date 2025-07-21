const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema(
    {
        jobAppNum: {
            type: Number,
            required: [true, "Please enter job application #"],
            default: "1",
        },
        name: {
            type: String,
            required: [true, "Please enter First and Last name"],
            default: "John Smith",
        },

        company: {
            type: String,
            required: [true, "Please enter company name"],
            default: "Company",
        },

        emailAddress: {
            type: String,
            required: [true, "Please enter email address"],
            default: "name@email.com",
        },

        phoneNumber: {
            type: String,
            required: [true, "Please enter phone numbwer"],
            default: "123-456-7890",
        },
    },
    {
        timestamps: true, // createdAt, updatedAt
    }
)

module.exports = mongoose.model("Contact", ContactSchema)
