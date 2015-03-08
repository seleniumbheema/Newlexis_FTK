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
  "name": "I go to \"LogingURL\" on \"Mozilla\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "click on \"templates\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on \"addtemplate\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "pass parameter in \"addname\" as \"cucumbername\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "pass parameter in \"adddesc\" as \"description\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on \"done\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "LogingURL",
      "offset": 9
    },
    {
      "val": "Mozilla",
      "offset": 24
    }
  ],
  "location": "template.I_go_to_FTK(String,String)"
});
formatter.result({
  "duration": 15315283736,
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
  "duration": 792739107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addtemplate",
      "offset": 10
    }
  ],
  "location": "template.click_on_done(String)"
});
formatter.result({
  "duration": 242357027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addname",
      "offset": 19
    },
    {
      "val": "cucumbername",
      "offset": 32
    }
  ],
  "location": "template.pass_param(String,String)"
});
formatter.result({
  "duration": 182034326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adddesc",
      "offset": 19
    },
    {
      "val": "description",
      "offset": 32
    }
  ],
  "location": "template.pass_param(String,String)"
});
formatter.result({
  "duration": 193914360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "done",
      "offset": 10
    }
  ],
  "location": "template.click_on_done(String)"
});
formatter.result({
  "duration": 275749021,
  "status": "passed"
});
});