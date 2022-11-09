import { LightningElement } from 'lwc';

export default class LifeSaver extends LightningElement {


    handler(event){
        console.log(event.target.id);
    }
}