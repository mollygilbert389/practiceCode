// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
var firebaseConfig = {
    apiKey: "AIzaSyC-SEn72nSx1aAO-3-Wri0Lma33z6U6zHI",
    authDomain: "heads-and-tails-570e3.firebaseapp.com",
    databaseURL: "https://headstails-b4d90.firebaseio.com/",
    projectId: "heads-and-tails-570e3",
    storageBucket: "heads-and-tails-570e3.appspot.com",
    messagingSenderId: "996603935983",
    appId: "1:996603935983:web:48e9bc3e76079f58"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  var headsCount = 0;
  var tailsCount = 0;
  var wins = 0;
  var losses = 0;

function flipThatCoin(result) {
    var randomNumber = Math.floor(Math.random() * 2);
    if (result === randomNumber) {
        wins++;
        alert("You won!")
        $("#wins").empty()
        $("#wins").append("<h3> Wins: " + wins + "</h3>");
    } else {
        losses++;
        alert("You lost!")
        $("#losses").empty()
        $("#losses").append("<h3> Losses: " + losses + "</h3>");
    }
}
  
  $("#heads").on("click", function() {
    headsCount++;
    $("#headsCount").text("Heads picked: " + headsCount);
    flipThatCoin(0);
  });
  
  $("#tails").on("click", function() {
    tailsCount++;
    $("#tailsCount").text("Heads picked: " + tailsCount);
    flipThatCoin(1);
  });

database.ref().on("value", function(snapshot) {
    wins = snapshot.wins;
    losses = snapshot.losses;

  console.log(wins);
  console.log(losses);
//   $("#highest-bidder").text(highBidder);
//   $("#highest-price").text(highPrice);

}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

$(".coins").on("click", function(event) {
  event.preventDefault();
//   var bidderName = $("#bidder-name").val().trim();
//   var bidderPrice = parseInt($("#bidder-price").val().trim());

//   console.log(bidderName);
//   console.log(bidderPrice);

    database.ref().set({
      wins: wins,
      losses: losses
    });
});