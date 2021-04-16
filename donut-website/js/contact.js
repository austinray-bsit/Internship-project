$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    minlength: 5
                },
                address: {
                    required: true,
                    minlength: 10
                },
                message: {
                    required: false,
                }
            },
            messages: {
                name: {
                    required: "Please kindly enter your name",
                    minlength: "your name must consist of at least 2 characters"
                },
                number: {
                    required: "Please kindly enter your phone number",
                    minlength: "your Number must consist of at least 5 characters"
                },
                email: {
                    required: "Please kindly enter your email",
                    minlength: "your email must consist of at least 5 characters"
                },
                address: {
                    required: "Please kindly enter your address",
                    minlength: "your address must consist of at least 10 characters"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact-form.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})