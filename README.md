# NotePad- Note Taker

## Description

AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Installation
Web Application is deployed using Heroku
```
$ heroku git:remote -a <github repository name>
git add .
git commit -m "<commit message>"
git push heroku main
```
Web Application also uses npm express.js and "uuid" (Universally Unique Identifier)
```
npm install express uuid
```
 
## Usage
* Navigate to the deployed Heroku link
* Click on the "Write New Note" button
* Enter the title of your new note in the middle of the page
* Add contents to your note
* Choose to "save" or "clear" your new note by selecting the corresponding button in the top right of the navigation bar
* Once saved, your note will be added to the "library" on the left side of the page
* User can add a new note, open a previous note by selecting it from the list, or delete previous notes by clicking the trash can icon next to their note

```md
![Screenshot of Deployed Web App Homepage](/assets/img/homepage)
```
```md
![Screenshot of Deployed Web App Notes Page](/assets/img/notespad)
```
