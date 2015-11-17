javascript:
for(var i=0;true;i++){
	if(document.all.poke_live_new.children[i]==undefined){break;}
	else if(document.all.poke_live_new.children[i].children[0].children[1].children[0].children[0].children[0]==undefined){break;}
	document.all.poke_live_new.children[i].children[0].children[1].children[0].children[0].children[0].click();
}
for(var i=0;true;i++){
	if(document.all.poke_live_new.parentElement.children[2].children[i]==undefined){break;}
	else if(document.all.poke_live_new.parentElement.children[2].children[i].children[0].children[1].children[0].children[0].children[0]==undefined){break;}
	document.all.poke_live_new.parentElement.children[2].children[i].children[0].children[1].children[0].children[0].children[0].click();
}