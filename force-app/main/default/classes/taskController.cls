public with sharing class taskController {


    @AuraEnabled(cacheable=true)
    public static List<Assign_task__c> getAssigendTask()
   {
        return new List<Assign_task__c>([Select Name, Assign_to__r.Name, 	Status__c, Onboarding_step__r.Name from Assign_task__c
        ]);
    }
}