var px=0;
var rentCount=0;
var rentw = document.querySelector("#indexCor").children[4].offsetWidth;
var parent=document.querySelector("#indexCor").childElementCount;
$( ".next" ).click(function() {
	
	 rentCount++;
	if(rentCount==parent)
	{
	px=rentw;
	rentCount=0;		
	}
	px+=-rentw;
  $("#indexCor").animate({left: px});

 
});
$( ".prew" ).click(function() {

	px+=rentw;
	if(px>0 )
	{
	px=0;
	}
  $("#indexCor").animate({left: px});
});
