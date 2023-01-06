const menu = document.querySelectorAll('.menuImg')
menu[1].style.display = 'none'

document.querySelector('body').addEventListener('click', (e) => {
	if(e.target.classList.contains('menuImg')){
		document.querySelector('.navbar').classList.toggle('navbars')
		for(let i = 0; i<menu.length; i++){
			if(menu[i].style.display == "none"){
				menu[i].style.display = "block"
			}
			else{
				menu[i].style.display = "none"
			}
		}
	}
	else{
		menu[0].style.display = "block"
		menu[1].style.display = "none"
		document.querySelector('.navbar').classList.remove('navbars')
	}

})