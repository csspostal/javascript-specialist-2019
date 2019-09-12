var  GamePlayer =  function(name, livesLeft, score, speed, gridLocationX, gridLocationY){
    
    //Properties
    
    this.name = name;
    this.livesLeft = livesLeft,
    this.score = score;
    this.speed = speed;
    this.gridLocationX = 0;
    this.gridLocationY = 0;
    
    //Methods
    
    //
    GamePlayer.prototype.die = function()
        
    {
        //return a random number between 0 and 9 for the 10
        //rows and columns of the game board on x and y axis
        // will use this value to represent the move on the x or y axis
           return score = Math.floor(Math.random() * 10);
            
           
    }
    
    GamePlayer.prototype.moveLeft = function()
    
    {

        if (this.gridLocationX > 0) {
            
            this.gridLocationX = this.gridLocationX - 1;
        }
        
    }
    
    GamePlayer.prototype.moveRight = function()
    
    {
        
        if (this.gridLocationX < 9) {
            
            this.gridLocationX = this.gridLocationX + 1;
        }
        
        
    }
    
    GamePlayer.prototype.moveUp = function()
    
    {
        
       if (this.gridLocationY > 0){
           
           this.gridLocationY = this.gridLocationY - 1;
       } 
        
        
    }
    
    GamePlayer.prototype.moveDown = function()
    
    {
        
        if (this.gridLocationY < 9) {
            this.gridLocationY = this.gridLocationY + 1; 
        }
        
        
    }
   
}