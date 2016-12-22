@facebook
Feature: Facebook automation

  Background: 
    Given Open Browser "Browser_name" and Go to the Facebook "Site_url"

  @scroll_check
  Scenario Outline: Facebook notification scrolldown functionality test
    Then Login to Facebook
      | Fields   | value           |
      | userid   | abcd@domain.com |
      | password | password        |
    When Click on "Notifications_object"
    Then scroll down "Object_lists" till last notification of "<time_stamp>",print notification name and click on that_notification_object
    And Verify you clicked on right notification (if possible)

    Examples: 
      | time_stamp           |
      | November 8 at 9:22pm |
