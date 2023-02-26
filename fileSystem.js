const { existsSync } = require("fs");
const {
  writeFile: nodeWriteFile,
  readFile: nodeReadFile,
  mkdir,
} = require("fs/promises");

/**
 *
 * @param param
 * @param param.fileName
 * @param param.jsonData
 * @returns {Promise<void>}
 */
async function writeFile({ fileName, jsonData }) {
  const dir = `${__dirname}/data`;
  const path = `${__dirname}/data/${fileName}.json`;
  // console.log({ dir, path });

  if (existsSync(dir)) {
    return nodeWriteFile(path, jsonData);
  }

  await mkdir(dir);

  return writeFile({ fileName, jsonData });
}

/**
 *
 * @param param
 * @param param.fileName
 * @returns {Promise<string>}
 */
async function readFile({ fileName }) {
  return nodeReadFile(`${__dirname}/data/${fileName}.json`, "utf8");
}
//

module.exports = {
  readFile,
  writeFile,
};
