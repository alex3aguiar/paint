
$(document).ready(function() {
	$(".board").append(renderBoard(10,0))
	window.onresize = function(event) {
		$(".board").empty();
		$(".board").append(renderBoard(10,0))
		
		$(".cell").on('click mouseover', function () {
			var color = $("#color").val() || "black";
			$(this).css("background-color",color)
		})
	}
	
	$(".cell").hover(function(e){
		    e.preventDefault()
			if(e.buttons== 1){
				var color = $("#color").val() || "black";
				$(this).css("background-color",color)
			}
			
	})
		$(".cell").click(function(e){
		    e.preventDefault()				
	})
});


const renderLine = function(widthSquare, padding){
	const width = $(window).width()
	const quantity =width/(widthSquare+padding)
	
	let squares = "";
	for(let x=0; x<quantity; x++){
		squares +=`<div class="cell"></div>`;
	}
	
	return `<div class="line">`+squares+`</div>`;
}

const renderBoard = function(widthSquare, padding){
	const height = $(window).height()
	const quantity =height/(widthSquare+padding)
	let lines = "";
	for(let x=0; x<quantity; x++){
		lines  += renderLine(widthSquare, padding);
	}
	
	return  $(`<div class="board">`+lines+`</div>`);
}
