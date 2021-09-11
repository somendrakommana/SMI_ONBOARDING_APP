import { NavigationMixin } from 'lightning/navigation';
import { LightningElement, track, wire, api } from 'lwc';
import searchEmployee from '@salesforce/apex/employeeController.searchEmployee';

export default class mentorHome extends NavigationMixin(LightningElement) {
    @track employeeRecords;
    @api recordId;
    @track errors;

    @wire(searchEmployee)
        wiredRecords({error, data}){
            console.log('Data', data);
            this.employeeRecords =data;
            this.errors = error;
        }

    handleEvent(event){
        const eventVal = event.detail;
        console.log('Search Param',eventVal);
        searchEmployee({
            searchParam : eventVal

        })

        .then(result => {

            console.log('Employee Record', result);
            this.employeeRecords = result;
            this.errors = undefined;
            
        })

        .catch(error =>{

            console.log('Error',error);
            this.errors = error;
            this.employeeRecords = undefined;
            
        })
   
    }

    handleEmployeeView(event) {
		
		const employeeId = event.detail;
        console.log(employeeId)
		
		this[NavigationMixin.Navigate]({
			type: 'standard__recordPage',
			attributes: {
				recordId: employeeId,
				objectApiName: 'User_Associated_with_Mentors__c',
				actionName: 'view',
			},
		});
	}
    @api objectApiStep = "Onboarding_step__c";
    @api objectApitask = "Assign_task__c";

    handleSuccess(event){
        const toast = new ShowToastEvent({
            'title' : 'Created',
            "message" : 'Record Created Successfully',
            "variant" : "success",
            
        });
        this.dispatchEvent(toast);
        eval("$A.get('e.force:refreshView').fire();");
        //const fields = event.detail.fields; 
        //fields.reset();
    }

}