const form = document.getElementById("form1");
const button = document.getElementById("button");
const input = document.getElementById("input");
const answer = document.getElementById("answer");
const eight = document.getElementById("eight");
const roll = document.getElementById("roll");
const par = document.createElement("p");
par.setAttribute("id","warning")
eight.appendChild(par);
form.setAttribute("onsubmit", "event.preventDefault()");
input.setAttribute("placeholder", "Ask me anything!");
input.setAttribute("size", "25")


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
      
      par.textContent = "Please enter a question!";
  }
    else {
      const runNum = Math.floor(Math.random() *  options.length);
    //   const runNum = input.value.length % options.length;
      console.log(runNum);
      setTimeout(function () {
          roll.src = options[runNum];
          par.textContent = `you entered: ${input.value}`;
          input.value = "";
      }, 500)

  }
});

