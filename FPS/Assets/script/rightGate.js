#pragma strict
var canopen:boolean;
var action:boolean;
var canAct:boolean=true;
var closed:boolean=true;
var opened:boolean;
var dooraction:GUIText;
var won:boolean;
function Start () {
won=false;
}
function canOpen(value:boolean) 
{
 canopen=value;	
}

function Update () {
	if(!won)
	{
	if (Input.GetKeyDown("e")&&(canAct)&&(canopen))
	{
	  action=true;	
	}
	if(((canopen)||(!canAct))&&(action)&&(closed))
	{
	  if(this.transform.position.x>=-2.5)
	  {
		this.transform.position.x-=Time.deltaTime;
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
	  if(this.transform.position.x<=0.08)
	  {
		this.transform.position.x+=Time.deltaTime;
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

	
	//if((canopen)&&(!canAct))
	//   dooraction.text="";
	if((canopen)&&(canAct)&&(closed))
	   dooraction.text="Press action to open the gate";
	else if((canopen)&&(canAct)&&(opened))
	   dooraction.text="Press action to close the gate";
	else
	   dooraction.text="";
	}
	else
	{
	dooraction.text="";	
	}
}