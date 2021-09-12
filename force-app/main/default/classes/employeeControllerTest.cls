@isTest
public class employeeControllerTest {
@isTest
static void testset(){
User_Job_Role__c e = new User_Job_Role__c ();
insert e;
Test.startTest();
User_Job_Role__c testset = [Select Name, New_Joinee__r.Name, Mentor__r.Name From User_Job_Role__c];
Test.stopTest();
System.assertEquals(testset, e);
}

@isTest
static User_Job_Role__c[] test(){
List<User_Job_Role__c> employeetest = employeeController.searchEmployee('b');
return employeetest;
}

@isTest
static User_Job_Role__c[] test1(){
List<User_Job_Role__c> employeetest1 = employeeController.searchEmployee('a');
return employeetest1;
}
}