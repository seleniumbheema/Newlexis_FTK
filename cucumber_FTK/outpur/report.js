$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ftk/cucumber/bdd/jobs/ftk.feature");
formatter.feature({
  "line": 1,
  "name": "Create a job in FTK",
  "description": "\r\nIn order to Create a template\r\nAs a Content devleoper\r\nI want to process the content",
  "id": "create-a-job-in-ftk",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "create a template in FTK",
  "description": "",
  "id": "create-a-job-in-ftk;create-a-template-in-ftk",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I go to \"http://ftk.intprod.lnawsapps.co.uk/JCSWeb#/1/-1/0/1\" on \"Mozilla\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "click on \"templates\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on \"add template\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "pass parameter in \"name\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "pass parameter in \"description\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on \"Done\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://ftk.intprod.lnawsapps.co.uk/JCSWeb#/1/-1/0/1",
      "offset": 9
    },
    {
      "val": "Mozilla",
      "offset": 66
    }
  ],
  "location": "template.I_go_to_FTK(String,String)"
});
formatter.result({
  "duration": 206408231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "templates",
      "offset": 10
    }
  ],
  "location": "template.click_on_done(String)"
});
formatter.result({
  "duration": 110136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "add template",
      "offset": 10
    }
  ],
  "location": "template.click_on_done(String)"
});
formatter.result({
  "duration": 86845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 19
    }
  ],
  "location": "template.pass_param(String)"
});
formatter.result({
  "duration": 73029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 19
    }
  ],
  "location": "template.pass_param(String)"
});
formatter.result({
  "duration": 71845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Done",
      "offset": 10
    }
  ],
  "location": "template.click_on_done(String)"
});
formatter.result({
  "duration": 65529,
  "status": "passed"
});
});