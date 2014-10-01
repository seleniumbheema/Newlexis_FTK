package ftk.prod.util;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.internal.ProfilesIni;

public class webconnector {
	
	//Intialization
	Properties OR = null;
	Properties CONFIG = null;
	WebDriver driver = null;
	

	public webconnector() {
			if(OR==null){
				try {
					OR = new Properties();
					FileInputStream fs = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\ftk\\prod\\config\\OR.properties");
					OR.load(fs);
					System.out.println(OR.getProperty("testenv"));
					CONFIG = new Properties();
					fs = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\ftk\\prod\\config\\Prod_config.properties");
					CONFIG.load(fs);
					System.out.println(OR.getProperty("jobqueue"));
					System.out.println(OR.getProperty("template"));
					System.out.println(CONFIG.getProperty("FTKURL"));
				} catch (Exception e) {
					System.out.println("error in intializing");
				}
				
			}
		
		
	}
	public void openbrowser(String browsertype){
		if(browsertype.equals("Mozilla"))
		{
			ProfilesIni allprof = new ProfilesIni();
			FirefoxProfile myprof = allprof.getProfile("bheema");
		 driver = new FirefoxDriver(myprof);
		}
		else if(browsertype.equals("chrome"))
		{
			System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"//chromedriver/chromedriver.exe");
		 driver = new ChromeDriver();
		}
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	public void navigate(String broURL)
		{
			driver.get(CONFIG.getProperty(broURL));
		}

}
