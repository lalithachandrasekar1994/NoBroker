$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("NoBroker.feature");
formatter.feature({
  "line": 2,
  "name": "Login and select the property",
  "description": "",
  "id": "login-and-select-the-property",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Propertyselection"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Launch the NoBroker app and Login",
  "description": "",
  "id": "login-and-select-the-property;launch-the-nobroker-app-and-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Launch the NoBroker app",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Land on the Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "login the app",
  "rows": [
    {
      "cells": [
        "Mobile",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "1237567899",
        "nobroker123"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "NoBrokerSteps.launch_the_NoBroker_app()"
});
formatter.result({
  "duration": 11784749800,
  "status": "passed"
});
formatter.match({
  "location": "NoBrokerSteps.land_on_the_Home_Page()"
});
formatter.result({
  "duration": 9196612200,
  "status": "passed"
});
formatter.match({
  "location": "NoBrokerSteps.login_the_app(DataTable)"
});
formatter.result({
  "duration": 61803160901,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Search the City details and apply bedroom filter",
  "description": "",
  "id": "login-and-select-the-property;search-the-city-details-and-apply-bedroom-filter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "Select ‘Buy’ property related option and Click on the ‘Search’ related box",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "select “Bangalore” city and select two localities(Marathahalli and HSR Layout)",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Click on the checkbox “Include nearby Properties”",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Select 2 Bhk and 3 Bhk from the number of bedrooms section",
  "keyword": "Then "
});
formatter.match({
  "location": "NoBrokerSteps.select_Buy_property_related_option_and_Click_on_the_Search_related_box()"
});
formatter.result({
  "duration": 1978784700,
  "status": "passed"
});
formatter.match({
  "location": "NoBrokerSteps.select_Bangalore_city_and_select_two_localities_Marathahalli_and_HSR_Layout()"
});
formatter.result({
  "duration": 41111101600,
  "status": "passed"
});
formatter.match({
  "location": "NoBrokerSteps.click_on_the_checkbox_Include_nearby_Properties()"
});
formatter.result({
  "duration": 244324601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 7
    },
    {
      "val": "3",
      "offset": 17
    }
  ],
  "location": "NoBrokerSteps.select_Bhk_and_Bhk_from_the_number_of_bedrooms_section(int,int)"
});
formatter.result({
  "duration": 3106738200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Scroll down on the Property list and give Wronginfo feedback",
  "description": "",
  "id": "login-and-select-the-property;scroll-down-on-the-property-list-and-give-wronginfo-feedback",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "Scroll down on the Property listing page and click on the 4th property",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Scroll down to till end and click on “Wrong Info”",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Select all check-boxes in “What’s wrong” section and click on Report",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 58
    }
  ],
  "location": "NoBrokerSteps.scroll_down_on_the_Property_listing_page_and_click_on_the_th_property(int)"
});
formatter.result({
  "duration": 4028982300,
  "status": "passed"
});
formatter.match({
  "location": "NoBrokerSteps.scroll_down_to_till_end_and_click_on_Wrong_Info()"
});
formatter.result({
  "duration": 3071467000,
  "error_message": "org.openqa.selenium.UnsupportedCommandException: Could not parse UiSelector argument: wrongInfo is not a string\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LKB-L-031\u0027, ip: \u0027192.168.217.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {appActivity: com.nobroker.app.activities..., appPackage: com.nobroker.app, automationName: UiAutomator1, databaseEnabled: false, desired: {appActivity: com.nobroker.app.activities..., appPackage: com.nobroker.app, automationName: UiAutomator1, deviceName: WDM3Y18810002926, platformName: android}, deviceManufacturer: HUAWEI, deviceModel: LND-AL30, deviceName: WDM3Y18810002926, deviceScreenSize: 720x1440, deviceUDID: WDM3Y18810002926, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, platform: LINUX, platformName: Android, platformVersion: 8.0.0, takesScreenshot: true, warnings: {}, webStorageEnabled: false}\nSession ID: c5014330-4e62-4132-8f4b-015eb7a38155\n*** Element info: {Using\u003d-android uiautomator, value\u003dnew UiScrollable(new UiSelector()).scrollIntoView(text(wrongInfo))}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat io.appium.java_client.FindsByAndroidUIAutomator.findElementByAndroidUIAutomator(FindsByAndroidUIAutomator.java:38)\r\n\tat io.appium.java_client.MobileBy$ByAndroidUIAutomator.findElement(MobileBy.java:278)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat PageObjects.NoBrokerPageObjects.selectWrongInfo(NoBrokerPageObjects.java:224)\r\n\tat StepDefinition.NoBrokerSteps.scroll_down_to_till_end_and_click_on_Wrong_Info(NoBrokerSteps.java:64)\r\n\tat ✽.Then Scroll down to till end and click on “Wrong Info”(NoBroker.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NoBrokerSteps.select_all_check_boxes_in_What_s_wrong_section_and_click_on_Report()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "Change the cofiguration and save changes with success message",
  "description": "",
  "id": "login-and-select-the-property;change-the-cofiguration-and-save-changes-with-success-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "Change 3BHK to 4+BHK from ‘whats is the correct configuration’ section",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "click on the “save changes” button and verify the successful message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 7
    },
    {
      "val": "4",
      "offset": 15
    }
  ],
  "location": "NoBrokerSteps.change_BHK_to_BHK_from_whats_is_the_correct_configuration_section(int,int)"
});
formatter.result({
  "duration": 645534682300,
  "error_message": "org.openqa.selenium.NoSuchSessionException: The driver was unexpectedly shut down!\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LKB-L-031\u0027, ip: \u0027192.168.217.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {appActivity: com.nobroker.app.activities..., appPackage: com.nobroker.app, automationName: UiAutomator1, databaseEnabled: false, desired: {appActivity: com.nobroker.app.activities..., appPackage: com.nobroker.app, automationName: UiAutomator1, deviceName: WDM3Y18810002926, platformName: android}, deviceManufacturer: HUAWEI, deviceModel: LND-AL30, deviceName: WDM3Y18810002926, deviceScreenSize: 720x1440, deviceUDID: WDM3Y18810002926, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, platform: LINUX, platformName: Android, platformVersion: 8.0.0, takesScreenshot: true, warnings: {}, webStorageEnabled: false}\nSession ID: c5014330-4e62-4132-8f4b-015eb7a38155\n*** Element info: {Using\u003dxpath, value\u003d//*[@resource-id\u003d\u0027com.nobroker.app:id/sp_bhk_type\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:152)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat PageObjects.NoBrokerPageObjects.change3bhkTo4bhk(NoBrokerPageObjects.java:246)\r\n\tat StepDefinition.NoBrokerSteps.change_BHK_to_BHK_from_whats_is_the_correct_configuration_section(NoBrokerSteps.java:76)\r\n\tat ✽.When Change 3BHK to 4+BHK from ‘whats is the correct configuration’ section(NoBroker.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NoBrokerSteps.click_on_the_save_changes_button_and_verify_the_successful_message()"
});
formatter.result({
  "status": "skipped"
});
});\r\n\tat ✽.When Scroll down on the Property listing page and click on the 4th property(NoBroker.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NoBrokerSteps.scroll_down_to_till_end_and_click_on_Wrong_Info()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NoBrokerSteps.select_all_check_boxes_in_What_s_wrong_section_and_click_on_Report()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "Change the cofiguration and save changes with success message",
  "description": "",
  "id": "login-and-select-the-property;change-the-cofiguration-and-save-changes-with-success-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "Change 3BHK to 4+BHK from ‘whats is the correct configuration’ section",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "click on the “save changes” button and verify the successful message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 7
    },
    {
      "val": "4",
      "offset": 15
    }
  ],
  "location": "NoBrokerSteps.change_BHK_to_BHK_from_whats_is_the_correct_configuration_section(int,int)"
});
formatter.result({
  "duration": 13630801,
  "error_message": "org.openqa.selenium.NoSuchSessionException: A session is either terminated or not started\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LKB-L-031\u0027, ip: \u0027192.168.217.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {appActivity: com.nobroker.app.activities..., appPackage: com.nobroker.app, automationName: UiAutomator1, databaseEnabled: false, desired: {appActivity: com.nobroker.app.activities..., appPackage: com.nobroker.app, automationName: UiAutomator1, deviceName: WDM3Y18810002926, platformName: android}, deviceManufacturer: HUAWEI, deviceModel: LND-AL30, deviceName: WDM3Y18810002926, deviceScreenSize: 720x1440, deviceUDID: WDM3Y18810002926, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, platform: LINUX, platformName: Android, platformVersion: 8.0.0, takesScreenshot: true, warnings: {}, webStorageEnabled: false}\nSession ID: c2b6bec4-2694-40a5-8afc-eec43466a47c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteTimeouts.implicitlyWait(RemoteWebDriver.java:780)\r\n\tat PageObjects.NoBrokerPageObjects.\u003cinit\u003e(NoBrokerPageObjects.java:40)\r\n\tat StepDefinition.NoBrokerSteps.change_BHK_to_BHK_from_whats_is_the_correct_configuration_section(NoBrokerSteps.java:74)\r\n\tat ✽.When Change 3BHK to 4+BHK from ‘whats is the correct configuration’ section(NoBroker.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NoBrokerSteps.click_on_the_save_changes_button_and_verify_the_successful_message()"
});
formatter.result({
  "status": "skipped"
});
});