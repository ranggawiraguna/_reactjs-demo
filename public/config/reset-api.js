const copyFile = require('fs').copyFile;

const listApi = [
  "CurriculumVitae",
]

listApi.forEach((api) => { copyFile(`./public/api/${api}.json`, `./src/Server/API/${api}.json`, () => { }) });
