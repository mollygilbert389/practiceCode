// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
var firebaseConfig = {
    apiKey: "AIzaSyCp0xJiNC_gSsUoyCS4NljUbD5lqrsLmls",
    authDomain: "codersbay-f44be.firebaseapp.com",
    databaseURL: "https://codersbay-f44be.firebaseio.com",
    projectId: "codersbay-f44be",
    storageBucket: "codersbay-f44be.appspot.com",
    messagingSenderId: "790731813419",
    appId: "1:790731813419:web:2a37d82766f0b375"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Assign the reference to the database to a variable named 'database'
var database = firebase.database()


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {
      highBidder = snapshot.val().highBidder;
      highPrice = snapshot.val().highPrice;
      $("#highest-bidder").html(highBidder);
      $("#highest-price").html("$"+highPrice);
  }
  else {
    $("#highest-bidder").html(highBidder);
    $("#highest-price").html("$"+highPrice);

  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

$("#submit-bid").on("click", function(event) {

  event.preventDefault();

 var bidderName = $("#bidder-name").val().trim()
 var bidderPrice = $("#bidder-price").val().trim()
    
    // return false; SOMETIMES?

  if (bidderPrice > highPrice) {
    alert("You are now the highest bidder.");
    database.ref().set({
        highBidder: bidderName,
        highPrice: bidderPrice
    })

    // Store the new high price and bidder name as a local variable


    // Change the HTML to reflect the new high price and bidder

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});