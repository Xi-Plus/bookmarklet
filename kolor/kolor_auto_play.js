javascript:
if(document.all["kolor-start-block"].style.display=="")document.all["kolor-start"].click();
else document.all["kolor-restart"].click();
for(var j=0;j<20;j++){
	var qcolor=document.all["kolor-kolor"].style["background-color"];
	var i=0;
	while(true){
		var aobject=document.all["kolor-options"].children[i];
		if(aobject==undefined)break;
		acolor=aobject.children[0].style["background-color"];
		if(qcolor==acolor)aobject.children[0].click();
		i++;
	}
}