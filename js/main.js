'use strict';

var buttonAdd = document.querySelector('.js-button-abilitiesPlus');
var buttonRemove = document.querySelectorAll('.js-button-abilitiesMinus');
var boxSkills = document.querySelectorAll('.js-ability-box');

function addSkill(){
  var boxHidden = document.querySelectorAll('.hidden');

  if(boxHidden.length === 2 ){
    boxSkills[1].classList.remove('hidden');
  } else if (boxHidden.length === 1 ) {
    boxSkills[2].classList.remove('hidden');
  } else {
    console.log('no hay mas habilidades que desplegar');
  }
}

function removeSkill(event){
  var parentBox = event.currentTarget.parentElement;
  parentBox.classList.add('hidden');
}

buttonAdd.addEventListener('click', addSkill);
buttonRemove[0].addEventListener('click', removeSkill);
buttonRemove[1].addEventListener('click', removeSkill);
