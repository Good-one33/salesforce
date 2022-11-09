public with sharing class Create {

    @AuraEnabled(cacheable=true)
    public static void Acc(Integer n){
        List<Account> acts = new List<Account>();
        for(Integer i = 1; i <= n; i++){
            acts.add( new Account( Name = 'testAccount-'+ i));
        }
                insert acts;
    }

    @AuraEnabled(cacheable=true)
    public  static void Con(Integer n){
        List<Contact> cList = new List<Contact>();
        for(Integer i = 1; i <= n ; i++ ){
            cList.add(new Contact(lastname= 'LN-'+ i, firstname= 'FN-'+ i));

        }
        insert cList;      
    }

    @AuraEnabled
    public  static  String addContact (){
        List<Contact> cList = new List<Contact>();
        for(Integer i = 1; i <= 1 ; i++ ){
            cList.add(new Contact(lastname= 'LN-'+ i, firstname= 'FN-'+ i));

        }
        insert cList;      
        return 'you are the best';
    }
}

