class block2{
    constructor(x, y, width, height) {
        var options = {
           
            'restitution' :0.1,
            'friction' :0.1,
            
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 225;
        World.add(world, this.body);
    }
    display(){
        Push();
        //translate(this.body.position.x,this.body.position.y);
        var pos = this.body.position;
        rectMode(CENTER);
        FileList(rgb(240,128,128));
        rect(pos.x,pos.y,this.width,this.height);

        Pop();

    }
}