package ui_automation.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import ui_automation.utilities.Driver;



public class LoginPage {
    WebDriver driver;

    public LoginPage() {
        driver = Driver.getInstance().getDriver();
        PageFactory.initElements(driver, this);
    }

    @FindBy(id = "user-name")
    public WebElement userNameInput;

    @FindBy(id = "password")
    public WebElement passwordInput;

    @FindBy(id = "login-button")
    public WebElement loginBtn;

    @FindBy(xpath = "//*[contains(text(),'sadface')]")
    public WebElement errorMessage;

    @FindBy(xpath= "//*[text()='Products']")
    public WebElement title;
}