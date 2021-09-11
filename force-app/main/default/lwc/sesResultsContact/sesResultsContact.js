import { NavigationMixin, CurrentPageReference } from 'lightning/navigation';
import { LightningElement, wire } from 'lwc';

import getContactList from '@salesforce/apex/sesController.getContactList';

export default class SesResultsContact extends NavigationMixin(LightningElement) {
@wire(CurrentPageReference) pageRef;
@wire(getContactList) contacts;

viewContact(event) {
    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            recordId: event.target.value,
            objectApiName: 'Onboarding_Step__c',
            actionName: 'view'
        }
    });
}

viewContact2(event) {
    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            recordId: event.target.dataset.id,
            objectApiName: 'Onboarding_Step__c',
            actionName: 'view'
        }
    });
}
}