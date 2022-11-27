export default function coordinatesFromSpreadsheetValues(sheetValues) {
  console.log({sheetValues})
  const valuesWithoutHeader = sheetValues.slice(1);
  return valuesWithoutHeader.map((row) => {
    const name = row[0];
    const x = parseInt(row[1], 10);
    const y = parseInt(row[2], 10);
    const z = parseInt(row[3], 10);
    const type = row[4];
    const id = Math.random();

    return {
      name, x, y, z, type, id
    }
  })
}