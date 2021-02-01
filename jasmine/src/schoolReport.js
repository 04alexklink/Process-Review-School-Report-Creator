function schoolReport(string) {
  var colourArray = string.split(",")
  var outputColourArray = [];
  var green = 0;
  var amber = 0;
  var red = 0;
  var unknown = 0;

  colourArray.forEach((colour) => {
    if(colour === "Green" || colour === " Green") {
      green += 1;
    } else if(colour === "Amber" || colour === " Amber") {
      amber += 1;
    }
    else if(colour === "Red" || colour === " Red") { 
      red += 1;
    } else unknown += 1;
  })
  if(green > 0) outputColourArray.push(`Green: ${green}`)
  if(amber >0) outputColourArray.push(`Amber: ${amber}`)
  if(red >0) outputColourArray.push(`Red: ${red}`)
  if(unknown > 0) outputColourArray.push(`Unrecognised Colour: ${unknown}`)
  return outputColourArray.join("\n")
}