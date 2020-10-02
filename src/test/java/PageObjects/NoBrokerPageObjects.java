package PageObjects;

import java.awt.AWTException;
import java.awt.Dimension;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.net.MalformedURLException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.touch.TouchActions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import io.appium.java_client.MobileBy;
import io.appium.java_client.MobileDriver;
import io.appium.java_client.TouchAction;
import io.appium.java_client.touch.offset.PointOption;

public class NoBrokerPageObjects extends BaseMobile {
	Wait<WebDriver> wait;
	
	public NoBrokerPageObjects(WebDriver driver) throws MalformedURLException
	{
		driver=super.Mobilegetdriver();
		PageFactory.initElements(driver, this);		
		driver.manage().timeouts().implicitlyWait(2000, TimeUnit.SECONDS);

	}
	
	@FindBy(xpath ="//*[@text='Continue']")
	public WebElement continueBtn;
	
	@FindBy(xpath ="//*[@text='ALLOW']")
	public WebElement allowBtn;
	
	@FindBy(xpath ="//*[@text='Buy']")
	public WebElement buyBtn;
	
	@FindBy(xpath ="//*[@text='LOGIN/SIGNUP']")
	public WebElement loginSignupBtn;
	
	@FindBy(xpath ="//*[@text='Enter Phone Number']")
	public WebElement mobileNum;
	
	@FindBy(xpath ="//*[@resource-id='com.nobroker.app:id/btn_signup']")
	public WebElement loginContinueBtn;
	
	@FindBy(xpath ="//*[@resource-id='com.nobroker.app:id/rb_signup_pwd']")
	public WebElement passwdOption;
	
	@FindBy(xpath ="//*[@text='Enter Password']")
	public WebElement passwd;
	
	@FindBy(xpath = "//*[@resource-id='com.nobroker.app:id/locationImageHome']")
	public WebElement clickSearch;

	@FindBy(xpath = "//android.widget.ImageButton[@content-desc='Navigate up']")
	public WebElement clickNavBar;
	
	@FindBy(xpath = "//*[@resource-id='com.nobroker.app:id/localityAutoCompleteTxt']")
	public WebElement locality;
	
	@FindBy(xpath = "//*[@resource-id='com.nobroker.app:id/nearByRadio']")
	public WebElement checkBoxIncludeNearByProp;
	
	@FindBy(xpath = "//*[@resource-id='com.nobroker.app:id/bhktwo']")
	public WebElement select2BHK;
	
	@FindBy(xpath ="//*[@text='SEARCH']")
	public WebElement searchButton;
	
	@FindBy(xpath = "//*[@resource-id='com.nobroker.app:id/bhkthree']")
	public WebElement select3BHK;
	
	@FindBy(xpath = "//*[@resource-id='com.nobroker.app:id/title']")
	public List<WebElement> selectProperty;
	
	@FindBy(xpath ="//*[@text='Wrong Info']")
	public WebElement wrongInfo;
	
	@FindBy(xpath ="//*[@text='Report']")
	public WebElement ReportBtn;
	
	@FindBy(xpath ="//*[@class='android.widget.ImageButton']")
	public WebElement NavigationBar;
	
	@FindBy(xpath = "//*[@resource-id='com.nobroker.app:id/sp_bhk_type']")
	public WebElement selectBHK;
	
	@FindBy(xpath ="//*[@text='4+ BHK']")
	public WebElement select4BHK;
	
	@FindBy(xpath ="//*[@text='Save Changes']")
	public WebElement saveChangesBtn;
	
	@FindBy(xpath ="//*[@text='Add a note']")
	public WebElement addNote;

	@FindBy(xpath ="//*[@text='Thank you for the feedback']")
	public WebElement feedBack;
	
	public void clickContinueBtn() throws InterruptedException
	{
		Thread.sleep(5000);

		wait = new WebDriverWait(driver, 100);
	    wait.until(ExpectedConditions.visibilityOf(continueBtn));
		continueBtn.click();
	}
	public void handleAppPermissions() throws InterruptedException
	{
	    wait = new WebDriverWait(driver, 100);
	    wait.until(ExpectedConditions.visibilityOf(allowBtn));
		allowBtn.click();
		allowBtn.click();
		allowBtn.click();
	}
	public void login(DataTable logins) throws InterruptedException, AWTException
	{
		List<List<String>> login=logins.raw();
		wait = new WebDriverWait(driver, 100);
	    wait.until(ExpectedConditions.visibilityOf(NavigationBar));
		NavigationBar.click();
		wait.until(ExpectedConditions.visibilityOf(loginSignupBtn));
		loginSignupBtn.click();
		wait.until(ExpectedConditions.visibilityOf(mobileNum));
		mobileNum.sendKeys(login.get(1).get(0));
		Thread.sleep(3000);
		wait.until(ExpectedConditions.visibilityOf(loginContinueBtn));
		loginContinueBtn.click();
		wait.until(ExpectedConditions.visibilityOf(passwdOption));
		passwdOption.click();
		wait.until(ExpectedConditions.visibilityOf(passwd));
		passwd.sendKeys(login.get(1).get(1));
		Thread.sleep(3000);
		wait.until(ExpectedConditions.visibilityOf(loginContinueBtn));	
		loginContinueBtn.click();
		Thread.sleep(3000);
	}
	public void buyAndSearch() throws InterruptedException
	{
		wait = new WebDriverWait(driver, 100);
	   wait.until(ExpectedConditions.visibilityOf(buyBtn));
		buyBtn.click();
		wait.until(ExpectedConditions.visibilityOf(clickSearch));
		clickSearch.click();
	}
	public void selectLocality() throws InterruptedException, AWTException
	{
		Robot r = new Robot();
		wait = new WebDriverWait(driver, 100);
	    wait.until(ExpectedConditions.visibilityOf(locality));
	    Thread.sleep(5000);

		 locality.sendKeys("HSR"); 

		 Thread.sleep(5000);
		 r.keyPress(KeyEvent.VK_TAB);
		 Thread.sleep(3000);
		  r.keyRelease(KeyEvent.VK_TAB);
		    Thread.sleep(5000);

		locality.sendKeys("Marat");
		Thread.sleep(5000);
		r.keyPress(KeyEvent.VK_TAB);   
		Thread.sleep(3000);
		r.keyRelease(KeyEvent.VK_TAB);

		
		 
		
	}
	public void checkboxHandle() throws InterruptedException
	{
		wait = new WebDriverWait(driver, 100);
	    wait.until(ExpectedConditions.visibilityOf(checkBoxIncludeNearByProp));
		if (!checkBoxIncludeNearByProp.isSelected())
	    {                    
	        System.out.println("checkbox already selected");
	    }else
	    {
	    	checkBoxIncludeNearByProp.click();
	    }
	}
	public void selectBedrooms() throws InterruptedException
	{
		wait = new WebDriverWait(driver, 100);
	    wait.until(ExpectedConditions.visibilityOf(select2BHK));
		select2BHK.click();
		wait.until(ExpectedConditions.visibilityOf(select3BHK));
		select3BHK.click();
		wait.until(ExpectedConditions.visibilityOf(searchButton));
		searchButton.click();
	}
	public void selectPropertyList() throws InterruptedException
	{
		scrollDown();

		wait = new WebDriverWait(driver, 100);
	    wait.until(ExpectedConditions.visibilityOfAllElements(selectProperty));
		System.out.println("Total Property:" + selectProperty.size());
		selectProperty.get(1).click();
	}
	public void selectWrongInfo() throws InterruptedException
	{
		wait = new WebDriverWait(driver, 100);
	   // wait.until(ExpectedConditions.visibilityOf(wrongInfo));
		Thread.sleep(3000);
		driver.findElement(MobileBy.AndroidUIAutomator("new UiScrollable(new UiSelector()).scrollIntoView(text(wrongInfo))"));
		wrongInfo.click();
	}
	public void selectAllcheckbox() throws InterruptedException
	{
		Thread.sleep(3000);
		List<WebElement> chkbox = driver.findElements(By.className("android.widget.CheckBox"));
		Iterator<WebElement> itr = chkbox.iterator(); 
		 while (itr.hasNext() ){ 
		   if(!itr.next().isSelected())
			Thread.sleep(2000);
		   itr.next().click();
		 }
		 wait = new WebDriverWait(driver, 100);
		 wait.until(ExpectedConditions.visibilityOf(ReportBtn));
		 ReportBtn.click();
	}
	public void change3bhkTo4bhk() throws InterruptedException
	{
		wait = new WebDriverWait(driver, 100);
		wait.until(ExpectedConditions.visibilityOf(selectBHK));
		selectBHK.click();
		wait.until(ExpectedConditions.visibilityOf(select4BHK));
		select4BHK.click();
		Thread.sleep(3000);
		scrollDown();
		wait.until(ExpectedConditions.visibilityOf(addNote));
		addNote.sendKeys("Test Note");
		wait.until(ExpectedConditions.visibilityOf(saveChangesBtn));
		saveChangesBtn.click();
	}
	public void verifySuccessMsg() throws InterruptedException
	{
		wait = new WebDriverWait(driver, 100);
		wait.until(ExpectedConditions.visibilityOf(feedBack));
		if(feedBack.isDisplayed())
		{
			System.out.println(feedBack.getText());
		}
	}
	public void scrollDown() {
		int pressX = driver.manage().window().getSize().width / 2;
		int bottomY = driver.manage().window().getSize().height * 4 / 7;
		int topY = driver.manage().window().getSize().height / 8;
		scroll(pressX, bottomY, pressX, topY);
	}
	
	private void scroll(int fromX, int fromY, int toX, int toY) {
		TouchAction touchAction = new TouchAction((MobileDriver) driver);
		touchAction.longPress(PointOption.point(fromX, fromY)).moveTo(PointOption.point(toX, toY)).release().perform();
	}
}
