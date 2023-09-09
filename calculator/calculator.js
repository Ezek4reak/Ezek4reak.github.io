			function playSound() {
				var sound = document.getElementById("audio");
				sound.playbackRate = 3;
				sound.volume = 0.2;
				sound.play();
			}
			function numberWithCommas(x) {
				var parts = x.toString().split(".");
				parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				return parts.join(".");
			}
			function removeComma(x){
				let parts = x.toString().split(",");
				return parts.join("");
			}
			function factorial(x){
				if(x===1){
					return x;
				}else{
					return x*factorial(x-1);
				}
			}
			//c alculate nth root of a number
			//const nthroot = (x, n) => Math.pow(x, (1/n));
			const nthroot = (number, n) => {
				if(n===0){
					return NaN //Cannot calculate 0th root	
				}
				if((number < 0) && (n % 2 === 0)){
					return NaN //Cannot calculate even root of negetive numbers
				}

				let res =Math.pow(Math.abs(number), 1/n) * (number < 0 && n % 2 !== 0 ? -1 : 1);
				return Math.round((res + Number.EPSILON) * 100) / 100;
			};

			var num1, num2, operator, answer;
			var calculated = false;
			var opSet = false;
			//display TextBox
			const display = document.querySelector('.display');
			//Numbers Pad
			const one = document.querySelector('.one');
			const two = document.querySelector('.two');
			const three = document.querySelector('.three');
			const four = document.querySelector('.four');
			const five = document.querySelector('.five');
			const six = document.querySelector('.six');
			const seven = document.querySelector('.seven');
			const eight = document.querySelector('.eight');
			const nine = document.querySelector('.nine');
			const zero = document.querySelector('.zero');
			const dot = document.querySelector('.dot');
			//Operators Buttons
			const equal = document.querySelector('.equal');
			const plus = document.querySelector('.plus');
			const minus = document.querySelector('.minus');
			const divid = document.querySelector('.divid');
			const multiply = document.querySelector('.multiply');
			const sqrt = document.querySelector('.sqrt');
			const mod = document.querySelector('.mod');
			const sqr = document.querySelector('.sqr');
			const cube = document.querySelector('.cube');
			const pow = document.querySelector('.pow');
			const nroot = document.querySelector('.nroot');
			//control buttons
			const clear = document.querySelector('.clear');
			const back = document.querySelector('.back');
			const lab = document.querySelector('.lbl');

			back.style.background = "#CE688A";
			back.style.color = "white";
			//Numbers response functions
			one.addEventListener('click', function(){
				playSound();
				if (calculated || opSet || display.value === "0") {
					display.value = '1';
					calculated = false;
					opSet = false;
				}else{
					display.value += '1';
				}
			});
			two.addEventListener('click', function(){
				playSound();
				if (calculated || opSet || display.value === "0") {
					display.value = '2';
					calculated = false;
					opSet = false;
				}else{
					display.value += '2';
				}
			});
			three.addEventListener('click', function(){
				playSound();
				if (calculated || opSet || display.value === "0") {
					display.value = '3';
					calculated = false;
					opSet = false;
				}else{
					display.value += '3';
				}
			});
			four.addEventListener('click', function(){
				playSound();
				if (calculated || opSet || display.value === "0") {
					display.value = '4';
					calculated = false;
					opSet = false;
				}else{
					display.value += '4';
				}
			});
			five.addEventListener('click', function(){
				playSound();
				if (calculated || opSet || display.value === "0") {
					display.value = '5';
					calculated = false;
					opSet = false;
				}else{
					display.value += '5';
				}
			});
			six.addEventListener('click', function(){
				playSound();
				if (calculated || opSet || display.value === "0") {
					display.value = '6';
					calculated = false;
					opSet = false;
				}else{
					display.value += '6';
				}
			});
			seven.addEventListener('click', function(){
				playSound();
				if (calculated || opSet || display.value === "0") {
					display.value = '7';
					calculated = false;
					opSet = false;
				}else{
					display.value += '7';
				}
			});
			eight.addEventListener('click', function(){
				playSound();
				if (calculated || opSet || display.value === "0") {
					display.value = '8';
					calculated = false;
					opSet = false;
				}else{
					display.value += '8';
				}
			});
			nine.addEventListener('click', function(){
				playSound();
				if (calculated || opSet || display.value === "0") {
					display.value = '9';
					calculated = false;
					opSet = false;
				}else{
					display.value += '9';
				}
			});
			zero.addEventListener('click', function(){
				playSound();
				if (display.value==="" || calculated || opSet) {
					display.value = "";
					calculated = false;
					opSet = false;
				}else{
					display.value += '0';
				}
			});
			dot.addEventListener('click', function(){
				playSound();
				if (display.value==="" || calculated || opSet) {
					display.value = "0.";
          			calculated = false;
          			opSet = false;
				}else{
					display.value += '.';
				}
			});
			//control functions
			back.addEventListener('click', function(){
				playSound();
				let value = display.value;
				display.value = value.substr(0, value.length - 1);
			});
			clear.addEventListener('click', function(){
				playSound();
				display.value = "";
				num1 = "";
				num2 = "";
				opSet = false;
				calculated = false;
			});
			//Operators functions
			plus.addEventListener('click', function(){
				playSound();
				if(operator){
					calculate();
					opSet = true;
				}
				num1 = display.value;
				num1 = Number(removeComma(num1));
				operator = "+";
				lab.textContent = numberWithCommas(num1) + " +";
				opSet = true;

			});
			minus.addEventListener('click', function(){
				playSound();
				if(operator){
					calculate();
					opSet = true;
				}
				num1 = display.value;
				num1 = Number(removeComma(num1));
				operator = "-";
				lab.textContent = numberWithCommas(num1) + " -";
				opSet = true;
			});
			divid.addEventListener('click', function(){
				playSound();
				if(operator){
					calculate();
					opSet = true;
				}
				num1 = display.value;
				num1 = Number(removeComma(num1));
				operator = "/";
				lab.innerHTML = numberWithCommas(num1) + " &#247";
				opSet = true;
			});
			multiply.addEventListener('click', function(){
				playSound();
				if(operator){
					calculate();
					opSet = true;
				}
				num1 = display.value;
				num1 = Number(removeComma(num1));
				operator = "*";
				lab.innerHTML = numberWithCommas(num1) + " &#215;";
				opSet = true;
			});
			sqrt.addEventListener('click', function(){
				playSound();
				num1 = display.value;
				num1 = Number(removeComma(num1));
				answer = Math.sqrt(num1);
				answer= numberWithCommas(answer)
				display.value = answer;
				calculated = true;
				lab.innerHTML = "&radic;"+numberWithCommas(num1);
			});
			sqr.addEventListener('click', function(){
				playSound();
				num1 = display.value;
				num1 = Number(removeComma(num1));
				answer = num1 * num1;
				answer= numberWithCommas(answer)
				display.value = answer;
				calculated = true;
				lab.innerHTML = numberWithCommas(num1)+"<sup>2</sup>";
			});
			cube.addEventListener('click', function(){
				playSound();
				num1 = display.value;
				num1 = Number(removeComma(num1));
				answer = num1 * num1 * num1;
				answer= numberWithCommas(answer)
				display.value = answer;
				calculated = true;
				lab.innerHTML = numberWithCommas(num1)+"<sup>3</sup>";
			});
			mod.addEventListener('click', function(){
				playSound();
				if(operator){
					calculate();
					opSet = true;
				}
				num1 = display.value;
				num1 = Number(removeComma(num1));
				operator = "%";
				lab.innerHTML = numberWithCommas(num1)+" %";
				opSet = true;
			});
			pow.addEventListener('click', function(){
				playSound();
				if(operator){
					calculate();
					opSet = true;
				}
				num1 = display.value;
				num1 = Number(removeComma(num1));
				operator = "pow";
				lab.innerHTML = numberWithCommas(num1)+"<sup>^</sup>";
				opSet = true;
			});
			nroot.addEventListener('click', function(){
				playSound();
				if(operator){
					calculate();
					opSet = true;
				}
				num1 = display.value;
				num1 = Number(removeComma(num1));
				operator = "nr";
				lab.innerHTML = "&radic;"+numberWithCommas(num1);
				opSet = true;
			});
			equal.addEventListener('click', function(){
				playSound(); 
				calculate();
			});

			function calculate(){
				num2 = Number(display.value);
				switch(operator){
					case "+":
						answer = num1 + num2;
						answer= numberWithCommas(answer);
						display.value = answer;
						lab.innerHTML = numberWithCommas(num1) + " + "+ numberWithCommas(num2) +" = "+ answer;
						calculated = true;
						break;
					case "-":
						answer = num1 - num2;
						answer= numberWithCommas(answer);
						display.value = answer;
						lab.innerHTML = numberWithCommas(num1) + " - "+numberWithCommas(num2) +" = "+ answer;
						calculated = true;
						break;
					case "/":
						answer = num1 / num2;
						answer= numberWithCommas(answer);
						display.value = answer;
						lab.innerHTML = numberWithCommas(num1) + " &#247; "+numberWithCommas(num2) +" = "+ answer;
						calculated = true;
						break;
					case "*":
						answer = num1 * num2;
						answer= numberWithCommas(answer);
						display.value = answer;
						lab.innerHTML = numberWithCommas(num1) + " &#215; "+numberWithCommas(num2) +" = "+ answer;
						calculated = true;
						break;
					case "%":
						answer = num1 % num2;
						answer= numberWithCommas(answer);
						display.value = answer;
						lab.innerHTML = numberWithCommas(num1) + " % "+numberWithCommas(num2) +" = "+ answer;
						calculated = true;
						break;
					case "pow":
						answer = Math.pow(num1, num2);
						answer= numberWithCommas(answer);
						display.value = answer;
						lab.innerHTML = numberWithCommas(num1) + "<sup>"+numberWithCommas(num2)+"</sup>" +" = "+ answer;
						calculated = true;
						break;
					case "nr":
						answer = nthroot(num1, Number(num2));
						//answer= numberWithCommas(answer);
						display.value = Math.abs(answer);
						lab.innerHTML = "<sup>"+numberWithCommas(num2)+"</sup>&radic;" + numberWithCommas(num1) +" = "+ answer;
						calculated = true;
						break;
					default:
						display.value = num2;
						calculated = false;
						break;
				}
				operator = "";
			}
