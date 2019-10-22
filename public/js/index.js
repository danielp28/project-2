// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

// -----------------------------------------------------------

// onclick "like"

// function to add the photo id to the db and store in favorites

// function to load next photo

// on click "meh/next"

// fn to load next photo

// creating user info
$("submit-bio").on('click', function(event){
  event.preventDefault(); 

  var newUser = {
    name: $("#inputname").val().trim(),
    age: $("#inputage").val().trim(),
    bio: $("#inputbio").val().trim(),
    pictureURL: $("#userpic").val()    
  };
  console.log(newUser);

  $.post("/api/newuser", newUser)
    .then(function(data){
      console.log(data)
    });

    $("#inputname").val("");
    $("#inputage").val("");
    $("#inputbio").val("");
    $("#userpic").val("");
});


// onclick "like"
$("sumbit-bttn").on("click", function(){
  document.getElementById
})
// function to add the photo id to the db and store in favorites
// function to load next photo


// on click "meh"
// fn to load next photo


  $("#submit").click(function(e){
    e.preventDefault();

    var email = $("#email").val();
    var password = $("#password").val();

    $.post("/api/signup", {email, password}).then(function(response){
      // do whatever
      console.log(response);
      if(response)
    })

  })



  var questions = [
    {
      name: "What was the first full length CGI movie?",
      age: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
      bio: "Toy Story",
      pictureURL: ""
    },
    {
      question: "Which of these is NOT a name of one of the Spice Girls?",
      answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
      correctAnswer: "Fred Spice"
    },
    {
      question: "Which NBA team won the most titles in the 90s?",
      answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
      correctAnswer: "Chicago Bulls"
    },
    {
      question: "Which group released the hit song, 'Smells Like Teen Spirit'?",
      answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
      correctAnswer: "Nirvana"
    },
    {
      question: "Which popular Disney movie featured the song, 'Circle of Life'?",
      answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
      correctAnswer: "The Lion King"
    },
    {
      question:
        "Finish this line from the Fresh Prince of Bel-Air theme song: 'I whistled for a cab and when it came near, the license plate said...'",
      answers: ["Dice", "Mirror", "Fresh", "Cab"],
      correctAnswer: "Fresh"
    },
    {
      question: "What was Doug's best friend's name?",
      answers: ["Skeeter", "Mark", "Zach", "Cody"],
      correctAnswer: "Skeeter"
    },
    {
      question: "What was the name of the principal at Bayside High in Saved By The Bell?",
      answers: ["Mr.Zhou", "Mr.Driggers", "Mr.Belding", "Mr.Page"],
      correctAnswer: "Mr.Belding"
    }
  ];


