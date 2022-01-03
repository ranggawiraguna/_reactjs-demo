const copyFile = require('fs').copyFile;

const listApi = [
  "CurriculumVitae",
  "Restaurant",
  "Contents",
  "Clothes",
]

listApi.forEach((api) => { copyFile(`./public/api/${api}.json`, `./src/Server/API/${api}.json`, () => { }) });
