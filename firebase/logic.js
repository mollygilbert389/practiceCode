  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAH6cbaXmoSyfZtUNNTFOuxxI-fSQz2pLI",
    authDomain: "mycounter-47ec0.firebaseapp.com",
    databaseURL: "https://mycounter-47ec0.firebaseio.com",
    projectId: "mycounter-47ec0",
    storageBucket: "mycounter-47ec0.appspot.com",
    messagingSenderId: "711773048613",
    appId: "1:711773048613:web:222953690f25c44d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.database().ref().on("value", function(snapshot){
      count = snapshot.val().clicks;
      $("#clickValue").html(count)
  })

  $('#clickButton').on("click", function(){
      count--;
      firebase.database().ref().set({
          clicks:count
      })
  })

  $('#restart').on("click", function(){
    count= 100;
    firebase.database().ref().set({
        clicks:count
    })
})