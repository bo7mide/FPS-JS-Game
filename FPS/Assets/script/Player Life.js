#pragma strict
var life:int;
var life_text:GUIText;
var Gun:GameObject;
function Start () {
life=100;
}

function DoDamage(damage:int)
{
	life-=damage;
	if(life<=0)
	this.SendMessage("dieE");
}

function Update () {
if(Gun!=null)
life_text.text="Life:"+life;
else
life_text.text="";

}