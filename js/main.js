'use strict';

var inputName = document.querySelector('.personal-name');
var cardName = document.querySelector('.card__top--name');
var activableSectionDesign = document.querySelector('.design__title');
var SectionHiddenDesign = document.querySelector('.design__form');
var valueFillInput;

function reWriteName() {
  valueFillInput = inputName.value;
  cardName.innerHTML = valueFillInput;
}

inputName.addEventListener('change', reWriteName);

function collapsibleDesign() {
  // Si contiene la clase hidden la elimina y sino la añade
  SectionHiddenDesign.classList.toggle('hidden');
}

activableSectionDesign.addEventListener('click', collapsibleDesign);
