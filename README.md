# CS467
Job Tracker Capstone Project

Job Tracker Installation and Instructions

Installation:

Requirements:
Node must be installed: https://nodejs.org/en/download

Download the .zip folder and save it to your hard drive.

In the ide of your choice, in the terminal go to the root of the project.

npm install to install all the dependencies. 

Create a MongoDB database. 


Option 1: Using a new cloud database 
Create a MongoDB account and generate a URI to connect to your database:
https://www.mongodb.com/resources/products/platform/mongodb-atlas-tutorial

Goto the mongodb.js file 
Remove the mongodb+srv line in .connect and put in your desired cluster

In the terminal run, node src/index.js
If successful, a  message from the console log in index.js will print “port connected” and a  message from mongodb.js will print “mongodb connected”
If not successful, a message from the console log in mongodb.js will print “failed to connect”
Open browser and goto http://localhost:3131


Option 3: Using a local database
In this example, we will use a local host from mongodb compass.
Goto the mongodb.js file
Remove the mongodb+srv line in .connect and put this port: mongodb://localhost:27017


In the browser, install mongodb compass
In mongodb compass, click “+ Add new  connection”, a new connection screen will pop up where you would paste mongodb://localhost:27017 as the uri and click “save and connect”
In the terminal run, node src/index.js
If successful, a  message from the console log in index.js will print “port connected” and a  message from mongodb.js will print “mongodb connected”
If not successful, a message from the console log in mongodb.js will print “failed to connect”
Open browser and goto http://localhost:3131




Instructions

To get started with the Job Tracker website please visit the following link: 
https://cs-467.vercel.app/

Account Creation:

On the login screen, choose “Register” to create an account



Fill out the fields with your first name, last name, email, password, and confirmed password.



Once your account is created, you will be redirected to the login screen where you must use the email and password you used to create your account to login.


Once logged in, you will be on the home page. At the top of the screen is the navigation to each page. Applications page will allow you to add, edit, and remove applications. Contacts will allow you to add, edit, and remove contacts. Skills will allow you to add and remove skills. Stats will give you information about the current skills on your profile. 

Applications: 
On the applications page users can add applications by filling out the Add Application form and choose skills to add to the application by selecting a skill from the checkbox. 



Users can edit an application by selecting the edit button next to an application entry. 


Users can delete applications by selecting the delete button next to an application entry. 


Contacts:
On the contacts page, users can add contacts by clicking on the Add Contact button.


Users can fill out the contact’s information and submit it to be added to the contacts table.



Once a contact is added, users can also edit the contact by clicking on the Edit button or delete the contact by clicking the Delete button. By clicking on the Edit button, the Enter Contact Details form shows up prepopulated with the current contact’s information. Clicking on the delete button, the contact is deleted from the database.


Skills:


Users can add skills by typing in the name of skill in the Type field. They can select a skill level from the list. Skill levels choices are Beginner, Intermediate, and Advanced. Users can also choose a category for that skill. The options for the skills category are Life, Technical, Leadership, Organization or Other.

