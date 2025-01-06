// var Sdk = window.Sdk || {} ;
// (

//     function(){

//         this.formOnLoad =function (executionContext) {

//         }

//         this.MainPhoneOnChange = function(executionContext){
//             var formContext = executionContext.getFormContext();
//             var phoneNumber = formContext.getAttribute("telephone1").getValue();

//             var experssion = new RegExp ("^([\+][0-9]{1,3}([ \.\-])?)?([\(]{1}[0-9]{3}[\)])?([0-9A-Z \.\-]{1,32})((x|ext|extension)?[0-9]{1,4}?)$");

//             if(!experssion.test(phoneNumber)){

//                 alert("Enter the correct number");
//             }
//         }
//     }
// ).call(Sdk)


// var Sdk = window.Sdk || {};

// (function () {
//     this.formOnLoad = function (executionContext) {
//         // Code for form onLoad event can go here if needed.
//     };

//     this.MainPhoneOnChange = function (executionContext) {
//         var formContext = executionContext.getFormContext();
//         var phoneNumber = formContext.getAttribute("telephone1").getValue();

//         // Regular expression for USA phone numbers.
//         var expression = new RegExp(
//             /^(?:\+1\s?)?(\([2-9][0-8][0-9]\)\s?|[2-9][0-8][0-9][-.\s]?)?[2-9][0-9]{2}[-.\s]?[0-9]{4}$/
//         );

//         if (!expression.test(phoneNumber)) {

    
//             alert("Enter a valid USA phone number.");
//         }
//     };
// }).call(Sdk);


var Sdk = window.Sdk || {};

(function () {
    this.formOnLoad = function (executionContext) {
       
    };
    
    // To prevent AutoSave
    this.FormOnSave= function(executionContext){
        
            var eventArgs = executionContext.getEventArgs();
            if (eventArgs.getSaveMode() == 70 || eventArgs.getSaveMode() == 2) {
                eventArgs.preventDefault();
            }
    }

    this.MainPhoneOnChange = function (executionContext) {
        var formContext = executionContext.getFormContext();
        var phoneNumber = formContext.getAttribute("telephone1").getValue();

        
        var expression = new RegExp(
            /^(?:\+1\s?)?(\([2-9][0-8][0-9]\)\s?|[2-9][0-8][0-9][-.\s]?)?[2-9][0-9]{2}[-.\s]?[0-9]{4}$/
        );

        if (!expression.test(phoneNumber)) {

            formContext.getControl("telephone1").setNotification("Enter a valid USA phone number.","telephonemessage");

            //formNotification

            formContext.ui.setFormNotification("Just Info","INFO", "InfoMsg");
            
        }
        else{

            formContext.getControl("telephone1").clearNotification("telephonemessage");

            formContext.ui.clearFormNotification("InfoMsg");
        }
    };
}).call(Sdk);
