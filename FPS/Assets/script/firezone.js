#pragma strict
var fire:boolean;
var time:float;
var muzzle:Transform;
var firepoint:GameObject;
var shotsound:AudioSource;
var Player:GameObject;
var Gun:GameObject;
function Start () {
fire=false;
time=0;
}

function OnTriggerEnter(theCollider:Collider)
{
if(theCollider.gameObject.tag=="Player")
{
fire=true;	
}
}

function OnTriggerExit(theCollider:Collider)
{
if(theCollider.gameObject.tag=="Player")
{
fire=false;
time=0;
}
}

function Update () {
	if((fire)&&(Gun!=null))
	{
		if(time<=0)
		{
	Player.SendMessage("DoDamage",10);
	var rotationpoint:Quaternion=firepoint.transform.rotation;
	rotationpoint.eulerAngles.z-=90;
	Instantiate(muzzle,firepoint.transform.position,rotationpoint);
	shotsound.Play();
	time=1;
		}
	else
	time-=Time.deltaTime;
	}

}