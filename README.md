# qa-cypress-challenge

A part of interview process for QA role

## Installation & setup

1. Clone the repo
2. Open in your fav code editor
3. Run `npm install` if you do not have npm installed in your local machine

## Open cypress UI

1. Open repo in your fav editor
2. Run `npx cypress open`

## Test

### Manual test

1. Make sure to verify the trip has loaded in the browser
2. Search a trip `Germany to Canada` as a vaccinated traveler
   2.1 Expand document required section
   2.2 Verify ArriveCAN online link[https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/arrivecan.html]
3. Switch to not vaccinated
   3.1 Verify quarantine information
4. Search a trip with future date (2 days later)

### Automation test

1. Navigate to `cypress/integration/test.ts`
2. Write test cases to cover the manual steps above(1 to 4)
