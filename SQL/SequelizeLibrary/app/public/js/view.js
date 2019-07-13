
$("#search-btn").on("click", function(event) {
  event.preventDefault();

  var bookSearched = $("#book-search").val().trim();

  $.get("/api/" + bookSearched, function(data) {

    console.log(data);
    renderBooks(data);

  });

});

$("#author-search-btn").on("click", function() {

  var authorSearched = $("#author-search").val().trim();

  $.get("/api/author/" + authorSearched, function(data) {

    console.log(data);
    renderBooks(data);

  });

});

$("#genre-search-btn").on("click", function() {

  var genreSearched = $("#genre-search").val().trim();

  $.get("/api/genre/" + genreSearched, function(data) {

    console.log(data);
    renderBooks(data);

  });

});

function renderBooks(data) {
  if (data.length !== 0) {

    $("#stats").empty();
    $("#stats").show();

    for (var i = 0; i < data.length; i++) {

      var div = $("<div>");

      div.append("<h2>" + data[i].title + "</h2>");
      div.append("<p>Author: " + data[i].author + "</p>");
      div.append("<p>Genre: " + data[i].genre + "</p>");
      div.append("<p>Pages: " + data[i].pages + "</p>");
      div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE BOOK</button>");

      $("#stats").append(div);

    }

    $(".delete").click(function() {

      $.ajax({
        method: "DELETE",
        url: "/api/book/" + $(this).attr("data-id")
      })
        .then(function() {
          console.log("Deleted Successfully!");
        });

      $(this).closest("div").remove();

    });

  }
}
