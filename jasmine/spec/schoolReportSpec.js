describe("schoolReport", () => {
  it("takes single colour string input and returns it with a count as output", () => {
    var string;
    string = "Green";
    expect(schoolReport(string)).toEqual("Green: 1");
  })
  it("takes single colour string input and returns it with a count as output", () => {
    var string;
    string = "Amber";
    expect(schoolReport(string)).toEqual("Amber: 1");
  })
  it("takes single colour string input and returns it with a count as output", () => {
    var string;
    string = "Red";
    expect(schoolReport(string)).toEqual("Red: 1");
  })
  it("takes multiple colours as input and outputs correct counts", () => {
    var string = "Green, Amber";
    expect(schoolReport(string)).toEqual("Green: 1\nAmber: 1");
  })
  it("takes multiple colours as input and outputs correct counts", () => {
    var string = "Amber, Red";
    expect(schoolReport(string)).toEqual("Amber: 1\nRed: 1");
  })
  it("takes multiple colours as input and outputs correct counts", () => {
    var string = "Green, Red";
    expect(schoolReport(string)).toEqual("Green: 1\nRed: 1");
  })
  it("takes multiple colours as input and outputs correct counts", () => {
    var string = "Green, Amber, Red";
    expect(schoolReport(string)).toEqual("Green: 1\nAmber: 1\nRed: 1");
  })
  it("can output accurate counts for >1 instance of colour", () => {
    var string = "Green, Green"
    expect(schoolReport(string)).toEqual("Green: 2")
  })
})