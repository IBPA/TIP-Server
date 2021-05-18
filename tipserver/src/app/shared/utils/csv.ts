export function jsonToCsv(json: any, keyArray: any) {
  let valueArray = [];
  for (let i = 0; i < keyArray.length; i++) {
    let value = json[keyArray[i]];
    if (value === null) { value = ''; }
    valueArray.push('"' + value + '"');
  }
  return valueArray.join(',');
}

export function jsonArrayToCsv(jsonArray: any, keyArray: any) {
  let csvStringArray = [keyArray.join(',')];
  for (let i = 0; i < jsonArray.length; i++) {
    csvStringArray.push(jsonToCsv(jsonArray[i], keyArray));
  }
  return csvStringArray.join('\n');
}
