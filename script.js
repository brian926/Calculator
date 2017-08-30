$(document).ready(function(){

	var answer = 0;
	var inputs = "";
	var inputNum;
	var inputNumArr = [];
	var operaterInp = [];

	$(".numbers").click(function(){

		document.getElementById("screen").innerHTML += $(this).val();
		inputs += $(this).val();
		inputNum = parseFloat(inputs);

		if(operaterInp.length > 0) {
			inputNumArr.push(inputNum);
			var b = inputNumArr.pop();
			var a = inputNumArr.pop();

			switch(operaterInp[0]){
            case "add":
                add(a, b);
                break;
            case "minus":
                subtract(a, b);
                break;
            case "times":
                multiply(a, b);
                break;
            case "divide":
                divide(a, b);
                break;
			}

		operaterInp.pop();
		}
	});

	$("#add").click(function() {
		inputNumArr.push(inputNum);
		document.getElementById("screen").innerHTML = "";
		operaterInp.push("add");
		inputs = "";
		console.log(inputNumArr[0]);
	});

	$("#minus").click(function(){
		inputNumArr.push(inputNum);
        document.getElementById("screen").innerHTML="";
        operaterInp.push("minus");
        inputs="";
        console.log(inputNumArr);
	});

	$("#times").click(function(){
		inputNumArr.push(inputNum);
        document.getElementById("screen").innerHTML="";
        operaterInp.push("times");
        inputs="";
	});

	$("#divide").click(function(){
		inputNumArr.push(inputNum);
        document.getElementById("screen").innerHTML="";
        operaterInp.push("divide");
        inputs="";
	});

	$("#equalTo").click(function(){
		answer = inputNumArr[0];
		document.getElementById("screen").innerHTML = answer;
		inputs = "";
	})

	function add(a, b) {
		inputNumArr[0] = a + b;
		console.log(inputNumArr[0]);
	}

	function subtract(a, b) {
		inputNumArr[0] = a - b;
	}

	function multiply(a, b) {
		inputNumArr[0] = a * b;
	}

	function divide(a, b) {
		inputNumArr[0] = a / b;
	}

});