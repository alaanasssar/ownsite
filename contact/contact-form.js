/* ---------------------------------------------
 Contact form
 --------------------------------------------- */
$(document).ready(function(){
    $("#submit").click(function(){

        //get input field values
        var user_name = $('input[name=name]').val();
        var user_email = $('input[name=email]').val();
        var user_message = $('textarea[name=message]').val();

        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;
        if (user_name == "") {
            $('input[name=name]').css('border-color', '#f6403c');
            proceed = false;
        }

        if (user_email == "") {
            $('input[name=email]').css('border-color', '#f6403c');
            proceed = false;
        }

        if (user_message == "") {
            $('textarea[name=message]').css('border-color', '#f6403c');
            proceed = false;
        }

        //proceed...
        if (proceed) {
            //data to be sent to server
            post_data = {
                'userName': user_name,
                'userEmail': user_email,
                'userMessage': user_message
            };

            //Ajax post data to server
            $.post('contact.php', post_data, function(response){

                //load json data from server and output message
                if (response.type == 'error') {
                    output = '<div class="alert error mt-20">' + response.text + '</div>';
                }
                else {

                    output = '<div class="alert success mt-20">' + response.text + '</div>';

                    //reset values in all input fields
                    $('#contact_form input').val('');
                    $('#contact_form textarea').val('');
                }

                $("#result").hide().html(output).slideDown();
            }, 'json');

        }

        return false;
    });

    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input, #contact_form textarea").keyup(function(){
        $("#contact_form input, #contact_form textarea").css('border-color', '');
        $("#result").slideUp();
    });

});
