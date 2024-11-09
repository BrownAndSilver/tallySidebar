function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Tally')
      .addItem('Tally Sidebar', 'tallySidebar')
      .addToUi();
}

function tallySidebar() {
 var widget = HtmlService.createHtmlOutputFromFile('sidebar').setTitle("Tally");
 SpreadsheetApp.getUi().showSidebar(widget);
}

function getActiveCellInfo(){
  var sheet = SpreadsheetApp.getActiveSheet();
  var cell = sheet.getActiveRange().getCell(1,1);
  var value = cell.getValue();
  var A1 = cell.getA1Notation();
  return {cell: cell, value: value, A1: A1};
}

function alterValue(incrementAmount) {
  var info = getActiveCellInfo();
  info.value = info.value + incrementAmount;
  info.cell.setValue(info.value);
  return info;
} 

function resetValue() {
  var info = getActiveCellInfo();
  info.value = 0;
  info.cell.setValue(0);
  return info;
}