$(document).ready(function(){
    $("#signup").validate({
        rules:{
            fname:{
                required:true,
                minlength:6
            },
            email:{
                required:true,
                email:true

            },
            subject:{
                required:true,
                minlength:10
            },
            comment:{
                required:true,
                minlength:50
            },
            
            
        },
        messages:{
           fname:{
            required:"*field is required",
            minlength:"Enter valid name"
            
           },
           email:{
            required:"*field is required",
            email:"Invalid email"
            

           },
        subject:{
            required:"*field is required"
           },
        comment:{
            required:"*field is required"
        } 
            
        }
    })
})