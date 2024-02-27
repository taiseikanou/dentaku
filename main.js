var result = "";

var is_calc = false;

result = document.getElementById('result');

function clear_key(){
	result.value = "0";
	is_calc = false;
}

function number_key(val){
	if(is_calc)	result.value = "0";
	is_calc = false;	

	if (val === '.') {
		if (is_decimal() ) {
            result.value = result.value.slice(0, -1) + val;
        }
		else if(!is_ope_last())
		    result.value += val;
		} else if((result.value =="0" && val == "0")||(result.value =="0" && val == "00")){
			result.value = "0";
		} else if(result.value == "0" && val == "."){
			result.value = "0.";
		} else if(result.value == "0"){
			result.value = val;
		} else {
			result.value += val;
		}
}

function is_decimal(){
	return ["."].includes(result.value.slice(-1));
}

function operator_key(val){
	if(is_calc)	is_calc = false;
	
	if(is_ope_last()){
		result.value = result.value.slice(0, -1) + val;
	} else {
		result.value += val;
	}
}

function equal_key(){
	if(is_ope_last())	result.value = result.value.slice(0, -1);

	var temp = Function("return " + result.value)();

	if(temp == Infinity || Number.isNaN(temp)){
		result.value = "Error";
	}else{
		result.value = temp;
		is_calc = true;
	}
}

function is_ope_last(){
	return ["+","-","*","/"].includes(result.value.slice(-1));
}