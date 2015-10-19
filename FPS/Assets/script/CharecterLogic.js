#pragma strict
var characterController:CharacterController;
var deadbymine:boolean;
var deadbyennemi:boolean;
var retry:GUIText;
var gun:GameObject;
var DeathMsg:GUIText;
var won:boolean;
var time:float;
private var moveDirection:Vector3=Vector3.zero;
Screen.lockCursor=true;
var exploded:boolean;
var angle:float;		
function Start () {
won=false;
deadbyennemi=false;
deadbymine=false;
exploded=false;
angle=0;
time=0.3;
}

function finished()
{
won=true;	
}

function dieM()
{
	deadbymine=true;
}
function dieE()
{
	deadbyennemi=true;
}

function Update () {
	if(!won)
	{
	if((!deadbyennemi)&&(!deadbymine))
	{
	this.gameObject.transform.eulerAngles.y+=Input.GetAxis("Mouse X")*3;
	this.gameObject.transform.eulerAngles.x+=-Input.GetAxis("Mouse Y")*3;

	if(characterController.isGrounded)
	{
	moveDirection=Vector3(0,0,0);
	if(Input.GetKey("left shift"))
	{
		moveDirection.z+=Input.GetAxis("Vertical")*12;
	}
	else
	{
	moveDirection.z+=Input.GetAxis("Vertical")*6;
	}
	moveDirection.x+=Input.GetAxis("Horizontal")*6;
	moveDirection=transform.TransformDirection(moveDirection);
	moveDirection.y=0;
	if(Input.GetButtonDown("Jump"))
	{
		moveDirection.y=18;
	}
	}
	moveDirection.y-=Time.deltaTime*60;
	characterController.Move(moveDirection*Time.deltaTime);
    }
	else if(deadbymine)
	{
		Destroy(gun);
		if((!exploded)&&(characterController.isGrounded))
		{
			moveDirection=Vector3(0,0,0);
			moveDirection.z-=10;
			moveDirection.y+=15;
			moveDirection=transform.TransformDirection(moveDirection);
			characterController.Move(moveDirection*Time.deltaTime);
			exploded=true;
		}
		else if(characterController.isGrounded)
		{
		        moveDirection=Vector3(0,0,0);	
		}
		if(time>0)
		time-=Time.deltaTime;
		else
		{
		if(angle>=-90)
		{
		angle-=2;
		this.transform.eulerAngles.x=angle;
		}
		else
		{
		DeathMsg.text="You Are Dead";
		retry.text="Hit enter to play again";
		if(Input.GetKeyDown("return"))
		Application.LoadLevel(0);	
		}
		}
		moveDirection.y-=Time.deltaTime*60;
		characterController.Move(moveDirection*Time.deltaTime);
	}
	else
	{
		Destroy(gun);
		if(angle<=80)
		{
		angle+=3;
		this.transform.eulerAngles.x=angle;
		}
		else
		{
		DeathMsg.text="You Are Dead";
		retry.text="Hit enter to play again";
		if(Input.GetKeyDown("return"))
		Application.LoadLevel(0);	
		}
	}
	}
	else
	{
		retry.text="Hit enter to play again";
		if(Input.GetKeyDown("return"))
		Application.LoadLevel(0);
	}

}