//your JS code here. If required.
const counterElement=document.getElementById('counter');
const incrementBtn=document.getElementById('incrementBtn');
incrementBtn.addEventListener("click",function(){
	let currentValue=parseInt(counterElement.textContent);
	alert(currentValue);
	counterElement.textContent=currentValue+1;
})