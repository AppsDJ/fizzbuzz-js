describe ("FizzBuzz", function(){

  var fizzBuzz;

  beforeEach(function(){
    fizzBuzz = new FizzBuzz();
  });

  describe ("returns 'true' when number is ", function() {
    it ("divisible by 3", function() {
      expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    });
    it ("divisible by 5", function() {
      expect(fizzBuzz.isDivisibleByFive(5)).toBe(true);
    });
    it ("divisible by 15", function() {
      expect(fizzBuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe ("returns 'false' when number is not ", function() {
    it ("divisible by 3", function() {
      expect(fizzBuzz.isDivisibleByThree(4)).toBe(false);
    });
    it ("divisible by 5", function() {
      expect(fizzBuzz.isDivisibleByFive(4)).toBe(false);
    });
    it ("divisible by 15", function() {
      expect(fizzBuzz.isDivisibleByFifteen(4)).toBe(false);
    });
  });

  describe ("returns 'fizz' when the number is ", function () {
    it ("divisible by 3", function() {
      expect(fizzBuzz.play(3)).toEqual("fizz");
    });
  });

  describe ("returns 'buzz' when the number is ", function () {
    it ("divisible by 5", function() {
      expect(fizzBuzz.play(5)).toEqual("buzz");
    });
  });

  describe ("returns 'fizzBuzz' when the number is ", function () {
    it ("divisible by 15", function() {
      expect(fizzBuzz.play(15)).toEqual("fizzBuzz");
    });
  });

  describe ("returns number when the number is not ", function () {
    it ("divisible by 3, 5 or 15", function() {
      expect(fizzBuzz.play(7)).toEqual(7);
    });
  });
});
