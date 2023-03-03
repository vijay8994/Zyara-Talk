
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

// One
$('#colorpicker').on('input', function() {
    $('#hexcolor').val(this.value);
});
$('#hexcolor').on('input', function() {
  $('#colorpicker').val(this.value);
});


// TWO
$('#colorpickerTwo').on('input', function() {
    $('#hexcolorTwo').val(this.value);
});
$('#hexcolorTwo').on('input', function() {
  $('#colorpickerTwo').val(this.value);
});


// THREE
$('#colorpickerThree').on('input', function() {
    $('#hexcolorThree').val(this.value);
});
$('#hexcolorThree').on('input', function() {
  $('#colorpickerThree').val(this.value);
});


// Four
$('#colorpickerFour').on('input', function() {
    $('#hexcolorFour').val(this.value);
});
$('#hexcolorFour').on('input', function() {
  $('#colorpickerFour').val(this.value);
});



