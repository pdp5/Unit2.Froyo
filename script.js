const userInput = prompt(
  "enter a list of comma-separated froyo flavors:",
  "vanilla,coffee,chocolate"
);
let froyo_Flavors = userInput.split(",");
console.log(froyo_Flavors);

function remove_WhiteSpace(froyo_Flavors) {
  let arr = [];
  for (let i = 0; i < froyo_Flavors.length; i++) {
    const flavor = froyo_Flavors[i].trim().toLowerCase();
    if (flavor !== "") {
      arr.push(flavor);
    }
  }
  return arr;
}
const arr_Froyo_Flavors = remove_WhiteSpace(froyo_Flavors);
console.log(arr_Froyo_Flavors);

function num_Froyo_Flavors(arr_Froyo_Flavors) {
  const list_Froyo_Flavors = {};
  for (const flavor in arr_Froyo_Flavors) {
    if (arr_Froyo_Flavors[flavor] in list_Froyo_Flavors) {
      list_Froyo_Flavors[arr_Froyo_Flavors[flavor]] += 1;
    } else {
      list_Froyo_Flavors[arr_Froyo_Flavors[flavor]] = 1;
    }
  }
  return list_Froyo_Flavors;
}
const table_Froyo_Flavors = num_Froyo_Flavors(arr_Froyo_Flavors);
console.table(table_Froyo_Flavors);
