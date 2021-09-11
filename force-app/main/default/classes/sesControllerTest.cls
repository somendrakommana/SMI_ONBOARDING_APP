@isTest
public class sesControllerTest {
@isTest
    static Onboarding_step__c[] getContactListTest()
    {
        List<Onboarding_Step__c> testing = sesController.getContactList();
        return testing;
    }
}