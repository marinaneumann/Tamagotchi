describe("Tamagotchi", function() {
  describe("initialize", function() {
    it("sets the name and a few other properties", function() {
      var myTamagotchi = Object.create(Tamagotchi);
      myTamagotchi.initialize("Buddy");
      myTamagotchi.name.should.equal("Buddy");
      myTamagotchi.foodLevel.should.equal(10);
      myTamagotchi.sleepLevel.should.equal(10);
      myTamagotchi.activityLevel.should.equal(10);
    });
  });

  describe("timePasses", function() {
    it("decreases the level of each supply by 1", function() {
      var myTamagotchi = Object.create(Tamagotchi);
      myTamagotchi.initialize("Buddy");
      myTamagotchi.timePasses();
      myTamagotchi.foodLevel.should.equal(9);
      myTamagotchi.sleepLevel.should.equal(9);
      myTamagotchi.activityLevel.should.equal(9);
    });
  });

  describe("isAlive", function() {
    it("is alive if any of the supply levels are above 0", function() {
      var myTamagotchi = Object.create(Tamagotchi);
      myTamagotchi.initialize("Buddy");
      myTamagotchi.isAlive().should.equal(true);
    });
    it("is dead if any of the supply levels are at 0", function() {
      var myTamagotchi= Object.create(Tamagotchi);
      myTamagotchi.initialize("Buddy");
      myTamagotchi.foodLevel = 0;
      myTamagotchi.sleepLevel = 0;
      myTamagotchi.activityLevel = 0;
      myTamagotchi.isAlive().should.equal(false);
    });
  });
});
