#pragma strict
var life:int;
function Start () {
life=100;
}

function dodamage(damage:int)
{
life-=damage;
if(life<=0)
{
win.ennemy_number--;
Destroy(this.gameObject);	
}
}
function Update () {

}