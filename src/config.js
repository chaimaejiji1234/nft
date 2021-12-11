const description =
  "This is the description of your NFT project, remember to replace this";
const baseUri = "https://hashlips/nft";

const layersOrder = [
  { name: "Background", number:4 },
  { name: "Base" , number :1},
  { name: "cash", number :4 },
  { name: "Chapeau", number:4 },
  { name: "hands", number: 3 },
];

const format = {
  width: 1280,
  height: 1280,
};

const background = {
  generate: true,
  brightness: "80%",
};

const uniqueDnaTorrance = 10000;

const editionSize = 10;

module.exports = {
  layersOrder,
  format,
  editionSize,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
};
