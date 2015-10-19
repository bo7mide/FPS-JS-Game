#pragma strict
var falsh:Transform;
function Start () {

}

function Update () {
	if (Input.GetButtonDown("Fire1"))
 {
	var rotationpoint:Quaternion=this.transform.rotation;
	rotationpoint.eulerAngles.x+=90;
	var muzzle:Transform=Instantiate(falsh,this.transform.position,rotationpoint);
	muzzle.parent=this.transform;
 }

}