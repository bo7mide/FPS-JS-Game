#pragma strict
var minemap:boolean;
public var explosion:Transform;
var explosionsound:AudioSource;
function Start () {
this.gameObject.renderer.enabled=false;
minemap=false;

}

function OnTriggerEnter(theCollider : Collider)
{
  if(theCollider.gameObject.tag=="Player")
  {
	  Instantiate(explosion,this.gameObject.transform.position,Quaternion.identity);
	  explosionsound.Play();
	  theCollider.gameObject.SendMessage("dieM");
  }
}

function Update () {
if((Input.GetKeyDown("f"))&&(boxarea.opened))
{
	if(minemap==false)
	{
this.gameObject.renderer.enabled=true;
minemap=true;
	}	
    else
    {
	this.gameObject.renderer.enabled=false;
	minemap=false;
	}
}
}