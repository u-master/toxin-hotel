
require('jquery-mask-plugin');

module.exports = {
    initTextFieldMask: function (idTextField, maskTextField) {
        console.log ("Text Field #"+idTextField+" with mask "+maskTextField);
        $(document).ready(function(){
            $('#'+idTextField).mask(maskTextField);
        });
    }
}