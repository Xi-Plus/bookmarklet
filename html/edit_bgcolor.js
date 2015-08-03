javascript:
function editcolor(c){
	c.style.background="#000";
	c.style.color="#fff";
}
function dfs(v){
	editcolor(v);
	for(var i=0;i<v.children.length;i++){
		dfs(v.children[i]);
	}
}
dfs(document.body);