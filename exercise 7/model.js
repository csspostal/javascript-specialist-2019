var Car = function(type, make, model, year) {
    this.type = type;
    this.make = make;
    this.model = model;
    this.year = year;
    this.speed = 0;
    
    Car.prototype.accelerate = function()
    {
        if(this.speed < 100){
            this.speed += 10;
            console.log("Speed is now: " + this.speed);
        } else {
            console.log("Top speed reached");
        }
    },
    
        Car.prototype.brake = function()
    {
        if(this.speed > 10 )
            {
                this.speed -= 10;
                console.log("Speed is now: " + this.speed);
            } else {
                this.speed = 0;
                console.log("Speed is now: " + this.speed);
            }
        
    }
}