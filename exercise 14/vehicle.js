class Vehicle {
    constructor(vehicleColor, vehicleDirection, vehicleSpeed, vehicleTopSpeed){
        
        this._vehicleColor = vehicleColor;
        this._vehicleDirection = vehicleDirection;
        this._vehicleSpeed = vehicleSpeed;
        this._vehicleTopSpeed = vehicleTopSpeed;
        this._vehicleEngineStatus = false;
        
    }
    // methods
    
    //turn on vehicle engine
    turnOn(){
        this._vehicleEngineStatus = true;
        const vehicleEngineStatus = "The engine is running";
        return vehicleEngineStatus;
    }
    
    //turn off vehicle engine
    turnOff(){
        this._vehicleEngineStatus = false;
        const vehicleEngineStatus = "The engine is not running";
        return vehicleEngineStatus;
    }
    
    //accelerate vehicle if speed is between 1 and top speed
    
    accelerateVehicle(){
        if(this._vehicleSpeed > 0 && this._vehicleSpeed <= this._vehicleTopSpeed){
            
            const vehicleSpeed = `The vehicle is accelerating to a speed of ${this._vehicleSpeed} mph!`; 
            return vehicleSpeed;
        } else {
            const vehicleSpeed = `Speed selected is not valid. You must select a speed of 1 to ${this._vehicleTopSpeed} mph!`;
            return vehicleSpeed;
        }
        
    }
    
    //brake vehicle brings vehicle to s complete stop if speed is greater than 0.
    
    brake(){
        
        if(this._vehicleSpeed > 0 ) {
            
            const vehicleBraking = `The Vehicle is braking from ${this._vehicleSpeed} mph to 0 mph and making a complete stop!`;
            return vehicleBraking;
        } else {
            const vehicleBraking = "Car is already stopped and in park. You can just shut the engine off now";
            return vehicleBraking;
        }
        
    }
    
        // check to see if new direction value is within a valid range (0 to 359)
        set vehicleDirection(vehicleDirection) {
        if(vehicleDirection >= 0 && vehicleDirection <= 359) {
            this._vehicleDirection = vehicleDirection;
            return vehicleDirection
        } else {
            console.log("Unless we're in an anlternate direction you must pick a degree value of 0 to 359");
        }
    }
    
    get vehicleDirection(){
        return this._vehicleDirection;
    }
    
    //turn vehicle left
    
    turnLeft(){
        
            
     
        const vehicleTurnLeft = `The vehicle is turning Left by ${this._vehicleDirection} degrees.`;
        return vehicleTurnLeft;
   
    }
    
    // turn vehicle right
    
    turnRight() {
        const vehicleTurnRight = `The vehicle is turning Right by ${this._vehicleDirection} degrees.`;
        return vehicleTurnRight;
        
    }

    
}

//sub class of Vehicle for Buss

class BusVehicle extends Vehicle {
    constructor(vehicleColor, vehicleDirection, vehicleSpeed, vehicleTopSpeed, vehicleNumberOfSeats){
        super(vehicleColor, vehicleDirection, vehicleSpeed, vehicleTopSpeed);
        this._vehicleNumerofSeats = vehicleNumberOfSeats;
    }
}

//sub classs of Vehicle for ambulance

class AmbulanceVehicle extends Vehicle {
    constructor(vehicleColor, vehicleDirection, vehicleSpeed, vehicleTopSpeed, vehicleSirensStatus){
        super(vehicleColor, vehicleDirection, vehicleSpeed, vehicleTopSpeed);
        this._vehicleSirensStatus = vehicleSirensStatus;
    }
    
    turnSirensOn(){
        this._vehicleSirensStatus = true;
        const sirensOn = "The Sirens and lights are on";
        return sirensOn;
    }
       
    
    turnSirensOff(){
        
        this._vehicleSirensStatus = false;
        const sirensOff = "The Sirens and lights are off";
        return sirensOff;
        
    }
}