import chroma from "chroma-js";
// importing chroma libraray to generate multiple range of colors by given range scale
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
// levels we want to generates colors

// function to generate  palette buy given colors
function generatePalette(starterPalette) {
  // create new palette with empty object of colors
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {}
  };
  // looping via levels and create object of arrays // output colors: { 50: [], 100:[] ....}
  for (let level of levels) {
    newPalette.colors[level] = [];
  }

// loop via colors object of array provided in this function in the argument
  for (let color of starterPalette.colors) {
    //for each loop call the getScale function which provide you array of variation colors and store in scale and then reverse as scale bring dark to light variations but we want dark to light
    let scale = getScale(color.color, 10).reverse();
    // now we loop for each array element in scale
    for (let i in scale) {
      // selection colors of the newPalette and put each range color to each level array element.
      // 50: [{name, id, hex, rgb,rgba}] then we use css() method from chroma library
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgba", "rgba")
          .replace(")", ",1.0)")
      });
    }
  }
  return newPalette; // return the complete new object with all variation
}
function getRange(hexColor) {
  
  const end = "#fff";
  return [
    chroma(hexColor)
      .darken(1.4)
      .hex(),
    hexColor,
    end
  ];
}

function getScale(hexColor, numberOfColors) {
  return chroma
    .scale(getRange(hexColor))
    .mode("lab")
    .colors(numberOfColors);
}

export { generatePalette };