import { LightningElement, track } from 'lwc';
import { createMessageContext, releaseMessageContext,APPLICATION_SCOPE,subscribe, unsubscribe } from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";
import Namefield from '@salesforce/schema/Assign_task__c.Name';
import asignedto from '@salesforce/schema/Assign_task__c.Assign_to__c';
import onboarding from '@salesforce/schema/Assign_task__c.Onboarding_step__c';
import enddate from '@salesforce/schema/Assign_task__c.Due_date__c';
import Status from '@salesforce/schema/Assign_task__c.Status__c';


export default class Subscriber_lwc extends LightningElement {
    context = createMessageContext();
    subscription = null;
    @track receivedMessage = '';
    @track taskId;
    @track objectApiName='Assign_task__c';
    fields = [Namefield, asignedto, onboarding, enddate,Status];
    connectedCallback(){
        this.subscribeMC();
    }
    subscribeMC() {
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(this.context, SAMPLEMC, (message) => {
            this.handleMessage(message);
        },{scope: APPLICATION_SCOPE});
     }
     handleMessage(message) {       
        console.log('message:::'+JSON.stringify(message));
        this.taskId = message.recordId;
        this.receivedMessage = message ? message.recordData.value : 'no message payload';
    }
}