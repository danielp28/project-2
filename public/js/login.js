$(document).ready(function() {
  var userName = $("#user-name");
  var userBio = $("#user-bio");
  var userList = $("#user-list");

  $("#submitbtn").on("click", function() {});

  var handleFormSubmit = function(event) {
    event.preventDefault();

    var user = {
      name: userName.val().trim(),
      description: userBio.val().trim()
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
});
