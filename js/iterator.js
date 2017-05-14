//iterator

//E1
class RangeIterator {

	constructor(start,stop){

		this.value = start;
		this.stop = stop;
	}
	
	[Symbol.iterator](){ return this; }

	next(){
		
		var value = this.value;
		if( value < this.stop ){

			this.value++;
			return {done: false , value: value}
		}else{

			return {done:true , value: undefined}
		}
	}

}

function range(start, stop){

	return new RangeIterator(start, stop);
}

for(let value of range(0,3)){

	console.log(value);
}


//E2

let itertable ={

	0 : 'a',
	1 : 'b',
	2 : 'c',

	length : 3,
	[Symbol.iterator] :Array.prototype[Symbol.iterator]


};

for(let item of itertable){

	console.log(item);
}

//E3

//1

//genrator
let generator =function*(){

	yield 1;
	yield* [1,2,3];
	yield 5;
}

var iterator = generator();

iterator.next();
iterator.next();