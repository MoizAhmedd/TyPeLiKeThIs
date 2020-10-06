function LiKeThIs(text){
	let res = ''
	for (i = 0; i< text.length; i++){
		if(!res){
			res += text[i]
		} else {
			if (res[i-1] == res[i-1].toLowerCase()){
				res += text[i].toUpperCase()
			} else {
				res += text[i].toLowerCase()
			}
		}
	}
	return res
}
function onClick(e) {
	if (e.which === 1 || e.button === 0) {
	  console.log('Left mouse button at ' + e.clientX + 'x' + e.clientY);
	}
	if (e.which === 2 || e.button === 1) {
	  console.log('Middle mouse button ' + e.clientX + 'x' + e.clientY);
	}
	if (e.which === 3 || e.button === 2) {
	  let selection = window.getSelection().toString();
	  document.activeElement.innerText = LiKeThIs(selection)
	  console.log('Right mouse button ' + e.clientX + 'x' + e.clientY);
	}
	if (e.which === 4 || e.button === 3) {
	  console.log('Backward mouse button ' + e.clientX + 'x' + e.clientY);
	}
	if (e.which === 5 || e.button === 4) {
	  console.log('Forward mouse button ' + e.clientX + 'x' + e.clientY);
	}
  }
  window.addEventListener("mousedown", onClick);