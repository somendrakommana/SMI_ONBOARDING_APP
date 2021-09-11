import { LightningElement, wire } from 'lwc';
import getList from '@salesforce/apex/onboardingController1.getList'
import {updateRecord} from 'lightning/uiRecordApi'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import {refreshApex} from '@salesforce/apex'
import getOpportunities from "@salesforce/apex/onboardingController1.getList";
import { NavigationMixin } from "lightning/navigation";
const OPPORTUNITY_COLS = [
    {
        label: "Name",
        type: "button",
        typeAttributes: { label: { fieldName: "Name" }, name: "gotoOpportunity", variant: "base" }
    },
    
    {
        label: "Edit",
        type: "button",
        typeAttributes: {
            label: "Edit",
            name: "editOpportunity",
            variant: "brand"
        }
    }
];

export default class DatatableNavigationDemo extends NavigationMixin(LightningElement) {
    opportunityCols = OPPORTUNITY_COLS;

    @wire(getOpportunities, {})
    opportunities;

    handleRowAction(event) {
        if (event.detail.action.name === "gotoOpportunity") {
            this[NavigationMixin.GenerateUrl]({
                type: "standard__recordPage",
                attributes: {
                    recordId: event.detail.row.Id,
                    fieldName: "Onboarding_end_date__c",
                    actionName: "view"
                }
            }).then((url) => {
                window.open(url, "_blank");
            });
        }
        if (event.detail.action.name === "editOpportunity") {
            this[NavigationMixin.Navigate]({
                type: "standard__recordPage",
                
                attributes: {
                    recordId: event.detail.row.Id,
                    fieldName: "Onboarding_end_date__c",
                    actionName: "edit"
                }
            });
            
        }
    }
}