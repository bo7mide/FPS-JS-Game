#pragma strict
var canopen:boolean;
var action:boolean;
var canAct:boolean=true;
var closed:boolean=true;
var opened:boolean;
function Start () {

}
function canOpen(value:boolean) 
{
 canopen=value;	
}

function Update () {
	if (Input.GetKeyDown("e")&&(canAct)&&(canopen))
	{
	  action=true;	
	}
	if(((canopen)||(!canAct))&&(action)&&(closed))
	{
	  if(this.transform.position.x<=6.2)
	  {
		this.transform.position.x+=Time.deltaTime;
		canAct=false;
	  }	
	  else
	  {
		  canAct=true;
		  action=false;
		  opened=true;
		  closed=false;
	  }
	}
	
	if(((canopen)||(!canAct))&&(action)&&(opened))
	{
	  if(this.transform.position.x>=3.6)
	  {
		this.transform.position.x-=Time.deltaTime;
		canAct=false;
	  }	
	  else
	  {
		  canAct=true;
		  action=false;
		  opened=false;
		  closed=true;
	  }
	}

}