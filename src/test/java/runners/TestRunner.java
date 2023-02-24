package runners;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "./src/test/resources/features",
                glue = {"api_automation/stepDefinition",
                        "ui_automation/step_definitions"},
        dryRun =true,
        monochrome =true,
        tags = {"@run"},
        plugin = {"pretty", "html:target/cucumber-html-report", "json:target/cucumber.json"}
)
public class TestRunner {
}
