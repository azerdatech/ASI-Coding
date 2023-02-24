$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/apiFeatures/CreateUser.feature");
formatter.feature({
  "name": "Create User on reqres.in",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "name": "Create User",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@run"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user makes a POST call on reqres.in",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should receive 201 response status code",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateUser.user_should_receive_response_status_code(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/uiFeatures/SwagLabsLogin.feature");
formatter.feature({
  "name": "SwagLabsLogin with valid and invalid credentials",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@run"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Positive and Negative Login scenario execution",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters \"\u003cusername\u003e\" username",
  "keyword": "When "
});
formatter.step({
  "name": "User enters \"\u003cpwd\u003e\" pwd",
  "keyword": "And "
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.step({
  "name": "if user entered correct credentials, user should be able to land on home page",
  "keyword": "Then "
});
formatter.step({
  "name": "if user entered wrong credentials, user should be able to see \"\u003cmessage\u003e\" message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "pwd",
        "message"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        ""
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "Epic sadface: Sorry, this user has been locked out."
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce",
        ""
      ]
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce",
        ""
      ]
    },
    {
      "cells": [
        "performanceglitchuser",
        "secret_sauce",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauc",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    },
    {
      "cells": [
        "",
        "secret_sauce",
        "Epic sadface: Username is required"
      ]
    },
    {
      "cells": [
        "standard_user",
        "",
        "Epic sadface: Password is required"
      ]
    },
    {
      "cells": [
        "",
        "",
        "Epic sadface: Username is required"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user lands on SwagLabs login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.user_lands_on_SwagLabs_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Positive and Negative Login scenario execution",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@run"
    }
  ]
});
formatter.step({
  "name": "User enters \"standard_user\" username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.user_enters_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"secret_sauce\" pwd",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_enters_pwd(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "if user entered correct credentials, user should be able to land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.if_user_entered_correct_credentials_user_should_be_able_to_land_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "if user entered wrong credentials, user should be able to see \"\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.if_user_entered_wrong_credentials_user_should_be_able_to_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user lands on SwagLabs login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.user_lands_on_SwagLabs_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Positive and Negative Login scenario execution",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@run"
    }
  ]
});
formatter.step({
  "name": "User enters \"locked_out_user\" username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.user_enters_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"secret_sauce\" pwd",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_enters_pwd(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "if user entered correct credentials, user should be able to land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.if_user_entered_correct_credentials_user_should_be_able_to_land_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "if user entered wrong credentials, user should be able to see \"Epic sadface: Sorry, this user has been locked out.\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.if_user_entered_wrong_credentials_user_should_be_able_to_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user lands on SwagLabs login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.user_lands_on_SwagLabs_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Positive and Negative Login scenario execution",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@run"
    }
  ]
});
formatter.step({
  "name": "User enters \"problem_user\" username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.user_enters_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"secret_sauce\" pwd",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_enters_pwd(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "if user entered correct credentials, user should be able to land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.if_user_entered_correct_credentials_user_should_be_able_to_land_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "if user entered wrong credentials, user should be able to see \"\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.if_user_entered_wrong_credentials_user_should_be_able_to_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user lands on SwagLabs login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.user_lands_on_SwagLabs_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Positive and Negative Login scenario execution",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@run"
    }
  ]
});
formatter.step({
  "name": "User enters \"performance_glitch_user\" username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.user_enters_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"secret_sauce\" pwd",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_enters_pwd(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "if user entered correct credentials, user should be able to land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.if_user_entered_correct_credentials_user_should_be_able_to_land_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "if user entered wrong credentials, user should be able to see \"\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.if_user_entered_wrong_credentials_user_should_be_able_to_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user lands on SwagLabs login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.user_lands_on_SwagLabs_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Positive and Negative Login scenario execution",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@run"
    }
  ]
});
formatter.step({
  "name": "User enters \"performanceglitchuser\" username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.user_enters_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"secret_sauce\" pwd",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_enters_pwd(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "if user entered correct credentials, user should be able to land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.if_user_entered_correct_credentials_user_should_be_able_to_land_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "if user entered wrong credentials, user should be able to see \"Epic sadface: Username and password do not match any user in this service\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.if_user_entered_wrong_credentials_user_should_be_able_to_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user lands on SwagLabs login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.user_lands_on_SwagLabs_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Positive and Negative Login scenario execution",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@run"
    }
  ]
});
formatter.step({
  "name": "User enters \"performance_glitch_user\" username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.user_enters_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"secret_sauc\" pwd",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_enters_pwd(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "if user entered correct credentials, user should be able to land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.if_user_entered_correct_credentials_user_should_be_able_to_land_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "if user entered wrong credentials, user should be able to see \"Epic sadface: Username and password do not match any user in this service\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.if_user_entered_wrong_credentials_user_should_be_able_to_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user lands on SwagLabs login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.user_lands_on_SwagLabs_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Positive and Negative Login scenario execution",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@run"
    }
  ]
});
formatter.step({
  "name": "User enters \"\" username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.user_enters_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"secret_sauce\" pwd",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_enters_pwd(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "if user entered correct credentials, user should be able to land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.if_user_entered_correct_credentials_user_should_be_able_to_land_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "if user entered wrong credentials, user should be able to see \"Epic sadface: Username is required\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.if_user_entered_wrong_credentials_user_should_be_able_to_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user lands on SwagLabs login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.user_lands_on_SwagLabs_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Positive and Negative Login scenario execution",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@run"
    }
  ]
});
formatter.step({
  "name": "User enters \"standard_user\" username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.user_enters_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"\" pwd",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_enters_pwd(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "if user entered correct credentials, user should be able to land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.if_user_entered_correct_credentials_user_should_be_able_to_land_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "if user entered wrong credentials, user should be able to see \"Epic sadface: Password is required\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.if_user_entered_wrong_credentials_user_should_be_able_to_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user lands on SwagLabs login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.user_lands_on_SwagLabs_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Positive and Negative Login scenario execution",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@run"
    }
  ]
});
formatter.step({
  "name": "User enters \"\" username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.user_enters_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"\" pwd",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_enters_pwd(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "if user entered correct credentials, user should be able to land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.if_user_entered_correct_credentials_user_should_be_able_to_land_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "if user entered wrong credentials, user should be able to see \"Epic sadface: Username is required\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.if_user_entered_wrong_credentials_user_should_be_able_to_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/uiFeatures/homePage.feature");
formatter.feature({
  "name": "Home Page elements validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@run"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user logged in to SwabLabs home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SwagLabsProductsPageStep.user_logged_in_to_SwabLabs_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validation items on SwabLabs homePage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@run"
    }
  ]
});
formatter.step({
  "name": "user clicks on SwabLab product\u0027s image",
  "keyword": "Then "
});
formatter.match({
  "location": "SwagLabsProductsPageStep.user_clicks_on_SwabLab_product_s_image()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "add the item to shopping cart by clicking on Add To Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "SwagLabsProductsPageStep.add_the_item_to_shopping_cart_by_clicking_on_Add_To_Cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "number of items in the cart should appear next to the cart icon",
  "keyword": "Then "
});
formatter.match({
  "location": "SwagLabsProductsPageStep.numberOfItemsInTheCartShouldAppearNextToTheCartIcon()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/uiFeatures/priceListOfItems.feature");
formatter.feature({
  "name": "PriceList of all items",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "name": "Retrieving price list of items",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@run"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user logged in to SwabLabs home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SwagLabsProductsPageStep.user_logged_in_to_SwabLabs_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select (price Low to High) in filter section",
  "keyword": "Then "
});
formatter.match({
  "location": "PriceListOfItemsStep.clicks_on_price_Low_to_High_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verifies prices for all items",
  "keyword": "And "
});
formatter.match({
  "location": "PriceListOfItemsStep.verifies_prices_for_all_items()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/uiFeatures/removeFromCart.feature");
formatter.feature({
  "name": "Remove item from Cart validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "name": "User removes an item from the cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@run"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user logged in to SwabLabs home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SwagLabsProductsPageStep.user_logged_in_to_SwabLabs_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on SwabLab product\u0027s image",
  "keyword": "Then "
});
formatter.match({
  "location": "SwagLabsProductsPageStep.user_clicks_on_SwabLab_product_s_image()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "add the item to shopping cart by clicking on Add To Cart button",
  "keyword": "And "
});
formatter.match({
  "location": "SwagLabsProductsPageStep.add_the_item_to_shopping_cart_by_clicking_on_Add_To_Cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user removes an item by clicking on remove button",
  "keyword": "And "
});
formatter.match({
  "location": "RemoveFromCartStep.userRemovesAnItemByClickingOnRemoveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});