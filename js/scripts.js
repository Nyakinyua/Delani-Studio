$(document).ready(function() {
 $(".design").click(function() {
        $(".icon1").toggle(800);
        $(".para1").toggle(800);
        });
$(".development").click(function() {
         $(".icon2").toggle(800);
         $(".para2").toggle(800);
        });
$(".product").click(function() {
        $(".icon3").toggle(800);
        $(".para3").toggle(800);
        });

        


//contact us form inputs
        /*$("#blanks form").submit(function(event) {
                var personInput = $("input#contact-name").val();
                var emailInput = $("input#contact-email").val();
                var messageInput=$("input#contact-message").val();

                $(".contact-name").text(personInput);
                $(".contact-email").text(emailInput);
                $(".contact-message").text(messageInput);

                $("#message").show();
        
                event.preventDefault();
        });*/
 $("#sbmt1").click(function(event)
 {
   event.preventDefault();
 var name=$("#contact-name").val();
var email=$("#contact-email").val();
   if($("#contact-name").val()==""){
     alert("Please input name")
   }
   else if($("#contact-email").val()==""){
     alert("Please input email")
   }
   else if($("#contact-message").val()==""){
     alert("Please input your message")
   }
   else{
   alert("Thank you "+ name + "," + " your messege has been received and is being acted on. .");}
 });
 /*portfolio section
 $(".button").hover(function() {
        $("#photo1").attr("#p1") 
        },function(){ 
        $("#photo1").attr("src","assets/portfolio/work1.jpg");
        });*/
        $(".photo1").mouseover(function()
        (".photo1").css{"opacity','.2");
        ),
        function(){
                $(".photo1").css()("opacity','1");
        });
 
   
});