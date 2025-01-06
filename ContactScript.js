var Sdk = window.Sdk || {}

(
    function(){

        this.shippingMethordOnChange = function(executionContext){

           if( formContext.getAttribute("address1_shippingmethodcode").getText()== "FedEX"){

            formContext.getControl("address1_freighttermscode").setDisabled(true); 
        }
        else{
            formContext.getControl("address1_freighttermscode").setDisabled(false); 
        }

    }
  }
).call(Sdk);