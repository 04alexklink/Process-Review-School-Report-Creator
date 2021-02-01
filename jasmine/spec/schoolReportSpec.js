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
})