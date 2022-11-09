public with sharing class MyContactController {

    @AuraEnabled
    public static void createContacts(Integer input){
        List<Contact> contList = new List<Contact>();
            for(Integer i = 1; i <= input; i++){
                contact c = new Contact(LastName= 'LN-'+ i, FirstName= 'FN-'+ i, Phone='06'+i+i+i+i+i+i);
                contList.add(c);              
            }
            insert contList;
   }
    @AuraEnabled
    public static void deleteAllContacts(){
        delete [SELECT ID FROM Contact];
        
    }


    @AuraEnabled(cacheable=true)
    public static Integer countContacts(){
       return[ SELECT COUNT() FROM contact];
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> contactList(){
        return [SELECT ID, FirstName, LastName, Phone FROM  Contact];
    }
       
}