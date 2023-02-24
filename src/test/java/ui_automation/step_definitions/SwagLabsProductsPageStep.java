package ui_automation.step_definitions;

import io.cucumber.java.en.*;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Assert;
import ui_automation.pages.HomePage;
import ui_automation.pages.LoginPage;
import ui_automation.utilities.Driver;

public class SwagLabsProductsPageStep {
    LoginPage lp= new LoginPage();
    HomePage hp=new HomePage();
    Logger olog= LogManager.getLogger(SwagLabsProductsPageStep.class);

    @Given("user logged in to SwabLabs home page")
    public void user_logged_in_to_SwabLabs_home_page() {

    }

    @Then("user clicks on SwabLab product's image")
    public void user_clicks_on_SwabLab_product_s_image() {

    }

    @Then("add the item to shopping cart by clicking on Add To Cart button")
    public void add_the_item_to_shopping_cart_by_clicking_on_Add_To_Cart_button() {

    }

    @Then("number of items in the cart should appear next to the cart icon")
    public void numberOfItemsInTheCartShouldAppearNextToTheCartIcon() {



    }


}
