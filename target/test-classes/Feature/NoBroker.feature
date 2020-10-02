@Propertyselection
Feature: Login and select the property

Scenario: Launch the NoBroker app and Login 
Given Launch the NoBroker app
When Land on the Home Page
Then login the app
| Mobile    |password    |
| 1237567899|nobroker123 |

Scenario: Search the City details and apply bedroom filter
When Select ‘Buy’ property related option and Click on the ‘Search’ related box
Then select “Bangalore” city and select two localities(Marathahalli and HSR Layout)
Then Click on the checkbox “Include nearby Properties”
Then Select 2 Bhk and 3 Bhk from the number of bedrooms section

Scenario: Scroll down on the Property list and give Wronginfo feedback
When Scroll down on the Property listing page and click on the 4th property
Then Scroll down to till end and click on “Wrong Info”
Then Select all check-boxes in “What’s wrong” section and click on Report

Scenario: Change the cofiguration and save changes with success message
When Change 3BHK to 4+BHK from ‘whats is the correct configuration’ section
Then click on the “save changes” button and verify the successful message


