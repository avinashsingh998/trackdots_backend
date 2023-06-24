Project - TrackDots ( A Tour and Travel application)

Description - This application provides A to Z support for a tourist. It has both user and admin panel with authentication and authorization. 

Running the project - To run this project, 
        1 - Check .env file and modify necessary attributes as needed.
        2- Put your own gmail id and nodemailer password for 'NodemailerUser' and 'NodemailerPass'
            password generation process ---- go to your google account > security > Two-Step-Verification > app password > generate
        
        3- Now run "npm run setUp" for inserting all the  necessary data and credentials in mongodb, you don't need the worry about database name, it will create automatically, before running this command you need to verify the mongoUrl and port number only

        4 - Now run the server using npm start