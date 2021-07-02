const xmlJS = require('xml-js');
const mergeImages = require('merge-images');
const fs = require('fs').promises;

let splitFolder = "Split_PNGs";
let inputFolder = "Input_SpriteSheet";
let inputFile = "player.xml";


async function importSpritesheet() {
    console.log("Work");
    let XML = await fs.readFile(`./${inputFolder}/${inputFile}`,{encoding: "utf-8"});
    XML = XML.replace(/(\r\n|\n|\r)/gm, "");
    let importedXML = xmlJS.xml2js(XML, {trim: true});
    console.log('finished');
}

importSpritesheet();