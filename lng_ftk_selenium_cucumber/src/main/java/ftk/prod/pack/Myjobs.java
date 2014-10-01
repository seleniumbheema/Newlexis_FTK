package ftk.prod.pack;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import ftk.prod.util.webconnector;


public class Myjobs 
{
    /*	Given I go to "http://lngoxfappp078/JCSWeb/" on "Mozilla"
When click on "templates"
Then search for "Myjobs"
And click on "sourcetemplate"
Then job should be "success"*/
    	webconnector connector = new webconnector();
    	
    	@Given("^I go to \"([^\"]*)\" on \"([^\"]*)\"$")
    	public void I_go_to_url(String URL, String browser)
    	{
    		System.out.println("@Given- I go to "+ URL +" on "+ browser);
    		connector.openbrowser(browser);
    		connector.navigate(URL);
    	}
    	
    	@When("^click on \"([^\"]*)\"$")
    	public void search_tempalte(String mytemp){
    		System.out.println("@when Click on "+mytemp);
    	}
    	@Then("^search for \"([^\"]*)\"$")
    	public void click_job(String myjob)
    	{
    		System.out.println("@Then Click on jobs "+myjob);
    	}
    	@And("^click on \"([a-z]{1,})\" $")
    	public void click_template(String mytemp)
    	{
    		System.out.println("@And Click on jobs "+mytemp);
    	}
    	@Then("^job should be \"([^\"]*)\"$")
    	public void isElementpresent(String success)
    	{
    		System.out.println("@Then job is "+success);
    	}
    	
}
