const slider = document.querySelector("#slider");

function Next(){
	let sliderSection = document.querySelectorAll(".slider__section");
	let img1 = sliderSection[0];
	slider.style.marginLeft = "-200%";
	slider.style.transition = "all 0.5s";
	setTimeout(function(){
		slider.appendChild(img1);
		slider.style.transition = "none";
		slider.style.marginLeft = "-100%";
	}, 500);
}

setInterval(function(){
	Next()
}, 5000)