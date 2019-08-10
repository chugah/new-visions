New Visions for Public Schools - Dashboard_Challenge

Objectives:

  Build a dashboard that performs as follows:

  - Displays a list of students who are chronically absent
  - Contains relevant information about each student
  - Allows the principal or guidance counselor to adjust the threshold
  - Adjustments to the threshold changes the list of students

Deliverables:

  - Technologies used and architectural choices
  - Source code
  - Instructions to run project locally

A. Technologies & Architectural Choices

  - Technologies:  
    a. Node + Express for the back-end
    b. React for the front-end
    c. Bootstrap for styling

  - Architectural choices:
    a. Client side:  Javascript/JSX (react), HTML, CSS
    b. Server side: Javascript

B. Source code

  - Available via download from link sent

C. Instructions

  1.  Open the terminal
  2.  cd into the new-visions folder
  3.  run the command npm run build
  4.  run the command node server.js
  5.  console will show app served at localhost:4000
  6.  Open a browser and enter localhost:4000 in address bar

  - Ensure node/npm is installed on computer
  - Node version used: 10.15.0
  - npm version used:  6.5.0

Please check which node / npm version available on computer. It looks like node 8+ should be ok.  See https://nodejs.org/en/about/releases/.

D. Additional Thoughts

  1.  There are additional ways to explore the data:
    - cohort
    - grade
    - gender
    - school / school district

  2.  Some limitations:

    - it was unclear whether the home phone number belonged to the guidance
      counselor or student
    - some keys were not clear (at least to me)
    - it would have been interesting to explore visual interpretation of data
