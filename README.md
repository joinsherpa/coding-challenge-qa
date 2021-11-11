# qa-cypress-challenge

A part of interview process for QA role

## Before Installation
- Make sure you have npm and NodeJS installed on your machine

## Installation & setup

1. Clone the repo
2. Open in your fav code editor
3. Create a branch with your name
4. Checkout to the new branch
5. Run `npm install` 

## Test

### Manual test

0. Navigate to Sandbox[https://apps-sandbox.joinsherpa.io/trip?appId=sxgyNDA1Mz] in your favorite browser.
1. Make sure to verify the trip has loaded in the browser.
2. Search a trip `Germany to Canada` as a vaccinated traveler.
   2.1. Expand document required section
   2.2. Verify ArriveCAN online link[https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/arrivecan.html]
3. Switch to not vaccinated
   3.1. Verify quarantine information
4. Search a trip with future date (2 days later)

### Automation test

1. Navigate to `cypress/integration/test.ts`
2. Write test cases to cover the manual steps above(1 to 4)

Note1: Don't worry about navigating to the Sherpa url, the Cypress is setup to start there.
Note2: Cypress uses electron browser by default. If you wish to run it in any other browser, feel free to do so!

## Using cypress UI

1. you can run the test via `npm run test` command
2. If you prefer using a UI, use `npx run test-ui`, and then choose `test` to run in a browser.
