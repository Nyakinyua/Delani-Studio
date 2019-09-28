$(document).ready(function() {
 $(".design").click(function() {
        $(".icon1").toggle(800);
        $(".para1").toggle(800);
        });
$(".development").click(function() {
         $(".para2").toggle();
         $(".development").toggle();
        });
$(".product").click(function() {
        $(".para3").toogle();
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