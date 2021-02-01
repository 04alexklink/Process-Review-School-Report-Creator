# ProcessReview
Client Requirements:
School reports company
Input: string of school reports
Build a report that outputs a string
Example input csv: 3 types green amber red
Example output: Count of grade types

"Green, Red, Amber, Red"
"Green: 1 \n Amber: 1\n Red: 2"

INPUT | OUTPUT
"Green"| "Green: 1"
"Amber" |"Amber: 1"
"Red" |"Red: 1" 


Edge Case: 
- if system sees unrecognised colour, include separate uncounted category
- Data type other than string should output an error