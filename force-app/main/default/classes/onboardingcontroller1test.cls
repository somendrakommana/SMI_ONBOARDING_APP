@isTest
public class onboardingcontroller1test {
@isTest
static void testset(){
User_Job_Role__c e = new User_Job_Role__c ();
insert e;
Test.startTest();
User_Job_Role__c testset = [Select Name, New_Joinee__c, Onboarding_end_date__c, Onboarding_Status__c FROM User_Job_Role__c];
Test.stopTest();
System.assertEquals(testset, e);
}

@isTest
static User_Job_Role__c[] test(){
List<User_Job_Role__c> onboardingController1test = onboardingController1.getList();
return onboardingController1test;
}

@isTest
static User_Job_Role__c[] test1(){
List<User_Job_Role__c> onboardingController1test1 = onboardingController1.getList();
return onboardingController1test1;
}
}