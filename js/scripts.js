var Tamagotchi = {
  initialize: function(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.activityLevel = 10;
  },
  timePasses: function() {
    this.foodLevel -= 1;
    this.sleepLevel -= 1;
    this.activityLevel -= 1;
  },
  isAlive: function() {
    return this.foodLevel > 0 && this.sleepLevel > 0 && this.activityLevel > 0;
  }
}

$(document).ready(function() {
  var myTamagotchi = Object.create(Tamagotchi);
  myTamagotchi.initialize("Buddy");
  $(".circle1").text(myTamagotchi.foodLevel);
  $(".circle2").text(myTamagotchi.sleepLevel);
  $(".circle3").text(myTamagotchi.activityLevel);

  $("#feed").click(function() {
    myTamagotchi.foodLevel += 1;
    $(".circle1").text(myTamagotchi.foodLevel);
  });
  $("#sleep").click(function() {
    myTamagotchi.sleepLevel += 1;
    $(".circle2").text(myTamagotchi.sleepLevel);
  });
  $("#stuff").click(function() {
    myTamagotchi.activityLevel += 1;
    $(".circle3").text(myTamagotchi.activityLevel);
  });

  var timer = window.setInterval(function() {
              if (myTamagotchi.isAlive()) {
              myTamagotchi.timePasses();
              $(".circle1").text(myTamagotchi.foodLevel);
              $(".circle2").text(myTamagotchi.sleepLevel);
              $(".circle3").text(myTamagotchi.activityLevel);
                if(myTamagotchi.isAlive()) {
                  $(".happy").show();
                } else {
                  $(".happy").hide();
                  $(".sad").show();
                }
              }
                 }, 400)
  timer;

});
