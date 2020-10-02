package StepDefinition;

import org.openqa.selenium.WebDriver;

import PageObjects.BaseMobile;
import PageObjects.NoBrokerPageObjects;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class NoBrokerSteps extends BaseMobile {
	NoBrokerPageObjects noBrokerPageObjects;
	WebDriver driver;
	
	@Given("^Launch the NoBroker app$")
	public void launch_the_NoBroker_app() throws Throwable {
		driver=super.Mobilegetdriver();
	}

	@When("^Land on the Home Page$")
	public void land_on_the_Home_Page() throws Throwable {
		noBrokerPageObjects=new NoBrokerPageObjects(driver);
		noBrokerPageObjects.clickContinueBtn();
		noBrokerPageObjects.handleAppPermissions();
		
	}

	@Then("^login the app$")
	public void login_the_app(DataTable logins) throws Throwable {
		noBrokerPageObjects.login(logins);    
	}

	@When("^Select ‘Buy’ property related option and Click on the ‘Search’ related box$")
	public void select_Buy_property_related_option_and_Click_on_the_Search_related_box() throws Throwable {
		noBrokerPageObjects=new NoBrokerPageObjects(driver);
		noBrokerPageObjects.buyAndSearch();    
	}

	@Then("^select “Bangalore” city and select two localities\\(Marathahalli and HSR Layout\\)$")
	public void select_Bangalore_city_and_select_two_localities_Marathahalli_and_HSR_Layout() throws Throwable {
		noBrokerPageObjects.selectLocality();
	}

	@Then("^Click on the checkbox “Include nearby Properties”$")
	public void click_on_the_checkbox_Include_nearby_Properties() throws Throwable {
		noBrokerPageObjects.checkboxHandle();	    
	}

	@Then("^Select (\\d+) Bhk and (\\d+) Bhk from the number of bedrooms section$")
	public void select_Bhk_and_Bhk_from_the_number_of_bedrooms_section(int arg1, int arg2) throws Throwable {
		noBrokerPageObjects.selectBedrooms();	    
	}

	@When("^Scroll down on the Property listing page and click on the (\\d+)th property$")
	public void scroll_down_on_the_Property_listing_page_and_click_on_the_th_property(int arg1) throws Throwable {
		noBrokerPageObjects=new NoBrokerPageObjects(driver);
		noBrokerPageObjects.selectPropertyList();
	    
	}

	@Then("^Scroll down to till end and click on “Wrong Info”$")
	public void scroll_down_to_till_end_and_click_on_Wrong_Info() throws Throwable {
		noBrokerPageObjects.selectWrongInfo();
	    
	}

	@Then("^Select all check-boxes in “What’s wrong” section and click on Report$")
	public void select_all_check_boxes_in_What_s_wrong_section_and_click_on_Report() throws Throwable {
		noBrokerPageObjects.selectAllcheckbox();	    
	}

	@When("^Change (\\d+)BHK to (\\d+)\\+BHK from ‘whats is the correct configuration’ section$")
	public void change_BHK_to_BHK_from_whats_is_the_correct_configuration_section(int arg1, int arg2) throws Throwable {
		noBrokerPageObjects=new NoBrokerPageObjects(driver);
		noBrokerPageObjects.change3bhkTo4bhk();	    
	}

	@Then("^click on the “save changes” button and verify the successful message$")
	public void click_on_the_save_changes_button_and_verify_the_successful_message() throws Throwable {
		noBrokerPageObjects.verifySuccessMsg();
	    
	}

}
