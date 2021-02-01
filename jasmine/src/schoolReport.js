function schoolReport(string) {
  _isStringInput(string);
  var colourArray = string.split(",")
  var green = 0, amber = 0, red = 0, unknown = 0;
  colourArray.forEach((colour) => {
    if(_isGreenColour(colour)) {
      green += 1;
    } else if(_isAmberColour(colour)) {
      amber += 1;
    }
    else if(_isRedColour(colour)) { 
      red += 1;
    } else unknown += 1;
  })
  var outputColourArray = [];
  if(green > 0) outputColourArray.push(`Green: ${green}`)
  if(amber >0) outputColourArray.push(`Amber: ${amber}`)
  if(red >0) outputColourArray.push(`Red: ${red}`)
  if(unknown > 0) outputColourArray.push(`Unrecognised Colour: ${unknown}`)
  return outputColourArray.join("\n")
}

function _isStringInput(string) {
  if(typeof(string) !== "string") throw new Error("Data input was not a string");
}

function _isGreenColour(colour) {
  return (colour === "Green" || colour === " Green")
}

function _isAmberColour(colour) {
  return (colour === "Amber" || colour === " Amber")
}

function _isRedColour(colour) {
  return (colour === "Red" || colour === " Red")
}