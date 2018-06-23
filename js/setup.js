'use strict';
var wizardNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatsColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardFireballsColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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
  for (var j = 0; j < arr.length; j++) {
    fragment.appendChild(renderWizard(arr[j]));
  }
  return fragment;
};

similarListElement.appendChild(renderWizards(wizardsArray));

document.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
// var setupName = setup.querySelector('setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === 27) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closePopup();
  }
});

var setupWizard = document.querySelector('.setup-wizard');
var setupCoat = setupWizard.querySelector('.wizard-coat');
var setupEyes = setupWizard.querySelector('.wizard-eyes');
var setupFireball = document.querySelector('.setup-fireball-wrap');

setupCoat.addEventListener('click', function () {
  var coatColor = getRandomArrElement(wizardCoatsColors);
  setupCoat.style.fill = coatColor;
  document.querySelector('input[name=coat-color]').value = coatColor;
});

setupEyes.addEventListener('click', function () {
  var eyesColor = getRandomArrElement(wizardEyesColors);
  setupEyes.style.fill = eyesColor;
  document.querySelector('input[name=eyes-color]').value = eyesColor;
});

setupFireball.addEventListener('click', function () {
  var fireballColor = getRandomArrElement(wizardFireballsColors);
  setupFireball.style.background = fireballColor;
  document.querySelector('input[name=fireball-color]').value = fireballColor;
});
