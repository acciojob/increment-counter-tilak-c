//your JS code here. If required.
const p=document.getElementById(counter);
const incrementBtn=document.getElementById('increment');
incrementBtn.addEventListener("click",function(){
	let currentValue=parseInt(counterElement.textContent);
	alert(currentValue);
	counterElement.textContent=currentValue+1;
})