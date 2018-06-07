'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var PADDING_VERTICAL = 10;
var PADDING_HORIZONTAL = 55;
var FONT_SIZE = 15;
var FONT_GAP = 10;
var fontHeight = FONT_SIZE + FONT_GAP;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_CHAT_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + PADDING_HORIZONTAL, CLOUD_Y + PADDING_VERTICAL + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + PADDING_HORIZONTAL, CLOUD_Y + PADDING_VERTICAL + fontHeight);

  var maxTime = getMaxElement(times);
  var barHeight = 0;

  for (var i = 0; i < names.length; i++) {
    barHeight = BAR_CHAT_HEIGHT * times[i] / maxTime;
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + PADDING_HORIZONTAL + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - PADDING_VERTICAL);
    // ctx.fillStyle = rgb(0, 0, Math.floor(Math.random() * 255));
    ctx.fillRect(CLOUD_X + PADDING_HORIZONTAL + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - PADDING_VERTICAL - FONT_SIZE, BAR_WIDTH, -barHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + PADDING_HORIZONTAL + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - PADDING_VERTICAL - barHeight - fontHeight);
  }
};
