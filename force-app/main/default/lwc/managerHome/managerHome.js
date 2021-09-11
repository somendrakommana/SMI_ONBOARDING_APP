import { NavigationMixin } from 'lightning/navigation';
import { LightningElement, track, wire, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import searchMentor from '@salesforce/apex/mentorController.searchMentor';

export default class ManagerHome extends NavigationMixin(LightningElement) {

    @track mentorRecords;
    @track errors;
    @track isModalOpen = false;
    @api objectApiName = "User_Job_Role__c";
    @api objectApiRef = "Onboarding_step__c";
    @api objectApi = "Assign_task__c";
    
    

    @wire(searchMentor)
        wiredRecords({error, data}){
            console.log('Data', data);
            this.mentorRecords =data;
            this.errors = error;
        }

    handleEvent(event)
    {
        const eventVal = event.detail;
        console.log('Search Param',eventVal);
        searchMentor({
        searchParam : eventVal
    
        })
    
        .then(result => {
    
            console.log('Mentor Record', result);
            this.mentorRecords = result;
            this.errors = undefined;
                
        })
    
        .catch(error =>{
    
            console.log('Error',error);
            this.errors = error;
            this.mentorRecords = undefined;
                
            })
    }


    handleMentorView() {
		this[NavigationMixin.Navigate]({
			type: 'standard__objectPage',
			attributes: {
				objectApiName: 'User_Job_Role__c',
				actionName: 'list',
			}
		});
	}

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
    @track isModalOpen = false;
    openModal() {
        // to open modal set isModalOpen tarck value as true
        this.isModalOpen = true;
    }
    closeModal() {
        // to close modal set isModalOpen tarck value as false
        this.isModalOpen = false;
    }
    submitDetails() {
        // to close modal set isModalOpen tarck value as false
        //Add your code to call apex method or do some processing
        this.isModalOpen = false;
    }
}