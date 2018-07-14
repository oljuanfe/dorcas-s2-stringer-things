"use strict";

//Preview card

var itemsSocialMedia = document.querySelectorAll(".fill-input__placeholder");
var uploadBtn = document.querySelector(".fill-input__image");
var uploadInput = document.querySelector(".fill-input__input");
var uploadPhoto = document.querySelector(".card__image");
var uploadMiniPhoto = document.querySelector(".square__white");
var fr = new FileReader();


function reWriteData(e) {
  var fillInput = e.currentTarget;
  var targetInput = fillInput.getAttribute("data-stringer");
  var sendCont = document.querySelector("#" + targetInput);
  var itemAttribute = fillInput.getAttribute("type");
  if (itemAttribute === "number") {
    sendCont.href += fillInput.value;
  } else if (itemAttribute === "email") {
    sendCont.href += fillInput.value;
  } else if (itemAttribute === "url") {
    var scriptUrl = fillInput.value + "/";
    sendCont.href += scriptUrl;
  } else {
    sendCont.innerHTML = fillInput.value;
  }
}

//Cargar Imagen

function mostrarImagen(e) {
  var myFile = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  var urlPhoto = "url(" + '"' + fr.result + '"' + ")";
  uploadPhoto.style.backgroundImage = urlPhoto;
  uploadMiniPhoto.style.backgroundImage = urlPhoto;
}

function clickInput() {
  uploadInput.click();
}
//console.log(uploadInput);
uploadInput.addEventListener("change", mostrarImagen);
uploadBtn.addEventListener("click", clickInput);

for (var i = 0; i < itemsSocialMedia.length; i++) {
  var targetAttribute = itemsSocialMedia[i].getAttribute("type");
  if (targetAttribute === "url") {
    itemsSocialMedia[i].addEventListener("change", reWriteData);
  } else {
    itemsSocialMedia[i].addEventListener("keyup", reWriteData);
  }
}

//habilidades
var buttonAdd = document.querySelector(".js-button-abilitiesPlus");
var buttonRemove = document.querySelectorAll(".js-button-abilitiesMinus");
var boxSkills = document.querySelectorAll(".js-ability-box");
var selectSkills = document.querySelectorAll(".js-select-abilities");

//console.log(buttonAdd);

function createOption(text) {
  var option = document.createElement("option");
  var optionText = document.createTextNode(text);
  option.appendChild(optionText);
  return option;
}

function fillSelect() {
  var url = "https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json";
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      var skillList = json.skills;
      skillList.unshift('Selecciona una habilidad');
      for (var i = 0; i < selectSkills.length; i++) {
        for (var j = 0; j < skillList.length; j++) {
          var newSkillsOption = createOption(skillList[j]);
          selectSkills[i].appendChild(newSkillsOption);
        }
      }
    });
}

var pseudoBoxCardSkill;

var skillContainer = document.querySelector(".js-card_skills--list");

function addSkill() {
  var boxCardSkill = document.querySelectorAll('.skill');
  var boxHidden = document.querySelectorAll('.skills-hidden');
  if (boxHidden.length === 2) {
    boxSkills[1].classList.remove('skills-hidden');
  } else if (boxHidden.length === 1) {
    boxSkills[2].classList.remove("skills-hidden");
  } else {
    console.log("no hay mas habilidades que desplegar");
  }

  if (boxCardSkill.length === 1) {
    pseudoBoxCardSkill = document.createElement('li');
    console.log(pseudoBoxCardSkill);
    pseudoBoxCardSkill.setAttribute('class','skill remove');
  } else if (boxCardSkill.length === 2) {
    pseudoBoxCardSkill = document.createElement('li');
    pseudoBoxCardSkill.setAttribute('class', 'skill remove');
  } else {
    console.log("no hay mas habilidades que añadir");
  }
  skillContainer.appendChild(pseudoBoxCardSkill);
}


function removeSkill(event) {
  var sizePseudoBoxCardSkill = document.querySelectorAll('.remove');
  var parentBox = event.currentTarget.parentElement;
  parentBox.classList.add("skills-hidden");

  if(sizePseudoBoxCardSkill.length === 2){
    sizePseudoBoxCardSkill[1].remove();
  } else if(sizePseudoBoxCardSkill.length === 1){
    sizePseudoBoxCardSkill[0].remove();
  }
}

buttonAdd.addEventListener("click", addSkill);
buttonRemove[0].addEventListener("click", removeSkill);
buttonRemove[1].addEventListener("click", removeSkill);
fillSelect();

//HABILIDADES DE LA TARJETA


function addSelectSkills() {
  var newContentSkill;
  var newBoxSkill = document.querySelectorAll('.skill');
  console.log('newBoxSkill',newBoxSkill);
  console.log('contenedor',skillContainer);

  if(newBoxSkill.length === 1){
    newContentSkill = document.createTextNode(selectSkills[0].value);
    newBoxSkill[0].innerHTML = '';
    newBoxSkill[0].appendChild(newContentSkill);
  } else if (newBoxSkill.length === 2){
    newBoxSkill[1].innerHTML = '';
    newContentSkill = document.createTextNode(selectSkills[1].value);
    newBoxSkill[1].appendChild(newContentSkill);
  } else if (newBoxSkill.length === 3){
    newBoxSkill[2].innerHTML = '';
    newContentSkill = document.createTextNode(selectSkills[2].value);
    newBoxSkill[2].appendChild(newContentSkill);
  }
}

for (var i = 0; i < selectSkills.length; i++) {
  selectSkills[i].addEventListener('change', addSelectSkills);
}

//colapsables
var activableSection = document.querySelectorAll(".js-collapsible-title");
var parent;
var fieldset = document.querySelectorAll(".js-collapsible-visible");

//abre y cierra colapsables
//console.log(activableSection);

function collapsibleDesign(event) {
  parent = event.currentTarget.parentElement;
  //console.log(parent);
  closeCollapsibles();
  // Si contiene la clase hidden la elimina y sino la añade
  parent.classList.toggle("js-collapsible-visible");
}

for (var i = 0; i < activableSection.length; i++) {
  activableSection[i].addEventListener("click", collapsibleDesign);
  //console.log(activableSection[i]);
}
// un colapsable abierto cada vez

function closeCollapsibles() {
  for (var i = 0; i < fieldset.length; i++) {
    //console.log(activableSection.length);
    fieldset[i].classList.remove("js-collapsible-visible");
  }
}

//actualizar colores
var radioButtonColor = document.querySelectorAll(".color-check");
var card = document.querySelector(".jsCard");
var attri;

function selectColorCard(event) {
  //console.log("que hay en radiobut", radioButtonColor);
  card.classList.remove("green-card", "red-card", "blue-card");
  attri = event.currentTarget.getAttribute("data-dest");
  card.classList.add(attri);
}

for (var j = 0; j < radioButtonColor.length; j++) {
  radioButtonColor[j].addEventListener("click", selectColorCard);
  //console.log(radioButtonColor[j]);
}

//actualizar fuentes

var radioButtonFont = document.querySelectorAll(".font-check");
var attriFont;

function selectFontCard(event) {
  //console.log("que hay en radiobut", radioButtonFont);
  card.classList.remove("ubuntu-card", "comic-card", "montse-card");
  attriFont = event.currentTarget.getAttribute("data-font");
  card.classList.add(attriFont);
}

for (var h = 0; h < radioButtonFont.length; h++) {
  radioButtonFont[h].addEventListener("click", selectFontCard);
  //console.log(radioButtonFont[h]);
}
