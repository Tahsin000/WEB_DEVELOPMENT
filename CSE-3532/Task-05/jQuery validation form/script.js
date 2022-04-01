$("#formValidation").validate({
    rules:{
        name:{
            minlength:2
        },
        email:{
            email:true
        },
        phone:{
            number:true,
            minlength:10,
            maxlength:10
        },
        password:{
            minlength:7
        }
    },
    messages: {
        name:{
            required: "Please Enter your name",
            minlength: "Name at least 2 characters"
        },
        email:"Please Enter your name",
        phone:{
            required: "Please Enter your phone",
            minlength: "Phone-number at least 10 digits"
        },
        password:{
            required: "Please Enter your password",
            minlength: "password at least 7 digits"
        }
    },
    submitHandler: function(form) {
      form.submit();
    }
   });