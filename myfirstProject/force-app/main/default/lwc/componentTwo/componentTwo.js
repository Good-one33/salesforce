import { LightningElement, track } from 'lwc';

export default class ApexWireMethodToProperty extends LightningElement {
    no1;
    no2;
    result;

    handleChange(event){
        const currentInputName=event.target.name;
        const currentVal=event.target.value;

        if(currentInputName==='number1'){
            this.no1=currentVal;
        }
        else{
            this.no2=currentVal;
        }  
    }

    doAdd(){
        this.result = parseInt(this.no1)+parseInt(this.no2);
    }
    doSub(){
        this.result = parseInt(this.no1)-parseInt(this.no2);
    }
    doMult(){
        this.result = parseInt(this.no1)*parseInt(this.no2);
    }
    doDiv(){
        this.result = parseInt(this.no1)/parseInt(this.no2);
    }
}