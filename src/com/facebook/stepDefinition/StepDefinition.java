package com.facebook.stepDefinition;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.WebElement;

import com.facebook.runner.WebConnector;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
	WebConnector wc = WebConnector.getInstance();
	
	@Then("^Login to Facebook$")
	public void login_to_Facebook(DataTable table) throws Throwable {
		List<List<String>> data = table.raw();
		//Map<String, String> dat = table.asMap(userid, password);
		wc.login(data);
	}
	
	@When("^Click on \"([^\"]*)\"$")
	public void click_on(String notificationObject) throws Throwable {
		wc.click(notificationObject);
		Thread.sleep(2000);
	   
	}
	
	@Then("^scroll down \"([^\"]*)\" till last notification of \"([^\"]*)\","
			+ "print notification name and click on that_notification_object$")
	public void scroll_down_print_and_click_on(String object_list, String expectedDate) throws Throwable {
	   wc.scroll_down(object_list, expectedDate);
	   Thread.sleep(2000);
	}

	

	@Then("^Verify you clicked on right notification \\(if possible\\)$")
	public void verify_you_clicked_on_right_notification_if_possible() throws Throwable {
		wc.verifyClickedObject();
		//List<WebElement> el = wc.scroll_ele;
		
	    
	}

	@Given("^Open Browser \"([^\"]*)\" and Go to the Facebook \"([^\"]*)\"$")
	public void open_Browser_and_Go_to_the_Facebook(String browser, String url) throws Throwable {
	    wc.openBrowser(browser);
	    wc.navigate(url);
	}



}
