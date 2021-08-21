function myFunction() {
  Logger.clear()

  var active = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var k = 0, p=0, j = 0;

  for(var i = 0; i<100; i++)
  {
    active.getRange(i+2, 3).setValue(0);
  }

  for(var i = 0; i<100; i++)
  {
    var flag = 0;
    var someActive_i = active.getRange(i+2, 2).getValue();
    
    for(j = 0; j<100; j++)
    {
      var someActive_j = active.getRange(j+2, 1).getValue();
      if (someActive_i === someActive_j)
      {
        // someActive_j = 1;
        active.getRange(j+2, 3).setValue(1);
        // k++;
        flag = 1;
        break;
      }
    }

    if (flag === 0)
    {
        active.getRange(p+2, 4).setValue(someActive_i);
        p++;
    }
  }
}
