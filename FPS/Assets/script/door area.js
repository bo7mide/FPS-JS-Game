#pragma strict
var leftGate:GameObject;
var rightGate:GameObject;
var alarm:AudioSource;
var time:GameObject;
var played:boolean;
function Start () {
played=false;
}

function Update () {

}

function OnTriggerEnter(theCollider : Collider)
{
 	if(theCollider.gameObject.tag=="Player")
	{
	  leftGate.SendMessage("canOpen",true);	
	  rightGate.SendMessage("canOpen",true);	
	if(!played)
	{
	time.SendMessage("beginTime");
	alarm.Play();
	played=true;
	}
	}
}
function OnTriggerExit(theCollider : Collider)
{
 	if(theCollider.gameObject.tag=="Player")
	{
	  leftGate.SendMessage("canOpen",false);	
	  rightGate.SendMessage("canOpen",false);	
	
	}
}