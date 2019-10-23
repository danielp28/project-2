
// Get references to page elements
var $userName = $("#user-name");
var $userBio = $("#user-bio");
var $submitBtn = $("#submit");
var $userList = $("#user-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveUsers: function(user) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/users",
      data: JSON.stringify(user)
    });
  },
  getUsers: function() {
    return $.ajax({
      url: "api/users",
      type: "GET"
    });
  },
  deleteUsers: function(id) {
    return $.ajax({
      url: "api/users/" + id,
      type: "DELETE"
    });
  }
};

// refreshusers gets new users from the db and repopulates the list
var refreshUsers = function() {
  API.getUsers().then(function(data) {
    var $users = data.map(function(user) {
      var $a = $("<a>")
        .text(user.text)
        .attr("href", "/user/" + user.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": user.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $userList.empty();
    $userList.append($users);
  });
};

// handleFormSubmit is called whenever we submit a new user
// Save the new user to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var user = {
    name: $userName.val().trim(),
    description: $userBio.val().trim()
  };

  if (!(user.name && user.description)) {
    alert("You must enter an username and description!");
    return;
  }

  API.saveUser(user).then(function() {
    refreshUsers();
  });

  $userName.val("");
  $userBio.val("");
};

// handleDeleteBtnClick is called when an user's delete button is clicked
// Remove the user from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteUser(idToDelete).then(function() {
    refreshUsers();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$userList.on("click", ".delete", handleDeleteBtnClick);

// -----------------------------------------------------------

// onclick "like"

// function to add the photo id to the db and store in favorites

// function to load next photo

// on click "meh/next"

// fn to load next photo

// creating user info
$("submit-bio").on("click", function(event) {
  event.preventDefault();

  var newUser = {
    name: $("#inputname")
      .val()
      .trim(),
    age: $("#inputage")
      .val()
      .trim(),
    bio: $("#inputbio")
      .val()
      .trim(),
    pictureURL: $("#userpic").val()
  };
  console.log(newUser);

  $.post("/api/newuser", newUser).then(function(data) {
    console.log(data);
  });

  $("#inputname").val("");
  $("#inputage").val("");
  $("#inputbio").val("");
  $("#userpic").val("");
});

// onclick "like"
$("sumbit-bttn").on("click", function() {
  document.getElementById;
});
// function to add the photo id to the db and store in favorites
// function to load next photo

// on click "meh"
// fn to load next photo


  // $("#submit").click(function(e){
  //   e.preventDefault();

  //   var email = $("#email").val();
  //   var password = $("#password").val();

  //   $.post("/api/signup", {email, password}).then(function(response){
  //     // do whatever
  //     console.log(response);
  //     if(response)
  //   })

  // })

  var card = $("#cardProfile")


// Hard-coded array of profiles
// -------------------------------------------------------------------
  var buttonClicks = 1;
  var profiles = [
    {
      name: "Tom Selleck",
      age: 34,
      bio: "I like long walks on the beach...",
      pictureURL: "images/tomselleck1.jpg"
    },
    {
      name: "Ron Swanson",
      age: 35,
      bio: "Wouldn't you like to know...",
      pictureURL: "images/nickofferman1.jpg"
    },
    {
      name: "Idris Elba",
      age: 32,
      bio: "I'm a mysterious man",
      pictureURL: "images/idriselba.jpg"
    },
    {
      name: "Baggio",
      age: 28,
      bio: "Itsa me, Baggio!",
      pictureURL: "images/baggio1.jpg"
    },
    {
      name: "Milo Ventimiglia",
      age: 28,
      bio: "Itsa me, Baggio!",
      pictureURL: "images/miloventimiglia.jpg"
    },{
      name: "Eddie Murphy",
      age: 28,
      bio: "Itsa me, Baggio!",
      pictureURL: "images/eddiemurphy.jpg"
    },{
      name: "Henry Cavill",
      age: 28,
      bio: "Itsa me, Baggio!",
      pictureURL: "images/henrycavill.jpg"
    },{
      name: "Bradley Cooper",
      age: 28,
      bio: "Itsa me, Baggio!",
      pictureURL: "images/bradleycooper.jpg"
    },
  ];

  // Load first profile on load in
      // Original File included in HTML //
  // Use the first profile card as a template/container for the other profiles

  // When "Like" or "Next" is clicked, replace the current card with all new info of next object/values in array
$(document).on("click", "#next", function() {
  loadProfile(buttonClicks);
});

$(document).on("click", "#like", function() {
  loadProfile(buttonClicks);
});

$(document).on("click", "#submit-bio", function() {
  makeNewProfile();
});

  // Access the next item in the array
  // Retrieve the info for: pic, name, age, bio - populate into the new card
      
  // Stop right after the info is loaded for the card

  // On next button click, repeat the process for the next object in the array



  // ----------------------------------------------------------------- //
  
// Dynamically create a profile and populate info in card
// for(var i = 0; i<profiles.length; i++){

// }

function loadProfile(position) {

  var stache = profiles[position]
  //target the row in jQuery
  var img = $("#profilePic").attr("src", stache.pictureURL);
  var name = $("#nameAge").html(stache.name + ", " + stache.age);
  var bio = $("#profileBio").html(stache.bio);

  if (buttonClicks === profiles.length - 1) {
    buttonClicks = 0;
  }
  else {
    buttonClicks++
  }
}

function makeNewProfile(){
}
