package ftk.cucumber.bdd.jobs.util;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


public class ftk_webconnector {

	
	//Initailizing properties file
	
	Properties OR = null;
	Properties CONFIG = null; 
	WebDriver driver = null;
	
	
	/*Generic Functiosn*/
	
	public ftk_webconnector()
	{
		if(OR==null)
		{
			
			try
			{
				OR = new Properties();
				FileInputStream fs = new FileInputStream(System.getProperty("user.dir")+ "\\src\\main\\java\\ftk\\cucumber\\bdd\\jobs\\config\\OR.properties");
				OR.load(fs);
				
				CONFIG = new Properties();
				fs = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\ftk\\cucumber\\bdd\\jobs\\config\\"+OR.getProperty("env")+"_config.properties");
				CONFIG.load(fs);
				
				System.out.println(OR.getProperty("templates"));
				System.out.println(CONFIG.getProperty("LogingURL"));
				
			} 
			catch (Exception e) {
				System.out.println("error in intializing the properties file");
			
			}
		}
	}
	
	public void openBrowser(String browsertype)
	{
		if(browsertype.equals("Mozilla"))
		{
		driver = new FirefoxDriver();
		}
		else if (browsertype.equals("Chrome")) 
		{
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\src\\chromedriver\\chromedriver.exe");
			driver = new ChromeDriver();
		}
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
	}
	
	public void navigate(String URL)
	{
		driver.get(CONFIG.getProperty(URL));
	}
	public void click(String ObjectName)
	{
		driver.findElement(By.xpath(OR.getProperty(ObjectName))).click();
	}
	
	public void pass_name(String param_name, String text){
		driver.findElement(By.xpath(OR.getProperty(param_name))).sendKeys(text);
//		driver.findElement(By.xpath(OR.getProperty(param_name))).sendKeys("description");
		
		
	}
//	public void pass_descp(String param_desc){
//		driver.findElement(By.xpath(OR.getProperty(param_desc))).sendKeys("description");
//	}
	
	public void Done(String done)
	{
		driver.findElement(By.xpath(OR.getProperty(done))).click();
	}

}
