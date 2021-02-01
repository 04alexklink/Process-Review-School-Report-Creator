function schoolReport(string) {
  var colourArray = string.split(",")
  console.log("hello", colourArray)
  var outputColourArray = [];
    colourArray.forEach((colour) => {
    if(colour === "Green" || colour === " Green") outputColourArray.push("Green: 1");
    if(colour === "Amber" || colour === " Amber") outputColourArray.push("Amber: 1");
    if(colour === "Red" || colour === " Red") outputColourArray.push("Red: 1");
  })
  console.log(outputColourArray)
  return outputColourArray.join("\n")
}