describe("schoolReport", () => {
  it("takes single colour string input and returns it with a count as output", () => {
    var string = "Green";
    expect(schoolReport(string)).toEqual("Green: 1");
  })
  it("takes single colour string input and returns it with a count as output", () => {
    var string = "Amber";
    expect(schoolReport(string)).toEqual("Amber: 1");
  })
  it("takes single colour string input and returns it with a count as output", () => {
    var string = "Red";
    expect(schoolReport(string)).toEqual("Red: 1");
  })
  it("takes multiple colours as input and outputs correct counts", () => {
    var string = "Green, Amber";
    expect(schoolReport(string)).toEqual("Green: 1\nAmber: 1");
  })
  it("can output accurate counts for >1 instance of colour", () => {
    var string = "Green, Green";
    expect(schoolReport(string)).toEqual("Green: 2");
  })
  it("can output accurate counts for multiple colours with >1 instance", () => {
    var string = "Green, Amber, Amber, Red, Green, Red";
    expect(schoolReport(string)).toEqual("Green: 2\nAmber: 2\nRed: 2")
  })
  describe("edge case", () => {
    it("can output a count of unknown colours (not G, A or R)", () => {
      var string = "Green, Yellow, Blue, Green, Red";
      expect(schoolReport(string)).toEqual("Green: 2\nRed: 1\nUnrecognised Colour: 2");
    })
    it("throws error if data type other than string inputted", () => {
      var array = [];
      expect(function() {schoolReport(array)}).toThrowError("Data input was not a string");
    })
  })
})