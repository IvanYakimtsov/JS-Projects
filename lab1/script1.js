/**
 * Created by Ivan Yakimtsov.
 */
window.onload = function(){
	
	
	var time;
	
    function Pair(val1,val2 ){
		
	this.val1 = val1;
	this.val2 = val2;
	this.currentState = [0,0,0,0,0,0,0,0];
	
	this.val1BaseTwo;
	this.val2BaseTwo;
	this.currentStateValueAfterShift;
	this.currentStateValueBeforShift;
	
	
	this.operation = function(index){
		this.step++;
		index++;
		var buf = 0;
		var count = 0;
		if(this.val2[this.val2.length-index]){
			var i = this.val1.length-1;
			buf = 0;
			while(i>-1){
			count = 0;

			if(this.val1[i]) count++;
			if(this.currentState[i]) count++;
			if(buf) count++;
			if(buf) buf = 0;
			
			
			if(count % 2 == 0) this.currentState[i] = 0;
				else this.currentState[i] = 1;

			if(count>1) buf = 1;
		
			
			i--;	
			}
			
		}
		
		this.currentStateValueBeforShift="";
		for(var i=0; i<this.currentState.length;i++){
			this.currentStateValueBeforShift+=this.currentState[i];
		}
		
		if(buf) this.currentState.unshift(1);
			else this.currentState.unshift(0);
			
		this.currentStateValueAfterShift="";
		for(var i=0; i<this.currentState.length;i++){
			this.currentStateValueAfterShift+=this.currentState[i];
		}
		
		
	}
	};
	
	var paramValue = 1;
	if(window.location.href.split("?")[1].split("=")[1]) paramValue = window.location.href.split("?")[1].split("=")[1];
	paramValue--;
	var myForm = document.getElementsByName("lastForm");
	var start = myForm[0].children[0];
	
	for(var i = 0; i<paramValue; i++){
		
		var div1 = document.createElement('div' + i + 'r');
		div1.innerHTML = "<input type =\"number\" class=\"number_inp_left\" name=\"number\" class=\"placeholder\" placeholder=\"число\">";
		myForm[0].insertBefore(div1,start);
		div1.innerHTML += "<input type =\"number\" class=\"number_inp_right\" name=\"number\" class=\"placeholder\" placeholder=\"число\">";
		myForm[0].insertBefore(div1,start);
		
	}


	
	var pairToCount = [];
	var states = []
	
	function Result(arg1,arg2,arg3){
		this.val1BaseTwo = arg1;
		this.val2BaseTwo = arg2;
		this.currentStateValue = arg3;
	};
	//--------------------------------------------------------------------------------------
	function startCalculation(){
		var table=document.getElementById('mainTable');
		table = table.firstChild;
		
		var temp_obj = [];
		var temp_rez = [];
		
		for(var i=0;i<8;i++){
			temp_obj = [];
			for(var j = 0; j< pairToCount.length; j++) {
			pairToCount[j].operation(i);
			temp_rez=[];
			temp_rez.push(new Result(pairToCount[j].val1BaseTwo,pairToCount[j].val2BaseTwo,pairToCount[j].currentStateValueBeforShift));
			temp_rez.push(new Result(pairToCount[j].val1BaseTwo,pairToCount[j].val2BaseTwo,pairToCount[j].currentStateValueAfterShift));
			temp_obj.push(temp_rez);
			}
			states.push(temp_obj);
		}
		
		var index = 0;
		
	/*	for(var numberOfObject = 0; numberOfObject<pairToCount.length*2;numberOfObject+=2){
			index=numberOfObject+1;
			var count = 0;
			for(var operation = 0; operation<states.length;operation++){
			 table.childNodes[index].childNodes[count].innerHTML="A: "+states[operation][numberOfObject].val1BaseTwo+ "<br>" +" B: "
			 +states[operation][numberOfObject].val2BaseTwo + "<br>" +"result: "+states[operation][numberOfObject].currentStateValue + "<br>"+
			 "Time: " + (index);	
			 index++;
			 count++;
			 table.childNodes[index].childNodes[count].innerHTML="A: "+states[operation][numberOfObject+1].val1BaseTwo+ "<br>" +" B: "
			 +states[operation][numberOfObject].val2BaseTwo + "<br>" +"result: "+states[operation][numberOfObject+1].currentStateValue + "<br>"+
			 "Time: " + (index);	
			 index++;
			 count++;
			}
		}*/


		for(var numberOfObject = 0; numberOfObject<pairToCount.length;numberOfObject++){
			index=numberOfObject+1;
			var count = 0;
			for(var operation = 0; operation<states.length;operation++){
			 table.childNodes[index].childNodes[count+1].innerHTML="A: "+states[operation][numberOfObject][0].val1BaseTwo+ "<br>" +" B: "
			 +states[operation][numberOfObject][0].val2BaseTwo + "<br>" +"result: "+states[operation][numberOfObject][0].currentStateValue + "<br>"+
			 "Time: " + (index)*time;	
			 index++;
			 count++;
			 table.childNodes[index].childNodes[count+1].innerHTML="A: "+states[operation][numberOfObject][1].val1BaseTwo+ "<br>" +" B: "
			 +states[operation][numberOfObject][1].val2BaseTwo + "<br>" +"result: "+states[operation][numberOfObject][1].currentStateValue + "<br>"+
			 "Time: " + (index)*time;	
			 index++;
			 count++;
			}
	
		}
	}
	
	//--------------------------------------------------------------------------------------------
	
	
	
	
	
	
	document.getElementById("start").onclick = function(){
		
		function generateTable(){
			paramValue;
		    var table=document.getElementById('mainTable');
			table.innerHTML = "<tr></tr>";
			table = table.firstChild;
			
			 for (var i=0; i<16+paramValue; i++){
				 table.innerHTML += "<tr></tr>";

			 }		 
		
		
			
			 for (var i=0; i<17+paramValue; i++){
				 
				 for (var j=0; j<17; j++)  table.childNodes[i].innerHTML += "<td></td>";
				 
		
			 }
			 
			 for (var i=1; i<17; i++) {
				 table.firstChild.childNodes[i].innerHTML = "Step " + i;
				
			}
			
			table.firstChild.childNodes[0].innerHTML = "Pair";
			
			for (var i=0; i<pairToCount.length; i++){
				table.childNodes[i+1].childNodes[0].innerHTML = "A: "+pairToCount[i].val1BaseTwo+ "<br>" +" B: "
			 +pairToCount[i].val2BaseTwo + "<br>" +"result: " + "00000000" + "<br>" + "Time: " + 0;	
			}
			
		}
		
		
		function valParsToBaseTwo(val){

		val = parseInt(val);
		val = val.toString(2);
		
		var value = [];
		
		
		for(var i = 0;i<val.length;i++){
			value.push(parseInt(val[i]));
		}
		
		
		
		if(value.length < 8){
			var length = 8 - value.length;
			for(var i = 0;i < length;i++) value.unshift(0);
				
		}
		
		return value;
		}
		
		var elementsValue = document.forms["slick-login"].elements["number"];
		
		
		for(var i = 0; i<elementsValue.length-1; i+=2){
			
			if(elementsValue[i].value>255 || elementsValue[i+1].value>255) {
				alert("ведено число больше 255");
				elementsValue[i].value = null;
				elementsValue[i+1].value = null;
				return;

			}
			
	      
		}

		var val1;
		var val2;
		var x;
		for(var i = 0; i<elementsValue.length-1; i+=2){
			val1 = valParsToBaseTwo(elementsValue[i].value);
			val2 = valParsToBaseTwo(elementsValue[i+1].value);
			pairToCount.push(new Pair(val1,val2));
			x = i+2;
		}
		
		time = elementsValue[x].value;
		
		
		for(var i = 0; i<pairToCount.length; i++){
			pairToCount[i].val1BaseTwo="";
			for(var j=0; j<pairToCount[i].val1.length;j++){
				pairToCount[i].val1BaseTwo+=pairToCount[i].val1[j];
			}
			pairToCount[i].val2BaseTwo="";
			for(var j=0; j<pairToCount[i].val2.length;j++){
				pairToCount[i].val2BaseTwo+=pairToCount[i].val2[j];
			}
		}
		
		var el = document.getElementById("slick-login");
		el.parentNode.removeChild(el);
		
		generateTable();
		
		startCalculation();
		
		
	}

}

