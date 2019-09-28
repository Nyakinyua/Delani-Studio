$(document).ready(function() {
 $(".design").click(function() {
        $(".para1").toggle();
        });
$(".development").click(function() {
         $(".para2").toggle();
        });
$(".project").click(function() {
        $(".para3").toggle();
        });

        


//contact us form inputs
        $("#blanks form").submit(function(event) {
                var personInput = $("input#contact-name").val();
                var emailInput = $("input#contact-email").val();
                var messageInput=$("input#contact-message").val();

                $(".contact-name").text(personInput);
                $(".contact-email").text(emailInput);
                $(".contact-message").text(messageInput);

                $("#message").show();
        
                event.preventDefault();
        });
   
});