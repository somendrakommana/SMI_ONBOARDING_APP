public with sharing class employeeController {
    public employeeController() {



    }

   
    @AuraEnabled(cacheable=true)
    public static List<sObject> searchEmployee(String searchParam){
        String likeParam = '%' +searchParam+'%';
        String Query = '';
       
        if(searchParam != null){
           Query  = 'Select Name, New_Joinee__r.Name, Mentor__r.Name From User_Job_Role__c Where Name Like :likeParam LIMIT 50 ';
        }else{
           Query  = 'Select Name, New_Joinee__r.Name, Mentor__r.Name From User_Job_Role__c LIMIT 50 '; 
        }
        
        List<SObject> sObjectList = Database.query(Query);
        return sObjectList;
    }

}