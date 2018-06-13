'use strict';
var wizardNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatsColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomArrElement = function (arr) {
  var number = Math.floor(Math.random() * arr.length);
  return arr[number];
};

var createRandomWizard = function (names, surnames, coats, eyes) {
  var firstName = getRandomArrElement(names);
  var secondName = getRandomArrElement(surnames);
  var name = firstName + ' ' + secondName;
  var coatColor = getRandomArrElement(coats);
  var eyesColor = getRandomArrElement(eyes);
  var wizard = {
    name: name,
    coatColor: coatColor,
    eyesColor: eyesColor
  };
  return wizard;
};

var wizardsArray = [];

for (var i = 0; i < 4; i++) {
  var randomWizard = createRandomWizard(wizardNames, wizardSurnames, wizardCoatsColors, wizardEyesColors);
  wizardsArray.push(randomWizard);
}

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');


var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

var renderWizards = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    fragment.appendChild(renderWizard(wizardsArray[i]));
  }
  return fragment;
}

similarListElement.appendChild(renderWizards(wizardsArray));

document.querySelector('.setup-similar').classList.remove('hidden');
