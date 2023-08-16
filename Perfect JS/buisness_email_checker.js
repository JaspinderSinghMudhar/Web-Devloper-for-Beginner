jQuery(document).ready(function(e){
    jQuery('.emailval').click(function(){
        var email = jQuery(this).parents(".wpcf7").find(".businessemail").val();
        var reg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,4})?$/;
            if (reg.test(email)){
                return 0;
            }
            else{
                alert('Please Enter Business Email Address');
                return false;
            }
    });
});