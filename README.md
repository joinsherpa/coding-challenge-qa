# qa-cypress-challenge

An step of the interview process for QA role at sherpa

## Before Installation
- Make sure you have NodeJS installed on your machine.
- Install NPM globally.
- For this challenge, you need an IDE. We recommend VSCode.

## Installation & setup

1. Clone the repository
2. Open in your fav code editor (IDE)
3. Create a branch with your name
4. Checkout to the new branch
5. Run `npm install` 

## Test

### Manual test

1. Navigate to [Sandbox](https://apps-sandbox.joinsherpa.io/trip?appId=sxgyNDA1Mz) in your favorite browser.
2. Make sure to verify the trip has loaded in the browser.
3. Search a trip from `Germany` to `Canada` as a vaccinated traveler.
   * Expand document required section.
   * Verify ArriveCAN online [link](https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/arrivecan.html).
4. Switch to not vaccinated
   * Verify quarantine information.
5. Search a trip with future date (2 days later).

### Automation test

1. Navigate to `cypress/integration/test.ts`.
2. Write test cases to cover the manual steps above (1 to 5).

Note1: Don't worry about navigating to the Sherpa url, the Cypress is setup to start there.
Note2: Cypress uses electron browser by default. If you wish to run it in any other browser, feel free to do so!

## Using cypress UI

1. you can run the test via `npm run test` command
2. If you prefer using a UI, use `npx run test-ui`, and then choose `test` to run in a browser.

## Submit your challenge

Once you are happy with your work, push your branch with latest commits to the cloud!