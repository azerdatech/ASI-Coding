package ui_automation.step_definitions;

import io.cucumber.java.en.*;
import org.junit.Assert;
import ui_automation.pages.LoginPage;
import ui_automation.utilities.Driver;

public class LoginStep {
    LoginPage lp = new LoginPage();

    @Given("user lands on SwagLabs login page")
    public void user_lands_on_SwagLabs_login_page() {
        Driver.getInstance().getDriver().get("https://www.saucedemo.com/");

    }

    @When("User enters {string} username")
    public void user_enters_username(String userName) {
        lp.userNameInput.sendKeys(userName);
    }

    @When("User enters {string} pwd")
    public void user_enters_pwd(String pwd) {
        lp.passwordInput.sendKeys(pwd);

    }

    @When("user click login button")
    public void user_click_login_button() {
        lp.loginBtn.click();
    }

    @Then("if user entered correct credentials, user should be able to land on home page")
    public void if_user_entered_correct_credentials_user_should_be_able_to_land_on_home_page() {
        if (Driver.getInstance().getDriver().getCurrentUrl().equals("https://www.saucedemo.com/inventory.html")) {
            boolean actualDashboard = lp.title.isDisplayed();

            Assert.assertEquals("The error message verification failed", true, actualDashboard);
        }
    }

        @Then("if user entered wrong credentials, user should be able to see {string} message")
        public void if_user_entered_wrong_credentials_user_should_be_able_to_see_message (String errorMessage){
            while (Driver.getInstance().getDriver().getCurrentUrl().equals("https://www.saucedemo.com/")) {
                String actualMessage = lp.errorMessage.getText();

                Assert.assertEquals("The error message verification failed", errorMessage, actualMessage);
                break;
            }
            Driver.getInstance().getDriver().close();

        }



}
