// Minutes

function minsec(){
     let a = parseInt(document.getElementById("operandOne").value);
     let b = 60;
     alert(a*b);
}

function minhrs(){
	let a = parseInt(document.getElementById("operandOne").value);
    let b = 60;
    alert(a/b);
}    

function minday(){
	let a = parseInt(document.getElementById("operandOne").value);
    let b = 1440;
    alert(a/b);
}

// Seconds

function secmin(){
     let a = parseInt(document.getElementById("operandTwo").value);
     let b = 60;
     alert(a/b);
}

function sechrs(){
	let a = parseInt(document.getElementById("operandTwo").value);
    let b = 3600;
    alert(a/b);
}    

function secday(){
	let a = parseInt(document.getElementById("operandTwo").value);
    let b = 86400;
    alert(a/b);
}

// Hours

function hrssec(){
     let a = parseInt(document.getElementById("operandThree").value);
     let b = 3600;
     alert(a*b);
}

function hrsmin(){
	let a = parseInt(document.getElementById("operandThree").value);
    let b = 60;
    alert(a*b);
}    

function hrsday(){
	let a = parseInt(document.getElementById("operandThree").value);
    let b = 24;
    alert(a/b);
}

// Days

function daysec(){
     let a = parseInt(document.getElementById("operandFour").value);
     let b = 86400;
     alert(a*b);
}

function daymin(){
	let a = parseInt(document.getElementById("operandFour").value);
    let b = 1440;
    alert(a*b);
}    

function dayhrs(){
	let a = parseInt(document.getElementById("operandFour").value);
    let b = 24;
    alert(a*b);
}