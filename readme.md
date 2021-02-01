# ProcessReview School Report Challenge
Client Requirements:
School reports company
Application needed to create a report from an input of a string of comma separated values based on Green Amber Red system. 
Output should be a string with a tag for each colour score that appeared in the input, as well as a count of how often that colour occured in the input string. Each colour outputted should be separated by a line break. 
If a colour doesn't appear in the input string, don't include it in output string with a count of 0, just leave it out. 

Example input csv: "Green, Red, Amber, Red"
Example output: "Green: 1 \n Amber: 1\n Red: 2"

INPUT               | OUTPUT
"Green"             | "Green: 1"
"Amber"             |"Amber: 1"
"Red"               |"Red: 1" 
"Green, Amber"      | "Green: 1\nAmber: 1"
"Green, Green"      | "Green: 2"
"Green, Amber, Amber, Red, Green, Red" | "Green:2\nAmber:2\nRed:2"
"Green, Yellow, Blue, Green, Red"      | "Green:2\nRed:1\nUnrecognised Colour:2"
[]                  | Throw error: "Data input was not a string"

Edge Case: 
- if system sees unrecognised colour, include separate uncounted category
- Data type other than string should output an error

Feedback: 
-I had 3 redundant tests, which I knew were all going to pass but stuck them in anyway. Once I had done the >1 colour in the string test, i did not need to test for all combinations of >1 colour. "Green, Amber" was sufficient.
- I needed to spend more time at the start getting requirements. Also if I had spent time at the beginning going over expected input/output for all tests I thought I would need, the client could have clarified with me what they would like to happen for edge cases, and how I could expect the data to be inputted accurately, rather than make assumptions about capitalisation and how to handle spaces between colours in the input string, which I assumed would be there but had I of asked, they could have confirmed this or not.  
