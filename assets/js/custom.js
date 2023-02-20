
$(function() {
    $("span").on("click", function () {
        $(":root").css("--maincolor", $(this).data("color"));
    });
});

$( document ).ready(function() {
     $( ".share-btn" ).click(function(e) {
     	 $('.networks-5').not($(this).next( ".networks-5" )).each(function(){
         	$(this).removeClass("active");
    	 });
     
            $(this).next( ".networks-5" ).toggleClass( "active" );
    });   
});