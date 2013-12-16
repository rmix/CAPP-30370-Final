window.onload = function(){
    var $windowwidth = $(window).width() ;
    console.log("Initial Window Width:" + $windowwidth)        
};
                
$(window).resize(function(){
  	var $windowwidth = $(window).width() ;
    $('.width').text($windowwidth)
    console.log("Window Width:" + $windowwidth)
});

$('img').on("click", function() {
	console.log("IMG alt:" + $(this).attr('alt'));
	console.log("IMG width:" + $(this).css('width'));
	console.log("IMG height:" + $(this).css('height'));
});

$('header').on("click", function() {
	console.log("Header Text:" + $(this).text());
	console.log("Header Color:" + $(this).css('color'));
	console.log("Header Font-Size:" + $(this).css('font-size'));
});

$('#update-field').on("click", function(){
    var $field1 = $('#field1');
    $field1.attr('src', 'field2.jpg');
    $field1.attr('alt', 'field2');
    $field1.attr('title', 'field2');
});
   
$('#update-lr').on("click", function(){
    var $lr1 = $('#lr1');
    $lr1.attr('src', 'lr2.jpg');
    $lr1.attr('alt', 'lr2');
    $lr1.attr('title', 'lr2');
});