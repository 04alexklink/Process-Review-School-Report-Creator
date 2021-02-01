describe("schoolReport", () => {
  it("takes single colour string input and returns it with a count as output", () => {
    // var schoolReport;
    var string;
    string = "Green";
    expect(schoolReport(string)).toEqual("Green: 1");
  })
})