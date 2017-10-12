#Ionic2
..................................

1. npm install -g ionic cordova
   [
    cordova: the framework thst handles the webapp to nativeapp compilation steps
    ionic: the framework to creates the webapp
   ]
2. ionic start my-places blank --type=ionic-angular
3. In ionic views are the pages. It maintains a page stack and the page need to display should push to the       stack and pop to hide the page.
   Default routing starts: <ion-nav [root]="rootPage"></ion-nav>

# Generate a new page
1. Create a new page: ionic generate page new-place
2. Register the page in `app.module`

# Start  IONIC app
1. ionic serve

# Create a new page/modal
1. ionic generate page

# Storage for persistent value 
  Stores value in indexeddb, websql, sqllite

# Google Maps
https://angular-maps.com/

npm install --save angular2-google-maps