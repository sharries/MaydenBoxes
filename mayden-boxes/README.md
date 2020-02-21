Welcome to Mayden Boxes, thankyou for reviewing :)

App developed in REACT, Node, and MongoDB - MERN Stack

#Important
To view please contact me on mobile or email with your Public facing IP address so that I can whitelist your access to the MongoDB - Note that there is an unresolved bug to add the order record at present.

I decided to challenge myself to learn new frameworks that I have hence REACT and MongoDB.  I also attempted in the time to ensure the HCI provided an effective user experience.

It took additional time setting up the IDE environment (Eclipse) and resolving NPM dependencies that I have not included as coding time.

#Starting
Install frontend and backend Node Modules - npm install (in both / and /backend)
At / - npm run start
At /backend - npm start express

Frontend port 3000, Backend port 5000
See #Important above for MongoDB White Listing

#Features implemented
All views, including minor UX changes eg: Continue button before user has selected any boxes with Route blocked.  Views have used a bespoke CSS normaliser and custom css (Not Bootstrap)

Props for tracking all boxes, strength and discount.

All calculations for totals (except the 50box discount, currently a boolean for true if +50, would be implemented in the final view after checkout)

MongoDB connection from Checkout (see below)

#ToDo
Fix DB Model to MongoDB - Had it working and tested in Insomnia but then I managed to break it - Will take some debugging at my end to check my model and the JSON object ;)
Update Order table summary view with Strength and Discount information
Redirect/display Order Summary after Checkout

#Coding time
6 hours

#Summary
I took this as an opportunity for CPD and used frameworks that I do not use frequently at present.  The task was excellent in exposing many useful aspects of the React Framework, and how components and props behave.  I also took the opportunity to explore and compare a range of IDEs NetBeans, Atom, Eclipse before commencing the project.

#GitHub
https://github.com/sharries/MaydenBoxes.git