package api_automation.stepDefinition;

import com.jayway.jsonpath.JsonPath;
import io.cucumber.java.Before;
import io.cucumber.java.en.*;
import io.restassured.RestAssured;
import io.restassured.response.Response;

import java.util.ArrayList;
import java.util.List;

import static io.restassured.RestAssured.given;

public class reqresGetList {

    @Given("User gets list from reqres API")
    public void user_gets_list_from_reqres_API() {


    }

    public String submitGetRequest(int pageNumber){
String url="https://reqres.in/api/users";
        Response response =given()

                .param("page",pageNumber)
                .when().get(url);
        return response.asPrettyString();
    }
}
