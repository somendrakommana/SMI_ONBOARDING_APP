public with sharing class onboardingController1 {
    public onboardingController1() {

    }
    @AuraEnabled(cacheable=true)
    public static List<User_Job_Role__c> getList(){
        
        List<User_Job_Role__c> extenddate = [Select Name, New_Joinee__r.Name, Onboarding_end_date__c,Onboarding_start_date__c From User_Job_Role__c ];
        
        return extenddate;
    }
}

