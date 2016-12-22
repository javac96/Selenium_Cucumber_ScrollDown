$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("fbnotification.feature");
formatter.feature({
  "line": 2,
  "name": "Facebook automation",
  "description": "",
  "id": "facebook-automation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@facebook"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Facebook notification scrolldown functionality test",
  "description": "",
  "id": "facebook-automation;facebook-notification-scrolldown-functionality-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@scroll_check"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Login to Facebook",
  "rows": [
    {
      "cells": [
        "Fields",
        "value"
      ],
      "line": 10
    },
    {
      "cells": [
        "userid",
        "rhasan3860@gmail.com"
      ],
      "line": 11
    },
    {
      "cells": [
        "password",
        "aduree986075"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click on \"Notifications_object\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "scroll down \"Object_lists\" till last notification of \"\u003ctime_stamp\u003e\",print notification name and click on that_notification_object",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify you clicked on right notification (if possible)",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "facebook-automation;facebook-notification-scrolldown-functionality-test;",
  "rows": [
    {
      "cells": [
        "time_stamp"
      ],
      "line": 18,
      "id": "facebook-automation;facebook-notification-scrolldown-functionality-test;;1"
    },
    {
      "cells": [
        "November 8 at 9:22pm"
      ],
      "line": 19,
      "id": "facebook-automation;facebook-notification-scrolldown-functionality-test;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open Browser \"Browser_name\" and Go to the Facebook \"Site_url\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Browser_name",
      "offset": 14
    },
    {
      "val": "Site_url",
      "offset": 52
    }
  ],
  "location": "StepDefinition.open_Browser_and_Go_to_the_Facebook(String,String)"
});
formatter.result({
  "duration": 9684610404,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Facebook notification scrolldown functionality test",
  "description": "",
  "id": "facebook-automation;facebook-notification-scrolldown-functionality-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@scroll_check"
    },
    {
      "line": 1,
      "name": "@facebook"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Login to Facebook",
  "rows": [
    {
      "cells": [
        "Fields",
        "value"
      ],
      "line": 10
    },
    {
      "cells": [
        "userid",
        "rhasan3860@gmail.com"
      ],
      "line": 11
    },
    {
      "cells": [
        "password",
        "aduree986075"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click on \"Notifications_object\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "scroll down \"Object_lists\" till last notification of \"November 8 at 9:22pm\",print notification name and click on that_notification_object",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify you clicked on right notification (if possible)",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.login_to_Facebook(DataTable)"
});
formatter.result({
  "duration": 9044153004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Notifications_object",
      "offset": 10
    }
  ],
  "location": "StepDefinition.click_on(String)"
});
formatter.result({
  "duration": 6020032963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Object_lists",
      "offset": 13
    },
    {
      "val": "November 8 at 9:22pm",
      "offset": 54
    }
  ],
  "location": "StepDefinition.scroll_down_print_and_click_on(String,String)"
});
formatter.result({
  "duration": 75182365228,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.verify_you_clicked_on_right_notification_if_possible()"
});
formatter.result({
  "duration": 4031307172,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d55.0.2883.87)\n  (Driver info: chromedriver\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 4.03 seconds\nBuild info: version: \u00272.49.1\u0027, revision: \u00277203e46\u0027, time: \u00272016-01-21 17:35:35\u0027\nSystem info: host: \u0027Hasan\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed), userDataDir\u003dC:\\Users\\Mohammad\\AppData\\Local\\Temp\\scoped_dir4444_23208}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d55.0.2883.87, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: f03cd0d9bfd330484bfc644a60cb1df6\n*** Element info: {Using\u003dlink text, value\u003dFriends Tourism}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat com.facebook.runner.WebConnector.verifyClickedObject(Unknown Source)\r\n\tat com.facebook.stepDefinition.StepDefinition.verify_you_clicked_on_right_notification_if_possible(Unknown Source)\r\n\tat ✽.And Verify you clicked on right notification (if possible)(fbnotification.feature:15)\r\n",
  "status": "failed"
});
});