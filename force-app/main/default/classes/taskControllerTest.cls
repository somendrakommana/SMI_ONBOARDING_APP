@isTest
public class taskControllerTest {
    @isTest
    static Assign_task__c[] test1(){
        List<Assign_task__c> assignedTest = taskController.getAssigendTask();
        return assignedTest;
    }

}