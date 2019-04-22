// Check Off Specific Todos By Clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete Todo

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
	//this jQuery method avoids propagation on function/methods to the parents elements
	event.stopPropagation();
});

// Add a new Todo

$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		// Grabbing new todo text from the input
		var todoText = $(this).val();
		$(this).val("");
		// Create a new li and add to to ul
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});