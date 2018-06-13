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
  var wizard = createRandomWizard(wizardNames, wizardSurnames, wizardCoatsColors, wizardEyesColors);
  wizardsArray.push(wizard);
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');


var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (var i = 0; i < wizardsArray.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardsArray[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardsArray[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardsArray[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}

document.querySelector('.setup-similar').classList.remove('hidden');