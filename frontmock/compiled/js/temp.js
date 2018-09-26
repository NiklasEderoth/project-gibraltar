/* global $ */
var generatedDivIndex = 0
var pad = '0000'

$('body').on('click', '.createInside', function () {
  // if (generatedDivIndex < 9999) {
  var str = '' + generatedDivIndex
  var ans = pad.substring(0, pad.length - str.length) + str
  $(this).closest('div').append('<div class="gd' + ans + '"><span class="createInside">Create inside</span></div>')
  generatedDivIndex++
  // }
})
