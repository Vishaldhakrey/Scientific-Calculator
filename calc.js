function addChar(input, character) {

    if(input.value == null || input.value == '0') {
        input.value = character;
    }
    else{
        input.value += character;
    }
}

function updateClearButtonLabel() {
    const clearButton = document.getElementById('change');
    clearButton.textContent = isTyping ? 'CE' : 'C';
}

function checkNum(str){
    for(var i=0; i<str.length; i++) {
        var ch = str.charAt(i);
        if(ch < '0' || ch > '9'){
            if(ch != '+' && ch != '-' && ch != '*' && ch != '/' && ch != '%'
            && ch != '('&& ch != ')' && ch != '.'){
                alert("invalid entry!");
                return false;
            }
        }
    }
    return true;
}
function changeSign(input){
    if(input.value.substring(0, 1) == "-")
        input.value = input.value.substring(1, input.value.length);
    else
        input.value = "-" + input.value;
}

function cos(form) {
	form.display.value = Math.cos(form.display.value);
}

function sin(form) {
	var degrees = parseFloat(form.display.value);

    // Input validation
    if (isNaN(degrees)) {
        form.display.value = "Invalid input";
        return;
    }

    var radians = (degrees * Math.PI) / 180; // Convert degrees to radians
    var sineValue = Math.sin(radians);

    form.display.value = sineValue.toString();
}

function tan(form) {
	form.display.value = Math.tan(form.display.value);
}

function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
}

function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}
function ln(form){
    form.display.value = Math.log(form.display.value);
}

function exp(form){
    form.display.value = Math.exp(form.display.value);
}
var val = 0.0;
function percent(input){
    val = input.value;
    input.value = (input.value + "%");
}

function fact(form){
    var n=parseInt(form.display.value);
    if(isNaN(n) || n<0){
        form.display.value = 'invalid input';
        return;
    }
    var factorial=1;
    for( i=1; i<=n; i++){
        factorial*=i;
    }
    form.display.value = factorial.toString();
}

function deleteChar(input){
    input.value = input.value.substring(0, input.value.length-1);
    if(input.value == ""){
        input.value = "0";
    }
}

function compute(form) {
    try {
    const result = new Function('return ' + form.display.value)();
    form.display.value = result;
    } catch (error) {
    form.display.value = 'Error';
    }
}
