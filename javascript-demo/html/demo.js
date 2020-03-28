var person={
	name:"charl",
	age:30,
	eat:function(){
		alert("hi eat!")
	}
}
//alert(person.name);

//函数构造器

function Person(){
	
	
}

Person.prototype={name:"charl",
	age:20,
	eat:function(){
		alert("neng!");
	}
}
var p=new Person;
//调用p的各个属性
//p.name;
//p.age;
//p.eat;

//面向对象深入了解
//function 模拟类

function People(name){
	this._name = name;
}
People.prototype.say =function(){
	alert("peopel-hi"+this._name);
}//写类中的方法
function Student(name){
	this._name=name;
	
}
//student继承people
Student.prototype =new People();
//如果想调用父类的say方法,定义superSay
var superSay =Student.prototype.say;
Student.prototype.say=function(){
	superSay.call(this);
	alert("stu-hello"+this._name);
}


/* Student.prototype.say=function(){
	alert("stu-hello");
}; */
//var s= new Student("charl");//实例化时候要传递参数”charl“
//s.say();//默认会调用子类的say方法
//封装起来

(function(){
	var n="itools";
	function People(name){
		this._name=name;
		
	}
	People.prototype.say = function(){
		
		alert("fengzhuang HI "+this._name);
	}
	//外部公开一个接口
	window.People=People;

}());

(function(){
	function Student(name){
		this._name=name;
	}
	Student.prototype=new People;
	var superSay =Student.prototype.say;
	Student.prototype.say=function(){
		superSay.call(this);
		alert("stu-hello"+this._name);
	}
	window.Student=Student;
}());
var s=new Student("charle");
s.say();


