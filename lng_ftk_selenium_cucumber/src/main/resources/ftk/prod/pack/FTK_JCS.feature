Feature: FKT testing in PROD	
In order to check whether all capabilities are working or not
I want to add DPSI 


Scenario: login in webiste
Given I go to "FTKURL" on "Mozilla"
When click on "template"
Then search for "myjobs"
And click on "srctmp"
Then job should be "success"