$(document).ready(function() {
    var $contactForm = $("#contact_form");
    var $contactFormBtn = $("#send");
    var $contactFormName = $("#name");
    var $contactFormPhone = $("#phone");
    var $contactFormSubject = $("#subject");
    var $contactFormEmail = $("#email");
    var $contactFormMessage = $("#message");
    var $confirmMessage = $("#ajaxsuccess");
    var $errorMessages = $(".error");
    var $errorName = $("#err-name");
    var $errorPhone = $("#err-phone");
    var $errorSubject = $("#err-subject");
    var $errorEmail = $("#err-emailvld");
    var $errorMessage = $("#err-message");
    var $errorForm = $("#err-form");
    var $errorTimeout = $("#err-timedout");
    var $errorState = $("#err-state");

    function validate() {
        var error = false; // we will set this true if the form isn't valid
        var name = $contactFormName.val(); // get the value of the input field
        if (name == "" || name == " " || name == "Name") {
            $errorName.show(500);
            $errorName.delay(4000);
            $errorName.animate({
                height: 'toggle'
            }, 500, function() {
                // Animation complete.
            });
            error = true; // change the error state to true
        }

        var phone = $contactFormPhone.val(); // get the value of the input field
        if (phone == "" || phone == " " || phone == "Phone") {
            $errorPhone.show(500);
            $errorPhone.delay(4000);
            $errorPhone.animate({
                height: 'toggle'
            }, 500, function() {
                // Animation complete.
            });
            error = true; // change the error state to true
        }

        var subject = $contactFormSubject.val(); // get the value of the input field
        if (subject == "" || subject == " " || subject == "Subject") {
            $errorSubject.show(500);
            $errorSubject.delay(4000);
            $errorSubject.animate({
                height: 'toggle'
            }, 500, function() {
                // Animation complete.
            });
            error = true; // change the error state to true
        }


        var email_compare = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/; // Syntax to compare against input
        var email = $contactFormEmail.val().toLowerCase(); // get the value of the input field
        if (email == "" || email == " " || email == "E-mail") { // check if the field is empty
            $errorEmail.show(500);
            $errorEmail.delay(4000);
            $errorEmail.animate({
                height: 'toggle'
            }, 500, function() {
                // Animation complete.
            });
            error = true;
        } else if (!email_compare.test(email)) { // if it's not empty check the format against our email_compare variable
            $errorEmail.show(500);
            $errorEmail.delay(4000);
            $errorEmail.animate({
                height: 'toggle'
            }, 500, function() {
                // Animation complete.
            });
            error = true;
        }

        var message = $contactFormMessage.val(); // get the value of the input field
        if (message == "" || message == " " || message == "Message") {
            $errorMessage.show(500);
            $errorMessage.delay(4000);
            $errorMessage.animate({
                height: 'toggle'
            }, 500, function() {
                // Animation complete.
            });
            error = true; // change the error state to true
        }

        if (error == true) {
            $errorForm.show(500);
            $errorForm.delay(4000);
            $errorForm.animate({
                height: 'toggle'
            }, 500, function() {
                // Animation complete.
            });
        }

        return error;
    }

    $contactForm.submit(function(e) {
        e.preventDefault();
        $errorMessages.fadeOut('slow'); // reset the error messages (hides them)
        var isValid = !validate();
        if (isValid) {
            $.ajax({
                url: 'http://formspree.io/contact@UCRCoinLaundry.com',
                //url: 'http://formspree.io/diego91bernal@gmail.com',
                method: 'POST',
                data: {
                    name: $contactFormName.val(),
                    _subject: 'UCR Coin Laundry: ' + $contactFormSubject.val(),
                    _replyto: $contactFormEmail.val(),
                    message: $contactFormMessage.val(),
                    //_cc: "diego91bernal@gmail.com",
                    phone: $contactFormPhone.val()
                },
                timeout: 6000,
                cache: false,
                //dataType: "json",
                success: function() {
                    $confirmMessage.show(500);
                    $confirmMessage.delay(4000);
                    $confirmMessage.animate({
                        height: 'toggle'
                    }, 500, function() {});

                    $contactFormName.val('');
                    $contactFormEmail.val('');
                    $contactFormMessage.val('');
                    $contactFormSubject.val('');
                    $contactFormPhone.val('');
                },
                error: function(response) {
                    if (error == "timeout") {
                        $errorTimeout.slideDown('slow');
                    } else {
                        $errorState.slideDown('slow');
                        $errorState.html('An error occurred: ' + error + '');
                    }
                }
            });
        }
        return false;
    })

    $(".navbar-collapse.collapse ul.navbar-nav li a").click(function() {
        $(this).parents("div.collapse.in").collapse("hide");
    })

    function setStatusMessage() {
        var statusAlert = $('.status-alert');
        var closingTime = moment().hour(22).minutes(0).seconds(0);
        var closingSoonTime = moment().hour(20).minutes(0).seconds(0);
        var currentDay = moment().day();
        var openingTime = (currentDay == 'Saturday' || currentDay == 'Sunday') ?
            moment().hour(6).minutes(0).seconds(0) :
            moment().hour(7).minutes(0).seconds(0);

        if (moment().isBetween(openingTime, closingTime)) {
            statusAlert.addClass('open-now').html('Open Now');
        }
        if (moment().isSameOrAfter(closingTime) || moment().isSameOrBefore(openingTime)) {
            statusAlert.addClass('closed-now').html('Closed Now');
        }
        if (moment().isBetween(closingSoonTime, closingTime)) {
            statusAlert.addClass('closing-soon').html('Closing Soon');
        }
    }

    setStatusMessage();
})
