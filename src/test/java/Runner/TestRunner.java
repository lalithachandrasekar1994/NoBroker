package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions ( features = "src/test/java/Feature",
glue={"StepDefinition"},
plugin   = {"pretty:STDOUT",
"html:Reports/cucumber-pretty","junit:target/surefire-reports/TEST-TestSuite.xml",
"com.cucumber.listener.ExtentCucumberFormatter:Report/NoBroker.html"},  
tags= {"@Propertyselection"},

monochrome=true ,dryRun = false)
public class TestRunner {
								
						
}

