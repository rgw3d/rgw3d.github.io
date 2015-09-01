$(function() {
	var height = $(window).height();	
	$("section").each(function(indx, element){
		$(element).css("top",height * indx);
	});
	$("section").last().css("height",height);
	
	
    
});