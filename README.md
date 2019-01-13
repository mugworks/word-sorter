### Thought process for program
1. I assigned a string such as ('a, Y, d,, &) to a variable "words".
2. I wrote some code to split the string, sort it and to see how it handled case sensitivity, special characters and blank spaces.
3. I then added code to handle null and undefined situations and the descending order.
4. Once I had that portion working, I added the readFile and made sure that was working.
5. I added the writeFile.
6. I added toUpperCase.
7. There are libraries available that deal with parsing CSV files that I chose not to use for this exercise due to time constraints.

I made some assumptions that I would want clarified as the developer or tester. I assumed that blank cells would be eliminated. I assumed that my input file was not so large that I would have to consider streams. I assumed case was not sensitive. Since the example of an input file was a list of cities, I assumed that the user would prefer a listing of (Copenhagen, berlin, Athens) vs (berlin, Copenhagen, Athens) in the case that a city was not capitalized. The sort algorithm is case sensitive and I wanted to eliminate that behavior.