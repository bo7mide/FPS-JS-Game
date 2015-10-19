#pragma strict
var explosion:Transform;
var point:Vector3;
var hitRotation:Quaternion;
var blood:Transform;
var shotsound:AudioSource;

function Start () {

}

function Explode()
{
var instantiatedExplosion=Instantiate(explosion,point,hitRotation);
}

function Update () {
if (Input.GetButtonDown("Fire1"))
 {
	shotsound.Play();
	var hit:RaycastHit;
	var fwd=transform.TransformDirection(Vector3.forward);
	if(Physics.Raycast(this.transform.position,fwd,hit,100))
	{
	point =hit.point;	
	hitRotation=Quaternion.FromToRotation(Vector3.up,hit.normal);
	if(hit.transform.tag=="ennemy")
	{
	Instantiate(blood,point,hitRotation);
	hit.transform.SendMessage("dodamage",30);
	}
	else
	{
	Explode();
	}
	} 
 }
}