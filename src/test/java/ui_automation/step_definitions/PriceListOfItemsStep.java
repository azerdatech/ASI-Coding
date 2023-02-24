package ui_automation.step_definitions;

import io.cucumber.java.en.*;
import org.openqa.selenium.interactions.Actions;

import org.openqa.selenium.support.ui.Select;
import ui_automation.pages.HomePage;
import ui_automation.utilities.Driver;
import ui_automation.utilities.Helper;

public class PriceListOfItemsStep extends Helper {
    HomePage hp= new HomePage();


    @Then("select \\(price Low to High) in filter section")
    public void clicks_on_price_Low_to_High_section() {

    }

    @And("verifies prices for all items")
    public void verifies_prices_for_all_items() {


    }

}
