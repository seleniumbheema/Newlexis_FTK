package ftk.cucumber.bdd.jobs;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import ftk.cucumber.bdd.jobs.util.ftk_webconnector;

public class template {

	
	
	ftk_webconnector connect = new ftk_webconnector();
	
		@Given("^I go to \"([^\"]*)\" on \"([^\"]*)\"$")
		public void I_go_to_FTK(String URL, String browser)
		{
		System.out.println("I go to "+ URL +" on "+ browser);
		connect.openBrowser(browser);
		connect.navigate(URL);
		}
		
		@And("^click on \"([^\"]*)$")
		public void click_on(String objct)
		{
			System.out.println("click on "+objct);
			connect.click(objct);
		}
		@And("^pass parameter in \"([^\"]*)\" as \"([^\"]*)\"$")
		
		public void pass_param(String param, String texting){
			System.out.println("pass parameter in "+param +" as "+texting);
			connect.pass_name(param, texting);
			/*connect.pass_descp(param);*/
		}
		@Then("^click on \"([^\"]*)\"$")
		public void click_on_done(String done){
			System.out.println("clikc on "+ done);
			connect.Done(done);
		}

}
