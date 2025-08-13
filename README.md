# CS467
**Job Tracker Capstone Project**

Job Tracker Installation and Instructions

**Installation:**

**Requirements:**
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




**Instructions**

To get started with the Job Tracker website please visit the following link: 
https://cs-467.vercel.app/

**Account Creation:**

On the login screen, choose “Register” to create an account



Fill out the fields with your first name, last name, email, password, and confirmed password.



Once your account is created, you will be redirected to the login screen where you must use the email and password you used to create your account to login.


Once logged in, you will be on the home page. At the top of the screen is the navigation to each page. Applications page will allow you to add, edit, and remove applications. Contacts will allow you to add, edit, and remove contacts. Skills will allow you to add and remove skills. Stats will give you information about the current skills on your profile. 

**Applications:** 
On the applications page users can add applications by filling out the Add Application form and choose skills to add to the application by selecting a skill from the checkbox. 



Users can edit an application by selecting the edit button next to an application entry. 


Users can delete applications by selecting the delete button next to an application entry. 


**Contacts:**
On the contacts page, users can add contacts by clicking on the Add Contact button.


Users can fill out the contact’s information and submit it to be added to the contacts table.



Once a contact is added, users can also edit the contact by clicking on the Edit button or delete the contact by clicking the Delete button. By clicking on the Edit button, the Enter Contact Details form shows up prepopulated with the current contact’s information. Clicking on the delete button, the contact is deleted from the database.


**Skills:**


Users can add skills by typing in the name of skill in the Type field. They can select a skill level from the list. Skill levels choices are Beginner, Intermediate, and Advanced. Users can also choose a category for that skill. The options for the skills category are Life, Technical, Leadership, Organization or Other.

**Bibliography**

[1]“Login and Signup tutorial with nodejs, express & mongodb,” www.youtube.com. https://www.youtube.com/watch?v=V8dYGNfHjfk (accessed Jul. 18, 2025).

[2]J. Smith, “Configuring CommonJS & ES Modules for Node.js,” DEV Community, Jan. 03, 2022. https://dev.to/jakobjingleheimer/configuring-commonjs-es-modules-for-nodejs-12ed (accessed Jul. 18, 2025).

[3]GeeksforGeeks, “Express res.render() Function,” GeeksforGeeks, Jul. 07, 2020. https://www.geeksforgeeks.org/web-tech/express-js-res-render-function/ (accessed Jul. 19, 2025).

[4]GeeksforGeeks, “How to handle sessions in Express ?,” GeeksforGeeks, Feb. 19, 2024. https://www.geeksforgeeks.org/node-js/how-to-handle-sessions-in-express/ (accessed Jul. 25, 2025).

[5]“Documents — MongoDB Manual,” https://github.com/mongodb/docs-bi-connector/blob/DOCSP-3279/source/index.txt. https://www.mongodb.com/docs/manual/core/document/ (accessed Jul. 25, 2025).

[6]GeeksforGeeks, “Mongoose Model.create() API,” GeeksforGeeks, Aug. 29, 2022. https://www.geeksforgeeks.org/mongodb/mongoose-document-model-create-api/ (accessed Jul. 28, 2025).

[7]L. Robinson, B. Curcio, S. Dietz, and M. Novotny, “How to Deploy an Express.js Application to Vercel,” Vercel.com, 2025. https://vercel.com/guides/using-express-with-vercel (accessed Aug. 04, 2025).

[8]“db.collection.countDocuments() — MongoDB Manual,” www.mongodb.com. https://www.mongodb.com/docs/manual/reference/method/db.collection.countDocuments/ (accessed Aug. 09, 2025).

[9]M. F. Rahman, “Moongoose aggregate $match does not match id’s,” Stack Overflow, Mar. 24, 2016. https://stackoverflow.com/questions/36193289/moongoose-aggregate-match-does-not-match-ids (accessed Aug. 09, 2025).

[10]“Mongoose v6.3.1: SchemaTypes,” mongoosejs.com. https://mongoosejs.com/docs/schematypes.html (accessed Jul. 26, 2025).

[11]“Express Tutorial Part 3: Using a Database (with Mongoose) - Learn web development | MDN,” MDN Web Docs, Dec. 19, 2024. https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose (accessed Aug. 07, 2025).

[12]“Build an Application in NodeJS, Express and MongoDB – Part 2 | ObjectRocket,” Objectrocket.com, 2020. https://kb.objectrocket.com/mongo-db/build-an-application-in-nodejs-express-and-mongodb-part-2-1368 (accessed Jul. 19, 2025).

[13]“Getting Started with MongoDB & Mongoose | MongoDB,” www.mongodb.com. https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/ (accessed Jul. 19, 2025).

[14]Dev_Q, “The Difference between ‘module.export’ and ‘export default,’” Medium, Nov. 21, 2023. https://medium.com/@devq/the-difference-between-module-export-and-export-default-740039fed547 (accessed Jul. 19, 2025).

[15]Coding2GO, “Login & Signup with HTML, CSS, JavaScript (form validation),” YouTube, Jul. 13, 2024. https://www.youtube.com/watch?v=bVl5_UdcAy0 (accessed Jul. 11, 2025).

[16]w3schools, “Window alert() Method,” W3schools.com, 2019. https://www.w3schools.com/jsref/met_win_alert.asp (accessed Jul. 12, 2025).

[17]“JavaScript test() Method,” www.w3schools.com. https://www.w3schools.com/jsref/jsref_regexp_test.asp (accessed Jul. 12, 2025).

[18]“How to add, remove, toggle class of a DOM element in JavaScript,” HowDev, 2025. https://how.dev/answers/how-to-add-remove-toggle-class-of-a-dom-element-in-javascript (accessed Jul. 12, 2025).

[19]GeeksforGeeks, “HTML DOM parentElement Property,” GeeksforGeeks, Jan. 10, 2019. https://www.geeksforgeeks.org/html/html-dom-parentelement-property/ (accessed Jul. 12, 2025).

[20]“Aggregation Operations — MongoDB Manual,” www.mongodb.com. https://www.mongodb.com/docs/manual/aggregation/ (accessed Aug. 01, 2025).

[21]GeeksforGeeks, “Aggregation in MongoDB,” GeeksforGeeks, Feb. 16, 2021. https://www.geeksforgeeks.org/mongodb/aggregation-in-mongodb/ (accessed Aug. 01, 2025).

[22]M. D. Team, “db.collection.aggregate(),” Mongodb.com, 2025. https://www.mongodb.com/docs/manual/reference/method/db.collection.aggregate/ (accessed Aug. 01, 2025).

[23]osu-cs340-ecampus, “GitHub - osu-cs340-ecampus/nodejs-starter-app: A small Javascript project, using the Node.js library to setup a web server, connect with a database, and present dynamic data back to the client. A How-To guide is also included.,” GitHub, 2021. https://github.com/osu-cs340-ecampus/nodejs-starter-app (accessed Jul. 19, 2025).

[24]M. O. contributors Jacob Thornton, and Bootstrap, “Modal,” getbootstrap.com. https://getbootstrap.com/docs/5.3/components/modal/#how-it-works (accessed Jul. 13, 2025).

[25]CodAffection, “Complete CRUD with Node.js, Express, MongoDB & Express-Handlebars,” YouTube, Jun. 30, 2024. https://www.youtube.com/watch?v=9VHTDhwo9u0 (accessed Jul. 19, 2025).


