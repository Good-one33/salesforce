import { LightningElement,wire, track } from 'lwc';
import{refreshApex}  from '@salesforce/apex';
import contactList from '@salesforce/apex/MyContactController.contactList';
import createContacts from '@salesforce/apex/MyContactController.createContacts';
import deleteAllContacts from '@salesforce/apex/MyContactController.deleteAllContacts';
import countContacts from '@salesforce/apex/MyContactController.countContacts';


export default class DisplayContacts extends LightningElement {
@track contList;
@track contNbr;
@track columns = [
    { label: 'First Name', fieldName: 'FirstName', type: 'text' },
    { label: 'Lasst Name', fieldName: 'LastName', type: 'text' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
   ];


@wire(countContacts) contNbr;   
@wire(contactList) contList;

createContactsHandler(){
    createContacts({input : this.template.querySelector('.inputOne').value  })  
    //this.template.querySelector('#inputOne-13').value   tha's weried  id is changing !v
    .then(()=>{
        refreshApex(this.contList);
        refreshApex(this.contNbr);
    })
     .catch(error =>{
        console.log('error occured');
    });
    console.log('create clicked'); 
 }

deleteContactsHandler(){
    deleteAllContacts()
    .then(()=>{
        refreshApex(this.contList);
        refreshApex(this.contNbr);
    })
     .catch(error =>{
        console.log('error occured');
    });
}

handler(event){
    console.log(event.target.className);
    console.log( this.template.querySelector('.inputOne').value);
}


}