#pragma strict
var canopen:boolean;
var action_messsage:GUIText;
static var opened:boolean;
var time:float;
function Start () {
canopen=false;
opened=false;
time=-5;
}

function OnTriggerEnter(theCollider : Collider)
{
  if (theCollider.gameObject.tag=="Player")
  {
	canopen=true;  
  }
}

function OnTriggerExit(theCollider : Collider)
{
  if (theCollider.gameObject.tag=="Player")
  {
	canopen=false; 
  }
}

function Update () {
	if((canopen)&&!(opened))
	{
  action_messsage.text="Hit action to open";
	
	}
	else if((!canopen)&&!(opened))
	{
		action_messsage.text="";
	
	}
  if((canopen)&&(Input.GetKeyDown("e"))&&!(opened))
  {
	opened=true;
	time=3;
  }
  if ((time>=0)&&(opened))
  {
  action_messsage.text="Hit F to show mines positions";
  time-=Time.deltaTime;
  }
  else if (time>-5)
  {
  action_messsage.text="";
  }
}