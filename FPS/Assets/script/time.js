#pragma strict
var begin:boolean;
var minutes:int;
var secondes:float;
var won:boolean;
var time_text:GUIText;
var player:GameObject ;
function Start () {
begin=false;
minutes=4;
secondes=59.99;
won=false;
}
function finished()
{
won=true;	
}

function beginTime()
{
begin=true;	
}

function Update () {
if(!begin)
{
time_text.text="";	
}
else
{if(!won)
{
    if(minutes>=0)
	{
	secondes-=Time.deltaTime;
	   if(parseInt(secondes)<=0)
	   {
		   secondes=59.99;
		   minutes--;
	   }
	time_text.text=minutes+":"+parseInt(secondes);
	}
	else
	{
		player.SendMessage("dieE");
		time_text.text="0:0";
	}
}
}
}