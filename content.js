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
function handleKey(e) {
	if (e.key === 't' && e.ctrlKey) {
	  let selection = window.getSelection().toString();
	  let converted = LiKeThIs(selection);
	  navigator.clipboard.writeText(converted).then(()=>{
		  console.log('heyyy');
		if(document.activeElement instanceof HTMLIFrameElement){
			document.activeElement.contentDocument.execCommand("Paste");
		} else{
			document.execCommand("Paste");
		}
	  })
	}
  }
  window.addEventListener("keydown", handleKey);

  

  navigator.clipboard.writeText(converted).then(()=>{
	if(document.activeElement instanceof HTMLIFrameElement){
		document.activeElement.contentDocument.execCommand("Paste");
	} else{
		document.execCommand("Paste");
	}
  })