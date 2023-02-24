package api_automation.stepDefinition;

import api_automation.stepDefinition.reqBld.CreateReqBuilder;
import api_automation.stepDefinition.utilities.Base;
import io.cucumber.java.en.*;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Assert;
import org.junit.Test;

import static io.restassured.RestAssured.given;

public class CreateUser extends Base {





        @When("user makes a POST call on reqres.in")
        public void user_makes_a_POST_call_on_reqres_in() {

        }
        @Then("user should receive {int} response status code")
        public void user_should_receive_response_status_code(Integer int1) {

        }




}
