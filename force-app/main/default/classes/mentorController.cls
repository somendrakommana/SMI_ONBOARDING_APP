public with sharing class mentorController {
   //public mentorController() {}
   @AuraEnabled(cacheable=true)
   public static List<sObject> searchMentor(String searchParam){
       String likeParam = '%' +searchParam+'%';
       String Query = '';  
       if(searchParam != null){
          Query  = 'Select Name, Mentor_Name__r.Name From Mentor__c Where Name Like :likeParam LIMIT 50 ';
       }
       
       List<SObject> sObjectList = Database.query(Query);
       return sObjectList;
}

}