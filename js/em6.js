
class method{

	constructor(e){

		this.metd = e;
	}

	set setbegin(value){

		this.metd.Go = value;
	}

	get begin(){

		this.metd.Go();
	}
}

class supers{

	Go(){

		console.log("go supers");
	}
}


class f extends supers{

	Go(){
		alert("f");
		console.log("go f");
	}
}

class g extends supers{

	Go(){
		console.log("go g");
	}
}


class fac extends supers{

	constructor(ret){
		super();

		if(ret=="f")
			return new f;
		if(ret=="g" )
			return new g;
	}

}