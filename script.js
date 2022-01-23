document.addEventListener('DOMContentLoaded',()=>{
	const app = document.querySelector('#app')
	const tool = document.querySelector('#tool')
	const textArea = document.querySelector('#boxText')
	

	renderImagesTool=()=>{
		for (var i = 0; i < icons.length; i++) {
			tool.innerHTML += `<img id="img${i}" src="${icons[i].src}">`
		}
	}
	renderImagesTool()
	
	const selectAll = document.querySelector('#img3')
	selectAll.addEventListener('click',()=>{
		textArea.select()
	})
	
})