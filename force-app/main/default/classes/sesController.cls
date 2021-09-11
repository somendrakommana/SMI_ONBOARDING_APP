public with sharing class sesController {

    @AuraEnabled(cacheable=true)
    public static List<Onboarding_step__c> getContactList() {
        return [ SELECT Id, Name From Onboarding_step__c LIMIT 10];
    }
    }