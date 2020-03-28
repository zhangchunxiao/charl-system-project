function Person(name){//chuancan
	var _this={}
	_this.name=name;
	_this.sayHello = function (){
		
		alert("hello person"+_this.name);
	}
	return _this;
}
function Teacher(name){
	var _this=Person(name) ;//实例化时候也要传递参数
	var superSay=_this.sayHello;//引用父类
	_this.sayHello =function(){
		
		superSay.call(_this);
		alert("THello"+_this.name);
	}
	/* _this.sayHello= function(){
		alert("Thello!");
	} */
	return _this; 
}
/* var t=Teacher("+ilende");
t.sayHello(); */
(function(){
	var n="iLeds";
	function Person(name){//chuancan
		var _this={}
		_this.name=name;
		_this.sayHello = function (){
			
			alert("hello person"+_this.name+n);
		}
		return _this;
	}
	window.Person =Person;
}());
var t=Teacher("+ilende");
t.sayHello();