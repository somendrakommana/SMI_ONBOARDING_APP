@isTest
public class sesControllerTest {
@isTest
    static void testset(){
    Onboarding_step__c e = new Onboarding_step__c ();
insert e;
Test.startTest();
Onboarding_step__c testset = [SELECT Id, Name From Onboarding_step__c LIMIT 10];
Test.stopTest();
System.assertEquals(testset, e);
}

@isTest
static Onboarding_step__c[] test(){
List<Onboarding_step__c> sesControllertest = sesController.getContactList();
return sesControllertest;
}

@isTest
static Onboarding_step__c[] test1(){
List<Onboarding_step__c> sesControllertest1 = sesController.getContactList();
return sesControllertest1;
}
}