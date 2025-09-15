For the take home assignment I chose to do the frontend option of creating a mathler clone using the Dynamic SDK to track a users metadata. 

While not having a ton of experience with React, I have created wordle-like games before for class projects and felt confident in tackling this problem.

There were a few hurdles both in learning the ropes of React as I went as well as implementation of the game. Primarily there are two aspects of the game that I was not able to successfully implement

    1: Due to the method by which the game creates each equation that the player must determine, I ended up ommitting the division operation. As it was, the game randomly generates either a digit 0-9 or one of the four arithmetic operators as the next character in the equation, avoiding multiple operators in a row as well as leading zeroes. As a result of the randomly chosen operators, it was a statistical anomaly for the answer of the equation to be an integer. For the purposes of this assignment I chose to forgo division.

    2: Cumulative solutions is the other feature of the game that I ended up choosing to omit. As I was simultaenously teaching myself react on the go and implementing the game, I realized I was spending too much time on that specific problem and opted to focus on the bigger picture of making sure the rest of it worked.

There was one other ommisions not related to the direct gameplay that I had to make for the sake of time. 

Having next to no experience with React and very little formal experience with JS in general, I have never written test suites for a React project. I attempted to do so for this using RTL and Jest but was unable to get the tests to execute. With that said I did come up with a list of tests for the project that, had I been able to, I would have included:

| Test Number    | Test Case | Expected Result |
| -------- | ------- | ------- |
| Test 1       | Enter an incorrect answer that is equal to the correct answer          | Equation is accepted and evaluated                                    |\
| Test 2       | Input an equation that is valid but doesn’t equal the target number    | Equation is not accepted                                              |\
| Test 3       | Input an invalid equation (2++3)                                       | Error message is shown and input is not accepted                      |\
| Test 4       | Submit a correct guess                                                 | Game shows win screen, highlights all in green                        |\
| Test 5       | Submit 6 incorrect guesses                                             | Game ends, shows correct answer                                       |\
| Test 6       | Use keyboard to enter guesses                                          | Input field responds correctly                                        |\
| Test 8       | Press enter with incomplete guess                                      | Error messsage                                                        |\
| Test 9       | Answer consists of only one digit                                          | Evaluated normally                                                    |\
| Test 10      | Answer consists of only operators                                       | Evaluated normally (does not equal solution, boxes marked yellow, green,grey as normal)                                                   |\
| Test 11      | Use decimal numbers                                        | Answer not accepted                                                   |\
| Test 12      | Use invalid characters (letters, characters other than +, *, or -)                                       | Input rejected                                                        |\
| Test 13      | Answer exceeds 6 characters                                          | Input blocked or truncated                                            |\
| Test 14      | Guess includes character not in the solution                            | Box remains grey                                                   |\
| Test 15      | Guess includes correct character in wrong position                      | Box marked yellow                              |\
| Test 16      | Guess includes correct character in correct place                | Marked green                                                          |\
| Test 17      | User is not logged in (no dynamic user to access)                      | Works as intended, stats popup displays all zeroes                    |\
| Test 18      | First time user is logged in, custom metadata fields undefined         | Stats popup displays all zeroes by default until custom metadata fields are created at end of first game |\

