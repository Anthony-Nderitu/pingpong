//business logic
var listOfNumbers;

function condition() {
  for (var index = 1; index <= listOfNumbers; index++) {
    if ((index % 3 == 0) && (index % 5 == 0)) {
      $("#result").append('pingpong  <br/>');
    } else if (index % 5 == 0) {
      $("#result").append('pong <br/>');
    } else if (index % 3 == 0) {
      $("#result").append('ping <br/>');
    } else {
      $("#result").append(index.toString() + '<br/>');
    }
  }
}



//user logic

$(document).ready(function() {
  $("#pingpong form").submit(function(event) {
    listOfNumbers = parseInt($("input#number").val())
    $("#result").text('')
    condition()
    $("input#number").val('')
    event.preventDefault();

  });
});
