let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let inp3 = document.getElementById('inp3');
let btn = document.getElementById('btn');
let h3 = document.getElementById('h3')
let span1 = document.getElementById('span1');
let span2 = document.getElementById('span2');
let span3 = document.getElementById('span3');
let span4 = document.getElementById('span4')
let clear = document.getElementById('clear')
function f(){
    setTimeout(() => {
        h3.innerText = '';
    }, 1000);
}
btn.onclick = function(){
    if(inp1.value === ""){h3.innerText = 'Please Enter the basic salary before any deductions';f(); return;}
    if(inp2.value === ""){h3.innerText = 'Please Enter the percentage of salary deduction for retirement'; f(); return;}
    if(inp3.value === ""){h3.innerText = 'Please Enter the tax rate'; f();return;}
    acount();
    setTimeout(() => {
        inp1.value ='';
        inp2.value = '';
        inp3.value = '';
    }, 1000);
}
function acount(){
    let Retirement = (Number(inp2.value) / 100) * Number(inp1.value)
    console.log(Retirement)
    let Taxableamount = Number(inp1.value) - Retirement;
    let tax = (Number(inp3.value) / 100) * Taxableamount;
    console.log(tax);
    let Totaldeductions = tax + Retirement;
    console.log(Totaldeductions)
    let result = Number(inp1.value) - Totaldeductions;
    console.log(result)
    span1.innerText = 'The total deductions are: ' + Math.round(Totaldeductions);
    span2.innerText = 'Retirement deduction amount: ' + Math.round(Retirement);
    span3.innerText = 'Tax deduction amount: ' + Math.round(tax);
    span4.innerText = 'Final net salary: ' + Math.round(result);
    clear.style.display = 'inline';
}
clear.onclick = function(){
    span1.innerText = '';
    span2.innerText = '';
    span3.innerText = '';
    span4.innerText = '';
    clear.style.display = 'none'
}