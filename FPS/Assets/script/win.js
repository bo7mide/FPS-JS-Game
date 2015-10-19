#pragma strict
var canuse:boolean;
var action:GUIText;
var won:boolean;
var player:GameObject;
var time:GameObject;
var win_text:GUIText;
static var ennemy_number:int;
function Start () {
canuse=false;
ennemy_number=7;
}

function OnTriggerEnter(theCollider:Collider)
{
  if(theCollider.gameObject.tag=="Player")
  {
	  canuse=true;
  }
}

function OnTriggerExit(theCollider:Collider)
{
  if(theCollider.gameObject.tag=="Player")
  {
	  canuse=false;
  }
}

function Update () {
if(!won)
{
	if(!canuse)
	{
	  action.text="";	
	}
	else
	{
	  if(ennemy_number!=0)
	  {
		action.text="There are ennemies nearby";  
	  }
	  else
	  {
		action.text="Hit action to use"; 
		if(Input.GetKeyDown("e"))
		{
		won=true;
		player.SendMessage("finished");
		time.SendMessage("finished");
		}
	  }
	}
}
else
{
win_text.text="Congratulation";	
action.text="";
}

}