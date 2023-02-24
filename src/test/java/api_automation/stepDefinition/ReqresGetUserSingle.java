package api_automation.stepDefinition;

import com.jayway.jsonpath.JsonPath;
import io.cucumber.java.en.*;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Assert;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;

public class ReqresGetUserSingle {

    Response response;


    @Given("User gets single from reqres API")
    public void user_gets_single_from_reqres_API() {
    }

    @Then("Validate if status code is {int}")
    public void validate_if_status_code_is(int statusCode) {

    }











}
