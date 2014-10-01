$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ftk/prod/pack/FTK_JCS.feature");
formatter.feature({
  "line": 1,
  "name": "FKT testing in PROD",
  "description": "In order to check whether all capabilities are working or not\r\nI want to add DPSI",
  "id": "fkt-testing-in-prod",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "login in webiste",
  "description": "",
  "id": "fkt-testing-in-prod;login-in-webiste",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I go to \"FTKURL\" on \"Mozilla\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "click on \"template\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "search for \"myjobs\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on \"srctmp\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "job should be \"success\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "FTKURL",
      "offset": 9
    },
    {
      "val": "Mozilla",
      "offset": 21
    }
  ],
  "location": "Myjobs.I_go_to_url(String,String)"
});
formatter.result({
  "duration": 23905133954,
  "error_message": "org.openqa.selenium.WebDriverException: f.QueryInterface is not a function\nCommand duration or timeout: 10.11 seconds\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027LNGWOKL012156\u0027, ip: \u0027192.168.1.13\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d31.0, platform\u003dXP, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 79876977-89be-43e6-9511-c1b4790cdbdf\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:304)\r\n\tat ftk.prod.util.webconnector.navigate(webconnector.java:59)\r\n\tat ftk.prod.pack.Myjobs.I_go_to_url(Myjobs.java:24)\r\n\tat ✽.Given I go to \"FTKURL\" on \"Mozilla\"(ftk/prod/pack/FTK_JCS.feature:7)\r\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: f.QueryInterface is not a function\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027LNGWOKL012156\u0027, ip: \u0027192.168.1.13\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.get(file:///C:/Users/bheemaa/AppData/Local/Temp/anonymous446274740523265080webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:9333:9)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/bheemaa/AppData/Local/Temp/anonymous446274740523265080webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:11455:16)\r\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///C:/Users/bheemaa/AppData/Local/Temp/anonymous446274740523265080webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:407:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "template",
      "offset": 10
    }
  ],
  "location": "Myjobs.search_tempalte(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "myjobs",
      "offset": 12
    }
  ],
  "location": "Myjobs.click_job(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "srctmp",
      "offset": 10
    }
  ],
  "location": "Myjobs.search_tempalte(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 15
    }
  ],
  "location": "Myjobs.isElementpresent(String)"
});
formatter.result({
  "status": "skipped"
});
});