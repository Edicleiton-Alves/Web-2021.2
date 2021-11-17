var num1, num2 = 0
var maxdigitos = 0
var resultado = 0

function clean() {
	document.getElementById('resultado2').innerHTML = "";
	document.getElementById('resultado').innerHTML = "";
}

function back() {
	var resultado = document.getElementById('resultado').innerHTML;
	document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function changeSignal() {
	num1 = (document.getElementById("resultado").innerHTML *= -1);
}

function point() {
	num1 = (document.getElementById("resultado").innerHTML += '.');
}

function insert(n) {
	if (maxdigitos >= 25) {
		document.getElementById('tela1')
		limpar()
		maxdigitos = 25
		document.getElementById("resultado").innerHTML = "No space!"
		document.getElementById("resultado2").innerHTML = "Press on the AC to reset"
	} else {
		if (maxdigitos >= 22) {
			document.getElementById('resultado')
		} else if (maxdigitos >= 13) {
			document.getElementById('resultado')
		}

		num1 = (parseFloat(document.getElementById("resultado").innerHTML += n))
	}
	maxdigitos++
}

function opBasic(n) {
	switch (n) {
		case '+':
			op = '+'
			break;

		case '-':
			op = '-'
			break;

		case 'x':
			op = 'x'
			break;

		case '/':
			op = '/'
			break;

		case '%':
			op = '%'
			break;

		case '^':
			op = '^'
			break;
		case '√':
			op = '√'
			break;
		case '!':
			op = '!'
			break;
	}
	maxdigitos = 0
	document.getElementById("resultado2").innerHTML = `${num1} ${op} `
	num1 = (parseFloat(document.getElementById("resultado").innerHTML))
	num2 = num1
	document.getElementById("resultado").innerHTML = ''
}

function valorResult() {
	switch (op) {
		case '+':
			value = num2 + num1
			break;

		case '-':
			value = num2 - num1
			break;
		case 'x':
			value = num2 * num1
			break;
		case '/':
			if (!exception()) {
				value = num2 / num1
			}
			break;
		case '%':
			value = ((num2 / 100) * num1)
			break;
		case '^':
			value = Math.pow(num2, num1)
			break;
		case '√':
			value = Math.sqrt(num1)
			break;
		case '!':
			value = fact(num1)
			break;
	}
	var tamanho = value.toString().length

	if (tamanho >= 15) {
		document.getElementById('resultado').style.fontSize = '25px'
		value = Math.trunc(value)
	}
	document.getElementById("resultado").innerHTML = value
	document.getElementById("resultado2").innerHTML = ''
	num1 = value
	num2 = 0
	maxdigitos = 0
	op = 0
	resultado = 0
	return num1
}

function fact(num){
    if (num === 0){ 
		return 1; 
	}
    else{ 
		return num * fact( num - 1 ); 
	}
}

function exception() {
	if (num2 == 0 && num1 == 0) {
		value = 'Result undefined😕'
		console.log(value)
		setTimeout(function () {
			clean();
		}, 1000)
	} else if (num1 == 0) {
		value = 'Unable to divide by zero😕'
		setTimeout(function () {
			clean();
		}, 1000)
	}
	return true;
}