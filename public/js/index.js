// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function (example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function () {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function (id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function () {
//   API.getExamples().then(function (data) {
//     var $examples = data.map(function (example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function (event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function () {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function () {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function () {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);

// -----------------------------------------------------------

var profiles = [
  {
    name: "Tom Selleck",
    age: ["34"],
    bio: "I like long walks on the beach...",
    pictureURL: "images/tomselleck1.jpg"
  },
  {
    name: "Ron Swanson",
    age: ["35"],
    bio: "Wouldn't you like to know...",
    pictureURL: "images/nickofferman1.jpg"
  },
  {
    name: "Idris Elba",
    age: ["32"],
    bio: "I'm a mysterious man",
    pictureURL: "images/idriselba.jpg"
  },
  {
    name: "Baggio",
    age: ["28"],
    bio: "Itsa me, Baggio!",
    pictureURL: "images/baggio1.jpg"
  }
];


// creating user info
$("submit-bio").on('click', function (event) {
  event.preventDefault();

  var newUser = {
    name: $("#inputname").val().trim(),
    age: $("#inputage").val().trim(),
    bio: $("#inputbio").val().trim(),
    pictureURL: $("#userpic").val()
  };
  console.log(newUser);

  $.post("/api/newuser", newUser)
    .then(function (data) {
      console.log(data)
    });

  $("#inputname").val("");
  $("#inputage").val("");
  $("#inputbio").val("");
  $("#userpic").val("");
});


// onclick "like"
$("sumbit-bttn").on("click", function () {
  nextPhoto();
})
// function to add the photo id to the db and store in favorites
// function to load next photo


// on click "meh"
// fn to load next photo

function nextPhoto(profiles) {
  var card = $("#card-display");

  card.html("<div>" + profiles + "</div>");
  for (var i = 0; i < profiles.length; i++) {
    card.append("<div class= 'card-profile' data-name=' " + profiles[i] + " '>" + profiles[i] + "</div>")
  }
}