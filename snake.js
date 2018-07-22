function snake(){
    this.x=0;
    this.y=0;
    this.xspeed=1;
    this.yspeed=0;
    this.total = 0;
    this.tail = [];
    
this.update=function()
{
if (this.total === this.tail.length)
    {
    for (i = 0;i < this.total-1;i++)
        {
        this.tail[i]=this.tail[i+1];
    }}
 this.tail[this.total-1]=createVector(this.x,this.y);
this.x = this.x + this.xspeed*scl;
this.y = this.y + this.yspeed*scl;
this.x = constrain(this.x,0,width-scl);
this.y = constrain(this.y,0,height-scl);

}

this.death= function()
{
    for (i = 0;i < this.tail.length-1;i++)
        {
            pos = this.tail[i];
         var f = dist(this.x,this.y,pos.x,pos.y);
    if (f < 1)
        {
            this.total = 0;
    this.tail = [];
        }
}}

this.eat=function(pos)
{
    var r = dist(this.x,this.y,pos.x,pos.y);
    if (r < 1)
        {
    this.total++;
        return true;
        }
            else
        return false;
}

this.dir=function(x,y)
{
    this.xspeed=x;
    this.yspeed=y;
}


this.show=function()
{
    fill(255);
     for (i = 0;i < this.total;i++)
        {
         rect(this.tail[i].x,this.tail[i].y,scl,scl);
    }
rect(this.x,this.y,scl,scl);
}
}

    