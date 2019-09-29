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

        


//form inputs
 /*$(".sbmt1").click(function(event)
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
 });*/
 //portfolio section
 $("#photo1").hover(function() //on over
 { $("#photo1").attr("#p1"); 
        },function(){ 
        $("#photo1").attr("src","assets/portfolio/work1.jpg");
        });

                $("#work1").mouseover(function(){
                  $("#overlay").show();
                }).mouseout(function(){
                  $("#overlay").hide();
                });
 
   
});