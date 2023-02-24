package ui_automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import ui_automation.utilities.Driver;

import java.util.List;

public class HomePage {

    public HomePage(){
        PageFactory.initElements(Driver.getInstance().getDriver(),this);}

    @FindBy(xpath="//*[@class='inventory_list']/div//a/div")
    public List<WebElement> inventoryItems;

    @FindBy(xpath="//*[@id=\"page_wrapper\"]/footer/img")
    public WebElement footerLogo;

    @FindBy(xpath="//*[contains(text(),'Add to cart')]")
    public WebElement addToCartBtn;

    @FindBy(xpath="//*[@class='shopping_cart_badge']")
    public WebElement digitIcon;

    @FindBy(xpath="//*[contains(text(),'Remove')]")
    public WebElement removeBtn;

    @FindBy(xpath="//*[contains(text(), '$')]")
    public List<WebElement> priceList;

    @FindBy(xpath="//*[@class='product_sort_container']")
    public WebElement productContainer;

}
