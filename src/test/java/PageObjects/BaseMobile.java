package PageObjects;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;

public class BaseMobile {
public static AppiumDriver driver;
	
	public static WebDriver Mobilegetdriver() throws MalformedURLException
	{
		if(driver==null)
		{
		DesiredCapabilities Capabilities = new DesiredCapabilities ();
		Capabilities.setCapability("deviceName", "WDM3Y18810002926");
		Capabilities.setCapability("platformName", "Android");
	//	Capabilities.setCapability("platformVersion", "9");
		Capabilities.setCapability("appPackage", "com.nobroker.app");
		Capabilities.setCapability("automationName", "UiAutomator1");
		Capabilities.setCapability("appActivity", "com.nobroker.app.activities.NBSplashScreen");
	    driver = new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"), Capabilities);
		return driver;
		}
		else
		{return driver;
		}
	}
	
}
