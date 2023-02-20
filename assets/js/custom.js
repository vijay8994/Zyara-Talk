
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

$(document).ready(function() {$('#tabs').on('click', 'div', function() {
        $('#img_place div').removeClass('opaque');
        
        var newImage = $(this).index();
        
        $('#img_place div').eq(newImage).addClass('opaque');
        
        $('#tabs div').removeClass('act');
        $(this).addClass('act');
    });
});