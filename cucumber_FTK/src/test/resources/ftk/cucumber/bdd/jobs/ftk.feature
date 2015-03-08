Feature: Create a job in FTK

In order to Create a template
As a Content devleoper
I want to process the content

Scenario: create a template in FTK
Given I go to "LogingURL" on "Mozilla"
And click on "templates"
And click on "addtemplate"
And pass parameter in "addname" as "cucumbername"
And pass parameter in "adddesc" as "description"
Then click on "done"