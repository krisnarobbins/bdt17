var dog ={
		barkCount = 0,
    bark : function() {
    	this.barkCount++;
    }
}

dog.bark()
var bark = dog.bark;
bark();