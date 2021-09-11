import { LightningElement, api } from 'lwc';
import getOpportunities from "@salesforce/apex/onboardingController1.getList";
import { NavigationMixin } from "lightning/navigation";

export default class EmployeeT extends LightningElement {


    @api employeeRecord;

    handleRowAction(event) {
        this[NavigationMixin.Navigate]({
            type: "standard__recordPage",
            
            attributes: {
                recordId: event.detail.row.Id,
                actionName: "edit"
            }
        });
    }

        
    

    handleDetails(){
        
    }

    handleOpenRecordClick() {
        console.log(this.employeeRecord.Name)
        
        const selectEvent = new CustomEvent('employeeview', {
            detail: this.employeeRecord.Id
        });
        this.dispatchEvent(selectEvent);
    }



    
}