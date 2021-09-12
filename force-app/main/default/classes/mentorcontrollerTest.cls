@isTest
public class mentorcontrollerTest {
@isTest
static void testset(){
    Mentor__c e = new Mentor__c ();
insert e;
Test.startTest();
Mentor__c testset = [Select Name, Mentor_Name__r.Name From Mentor__c];
Test.stopTest();
System.assertEquals(testset, e);
}

@isTest
static Mentor__c[] test(){
List<Mentor__c> mentortest = mentorController.searchMentor('b');
return mentortest;
}

@isTest
static Mentor__c[] test1(){
List<Mentor__c> mentortest1 = mentorController.searchMentor('a');
return mentortest1;
}
}