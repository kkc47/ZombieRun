﻿var animationSwitch : boolean = false;
var obj: GameObject;

function OnTriggerEnter (other : Collider) {
	if (animationSwitch == false){
		obj.animation.Play();
		animationSwitch = true;
	}
}