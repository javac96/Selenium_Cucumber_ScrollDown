package com.facebook.runner;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.List;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.sikuli.script.FindFailed;
import org.sikuli.script.Pattern;
import org.sikuli.script.Screen;

public class WebConnector {

	WebDriver driver= null;
	WebDriver mozilla=null;
	WebDriver chrome=null;
	WebDriver ie=null;
	static WebConnector w;
	Properties prop = null;
	public String currentReportFolder;
	//public List<WebElement> scroll_ele= null;
	

	private WebConnector(){
		if(prop==null){
			try {
				prop = new Properties();
				FileInputStream fis = new FileInputStream(System.getProperty("user.dir")+"\\src\\com\\facebook\\resources\\facebook.properties");
				prop.load(fis);
				
			} catch (Exception e) {
				System.out.println("Error on intializing properties files");
				//e.printStackTrace();
			}
		}
	}

	//Singleton
	public static WebConnector getInstance(){
		if(w==null){
			w= new WebConnector();
		}
		return w;
	}

	public void login(List<List<String>> data_list){
		driver.findElement(By.id("email")).clear();
		driver.findElement(By.id("email")).sendKeys(data_list.get(1).get(1));
		driver.findElement(By.id("pass")).clear();
		driver.findElement(By.id("pass")).sendKeys(data_list.get(2).get(1));
		//driver.findElement(By.xpath("//input[@id='u_0_l' and @value ='Log In']")).sendKeys(Keys.ENTER);
		Screen screen = new Screen();
		Pattern login_button = new Pattern(System.getProperty("user.dir")+"\\sikuli_images\\fbloginbutton.PNG");
		try {
			screen.click(login_button);
			Thread.sleep(2000);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	public void openBrowser(String browserType){

		if(prop.getProperty(browserType).equalsIgnoreCase("Mozilla") && mozilla==null){
			driver = new FirefoxDriver();
			mozilla=driver;
		}else if(prop.getProperty(browserType).equalsIgnoreCase("Mozilla") && mozilla!=null){
			driver=mozilla;
		}else if(prop.getProperty(browserType).equalsIgnoreCase("Chrome") && chrome==null){
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"//Drivers//chromedriver.exe");
			ChromeOptions option = new ChromeOptions();
			option.addArguments("--disable-notifications");
			//System.setProperty("webdriver.chrome.driver", "C:\\Selenium Driver\\chromedriver.exe");
			driver=new ChromeDriver(option);
			chrome=driver;
		}else if(prop.getProperty(browserType).equals("Chrome") && chrome==null){
			driver=chrome;
		}

		else if(prop.getProperty(browserType).equals("IE")){
			// set the IE server exe path and initialize
		}
		// max
		driver.manage().window().maximize();
		// implicit wait
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}

	// navigates to a URL
	public void navigate(String URL){
		driver.get(prop.getProperty(URL));
	}

	public void click(String objectToBeClicked){
		driver.findElement(By.xpath(prop.getProperty(objectToBeClicked))).click();
	}

	public void scroll_down(String allObjectList, String expectedDate) throws Exception{
		WebElement parent = driver.findElement(By.xpath(prop.getProperty(allObjectList)));
		Thread.sleep(3000);
		int count = 1;
		String expected_notification= prop.getProperty("notif_fst")+count+prop.getProperty("notif_lst");
		//System.out.println(notification_last);
		WebElement currentElement = null;
		if(parent.findElements(By.xpath(expected_notification)).size()>0)
		{
			while(parent.findElements(By.xpath(expected_notification)).size()>0 
					&& !parent.findElement(By.xpath(expected_notification)).getText().trim().equalsIgnoreCase(expectedDate))
			{
				System.out.println("Got li["+count+"]  -> "+parent.findElement(By.xpath(expected_notification)).getText().trim());
				currentElement = parent.findElement(By.xpath(expected_notification));
				//scroll_ele.add(currentElement);
				((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", currentElement);
				Thread.sleep(2000); 

				count++;
				expected_notification= prop.getProperty("notif_fst")+count+prop.getProperty("notif_lst");
			}

			if(parent.findElements(By.xpath(expected_notification)).size()>0)
			{
				currentElement = parent.findElement(By.xpath(expected_notification));
				if(currentElement!=null && currentElement.getText().trim().equalsIgnoreCase(expectedDate))
				{
					System.out.println("Found ---> "+currentElement.getText().trim()+" . Clicking on it ...");
					currentElement.click();
				}else
				{
					System.out.println("Unable to find "+expectedDate);
				}
			}else
			{
				System.out.println("Could not find "+expectedDate);
			}

		}else
		{
			System.out.println("No list is available");
		}
	}
	
	public void verifyClickedObject(){
		String expected_text = prop.getProperty("Expected_page_text");
		String actual_text = driver.findElement(By.linkText("Friends Tourism")).getText();
		if(actual_text.equalsIgnoreCase(expected_text)){
			System.out.println("Yes, you clicked on the right notification.");
		}else{
			System.out.println("You did not click on expected notification.");
		}
	}

}//class
