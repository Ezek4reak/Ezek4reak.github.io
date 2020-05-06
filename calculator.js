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
			var num1, num2, operator, answer;
			var calculated = false;
			var opSet = false;
			//display TextBox
			var display = document.querySelector('.display');
			//Numbers Pad
			var one = document.querySelector('.one');
			var two = document.querySelector('.two');
			var three = document.querySelector('.three');
			var four = document.querySelector('.four');
			var five = document.querySelector('.five');
			var six = document.querySelector('.six');
			var seven = document.querySelector('.seven');
			var eight = document.querySelector('.eight');
			var nine = document.querySelector('.nine');
			var zero = document.querySelector('.zero');
			var dot = document.querySelector('.dot');
			//Operators Buttons
			var equal = document.querySelector('.equal');
			var plus = document.querySelector('.plus');
			var minus = document.querySelector('.minus');
			var divid = document.querySelector('.divid');
			var multiply = document.querySelector('.multiply');
			var sqrt = document.querySelector('.sqrt');
			var mod = document.querySelector('.mod');
			var sqr = document.querySelector('.sqr');
			var cube = document.querySelector('.cube');
			var pow = document.querySelector('.pow');
			var fact = document.querySelector('.fact');
			//control buttons
			var clear = document.querySelector('.clear');
			var back = document.querySelector('.back');
			var lab = document.querySelector('.lbl');

			back.style.background = "#CE688A";
			back.style.padding = "1px";
			dot.style.padding = "1px";
			back.style.color = "white";
			//Numbers response functions
			one.addEventListener('click', function(){
				if (calculated || opSet || display.value === "0") {
					display.value = '1';
					calculated = false;
					opSet = false;
				}else{
					display.value += '1';
				}
			});
			two.addEventListener('click', function(){
				if (calculated || opSet || display.value === "0") {
					display.value = '2';
					calculated = false;
					opSet = false;
				}else{
					display.value += '2';
				}
			});
			three.addEventListener('click', function(){
				if (calculated || opSet || display.value === "0") {
					display.value = '3';
					calculated = false;
					opSet = false;
				}else{
					display.value += '3';
				}
			});
			four.addEventListener('click', function(){
				if (calculated || opSet || display.value === "0") {
					display.value = '4';
					calculated = false;
					opSet = false;
				}else{
					display.value += '4';
				}
			});
			five.addEventListener('click', function(){
				if (calculated || opSet || display.value === "0") {
					display.value = '5';
					calculated = false;
					opSet = false;
				}else{
					display.value += '5';
				}
			});
			six.addEventListener('click', function(){
				if (calculated || opSet || display.value === "0") {
					display.value = '6';
					calculated = false;
					opSet = false;
				}else{
					display.value += '6';
				}
			});
			seven.addEventListener('click', function(){
				if (calculated || opSet || display.value === "0") {
					display.value = '7';
					calculated = false;
					opSet = false;
				}else{
					display.value += '7';
				}
			});
			eight.addEventListener('click', function(){
				if (calculated || opSet || display.value === "0") {
					display.value = '8';
					calculated = false;
					opSet = false;
				}else{
					display.value += '8';
				}
			});
			nine.addEventListener('click', function(){
				if (calculated || opSet || display.value === "0") {
					display.value = '9';
					calculated = false;
					opSet = false;
				}else{
					display.value += '9';
				}
			});
			zero.addEventListener('click', function(){
				if (display.value==="" || calculated || opSet) {
					display.value = "";
					calculated = false;
					opSet = false;
				}else{
					display.value += '0';
				}
			});
			dot.addEventListener('click', function(){
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
				let value = display.value;
				display.value = value.substr(0, value.length - 1);
			});
			clear.addEventListener('click', function(){
				display.value = "";
			});
			//Operators functions
			plus.addEventListener('click', function(){
				num1 = display.value;
				num1 = Number(removeComma(num1));
				operator = "+";
				lab.textContent = num1 + " +";
				opSet = true;
			});
			minus.addEventListener('click', function(){
				num1 = display.value;
				num1 = Number(removeComma(num1));
				operator = "-";
				lab.textContent = num1 + " -";
				opSet = true;
			});
			divid.addEventListener('click', function(){
				num1 = display.value;
				num1 = Number(removeComma(num1));
				operator = "/";
				lab.innerHTML = num1 + " &#247";
				opSet = true;
			});
			multiply.addEventListener('click', function(){
				num1 = display.value;
				num1 = Number(removeComma(num1));
				operator = "*";
				lab.innerHTML = num1 + " &#215;";
				opSet = true;
			});
			sqrt.addEventListener('click', function(){
				num1 = display.value;
				num1 = Number(removeComma(num1));
				answer = Math.sqrt(num1);
				answer= numberWithCommas(answer)
				display.value = answer;
				calculated = true;
				lab.innerHTML = "&radic;"+num1;
			});
			sqr.addEventListener('click', function(){
				num1 = display.value;
				num1 = Number(removeComma(num1));
				answer = num1 * num1;
				answer= numberWithCommas(answer)
				display.value = answer;
				calculated = true;
				lab.innerHTML = num1+"<sup>2</sup>";
			});
			cube.addEventListener('click', function(){
				num1 = display.value;
				num1 = Number(removeComma(num1));
				answer = num1 * num1 * num1;
				answer= numberWithCommas(answer)
				display.value = answer;
				calculated = true;
				lab.innerHTML = num1+"<sup>3</sup>";
			});
			mod.addEventListener('click', function(){
				num1 = display.value;
				num1 = Number(removeComma(num1));
				operator = "%";
				lab.innerHTML = num1+" %";
				opSet = true;
			});
			pow.addEventListener('click', function(){
				num1 = display.value;
				num1 = Number(removeComma(num1));
				operator = "pow";
				lab.innerHTML = num1+"<sup>^</sup>";
				opSet = true;
			});
			fact.addEventListener('click', function(){
				num1 = display.value;
				num1 = Number(removeComma(num1));
				answer = factorial(num1);
				answer= numberWithCommas(answer)
				display.value = answer;
				calculated = true;
				lab.innerHTML = num1+"!";
			});
			equal.addEventListener('click', function(){
				num2 = Number(display.value);
				switch(operator){
					case "+":
						answer = num1 + num2;
						answer= numberWithCommas(answer);
						display.value = answer;
						lab.innerHTML = num1 + " + "+ num2 +" = "+ answer;
						calculated = true;
						break;
					case "-":
						answer = num1 - num2;
						answer= numberWithCommas(answer);
						display.value = answer;
						lab.innerHTML = num1 + " - "+num2 +" = "+ answer;
						calculated = true;
						break;
					case "/":
						answer = num1 / num2;
						answer= numberWithCommas(answer);
						display.value = answer;
						lab.innerHTML = num1 + " &#247; "+num2 +" = "+ answer;
						calculated = true;
						break;
					case "*":
						answer = num1 * num2;
						answer= numberWithCommas(answer);
						display.value = answer;
						lab.innerHTML = num1 + " &#215; "+num2 +" = "+ answer;
						calculated = true;
						break;
					case "%":
						answer = num1 % num2;
						answer= numberWithCommas(answer);
						display.value = answer;
						lab.innerHTML = num1 + " % "+num2 +" = "+ answer;
						calculated = true;
						break;
					case "pow":
						answer = Math.pow(num1, num2);
						answer= numberWithCommas(answer);
						display.value = answer;
						lab.innerHTML = num1 + "<sup>"+num2+"</sup>" +" = "+ answer;
						calculated = true;
						break;
					default:
						display.value = num2;
						calculated = false;
						break;
				}
			});