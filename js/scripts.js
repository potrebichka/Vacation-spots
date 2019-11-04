$(document).ready(function() {

  var listOfSpots = new VacationSpots();

  $("#formOne").submit(function(event) {
    event.preventDefault();
    var place = $("#inputPlace").val();
    var landmark = $("#inputLandmarks").val();
    var time = $("#inputTime").val();
    var description = $("#inputDescription").val();

    var newDestination = new Destination(place, landmark, time, description);

    listOfSpots.addDestination(newDestination);
    $("#placesList").empty();
    for (var idx = 0; idx < listOfSpots.places.length; idx ++) {
        spot = listOfSpots.places[idx];
      $("#placesList").append("<li>" + '<h5 class="mt-0">' + spot.location +  '</h5>' + "</li>");

      $("#placesList").append(
        '<div class="media">' +
    //      '<img src="..." class="mr-3" alt="...">' +
          '<div class="media-body">' +
            '<h6>' + spot.timeOfYear + '</h6>' +
            '<h6>' + spot.landmarks + '</h6>' +
            '<p>' + spot.description + '</p>' +
          '</div>' +
        '</div>'
      );
      // $("#placesList").children().hide();
      // console.log($("#placesList").children()[0]);
      // $("#placesList").children()[idx*2].click(function() {
      //    $("#placesList").children()[idx+1].toggle();
      //  })
    };

    $(".results").show();
    // console.log(listOfSpots.places);




  });




});
// Business logic for Spots
function VacationSpots() {
  this.places = [],
  this.currentId = 0
}
VacationSpots.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.places.push(destination);
}
VacationSpots.prototype.assignId = function() {
  this.currentId++;
  return this.currentId;
}
VacationSpots.prototype.findDestination = function(id) {
  for (var i = 0; i < this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        return this.places[i];
      }
    }
  }
  return false;
}
VacationSpots.prototype.deleteDestination = function(id) {
  for (var i = 0; i < this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        delete this.places[i];
        return true;
      }
    }
  }
  return false;
}

// Business logic for Destination
function Destination(location, landmarks, timeOfYear, description) {
  this.location = location,
  this.landmarks = landmarks,
  this.timeOfYear = timeOfYear,
  this.description = description;
}
