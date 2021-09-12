@isTest
public class taskControllerTest {
    @isTest
static void testset(){
    Assign_task__c e = new Assign_task__c ();
insert e;
Test.startTest();
Assign_task__c testset = [Select Name, Assign_to__r.Name, 	Status__c, Onboarding_step__r.Name from Assign_task__c];
Test.stopTest();
System.assertEquals(testset, e);
}

@isTest
static Assign_task__c[] test(){
List<Assign_task__c> taskControllertest = taskController.getAssigendTask();
return taskControllertest;
}

@isTest
static Assign_task__c[] test1(){
List<Assign_task__c> taskControllertest1 = taskController.getAssigendTask();
return taskControllertest1;
}
}