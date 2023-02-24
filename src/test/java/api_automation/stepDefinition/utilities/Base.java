package api_automation.stepDefinition.utilities;

import api_automation.stepDefinition.reqBld.CreateReqBuilder;
import api_automation.stepDefinition.reqBld.GetReqBuilder;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

public class Base {

    public static Properties property;

    static{
        try {

            property=new Properties();
            String path="src/test/resources/apiConfig.properties";
            File file=new File(path);
            FileInputStream fis=new FileInputStream(file);
            property.load(fis);

        }catch(Exception e) {
            e.printStackTrace();
        }

    }
    public String GetUserPayload(int id, String email,String fName, String lName ) {
        GetReqBuilder reqBuilder=new GetReqBuilder();
        reqBuilder.setId(id);
        reqBuilder.setEmail(email);
        reqBuilder.setFirst_name(fName);
        reqBuilder.setLast_name(lName);


        return convertObjectToString(reqBuilder);
    }

    public String createUserPayload(String name, String job){
        CreateReqBuilder reqBuilder= new CreateReqBuilder();
        reqBuilder.setJob(job);
        reqBuilder.setName(name);

        
        return convertObjectToString(reqBuilder);
    }
    public String convertObjectToString(Object object) {
        String strJson=null;
        try {
            ObjectMapper objMapper=new ObjectMapper();
            strJson=objMapper.writerWithDefaultPrettyPrinter().writeValueAsString(object);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return strJson;
    }

}

