@isTest
public with sharing class departmentControllertest {
    public departmentControllertest() {
       
        }
        @isTest
        static OnBoarding_Step__c[] test1(){
            List<OnBoarding_Step__c> onboardingtest = departmentController.getDepartmentRecord();
            return onboardingtest;
    }
}