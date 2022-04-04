const form = document.getElementById("form1");
const button = document.getElementById("button");
const input = document.getElementById("input");
const answer = document.getElementById("answer");
const eight = document.getElementById("eight");
const roll = document.getElementById("roll");
const par = document.createElement("p");
const parOne = document.createElement("p")
const src1 = document.getElementById("src")
par.setAttribute("id","warning")
eight.appendChild(par);
form.setAttribute("onsubmit", "event.preventDefault()");
input.setAttribute("placeholder", "Ask me anything!");
input.setAttribute("size", "25");
input.appendChild(parOne);
const startCircle = "./image/magic8ball_start.png";


const options = [
		"./image/magic8ball_1.png",
		"./image/magic8ball_2.png",
		"./image/magic8ball_4.png",
		"./image/magic8ball_5.png",
		"./image/magic8ball_6.png",
		"./image/magic8ball_7.png",
		"./image/magic8ball_8.png",
		"./image/magic8ball_9.png",
		"./image/magic8ball_10.png",
		"./image/magic8ball_11.png",
		"./image/magic8ball_12.png",
		"./image/magic8ball_13.png",
		"./image/magic8ball_14.png",
		"./image/magic8ball_15.png",
		"./image/magic8ball_16.png",
		"./image/magic8ball_17.png",
		"./image/magic8ball_18.png",
		"./image/magic8ball_19.png",
		"./image/magic8ball_20.png",
		
		
];

form.addEventListener("click", function(){
    if (input.value.length < 1) {
		par.style.color = "red";
		par.textContent = "Please enter a question!" ;
		par.style.background = " rgba(0, 0, 0, 0.5)";
  }
    else {
      const runNum = Math.floor(Math.random() *  options.length);
        console.log(runNum);
		animat();
		par.style.color = "white";
		par.textContent = `you asked: ${input.value}`;
		par.style.background = " rgba(0, 0, 0, 0.5)";
  
		setTimeout(function () {
		  roll.src = options[runNum];
		  
		  parOne.textContent = `you asked: ${input.value}`;
		  input.value = "";

		}, 2000);

		setTimeout(function () {
			roll.src = startCircle;	
			par.textContent = "";
				par.style.background = "none";
		}, 8000);


    }


});







function animat() {
    roll.animate([
        { transform: 'scale(1)', opacity: 50, offset: 0 },
        { transform: 'scale(.8) rotate(360deg)', opacity: 1, offset: .5 }
    ], {
        duration: 2000,
        easing: 'ease-in-out',
        delay: 200,
        iterations: 1,
        direction: 'alternate',
        fill: 'auto'
    })
};





















