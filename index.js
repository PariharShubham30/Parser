const fs = require("fs"); // readfile

const {
  parseData,
  parseHeader,
  parseFreeFloatData,
  parseTrailer,
} = require("./parsers");

const { FILE_NAME, RECORD_TYPE } = require("./const");

let fileName = process.argv[2];
if (!fileName) {
  fileName = FILE_NAME;
  console.log(
    `No file name provided. Resuming with default file path: ${FILE_NAME}`
  );
}

let recordData = [];

// First I want to read the file
fs.readFile(fileName, "utf-8", (err, data) => {
  if (err) {
    console.log(`Error while reading file: ${err}`);
    throw err;
  }
  const lines = data.split("\n");
  const recordMapper = {
    [RECORD_TYPE.HEADER]: parseHeader,
    [RECORD_TYPE.DATA]: parseData,
    [RECORD_TYPE.FREE_FLOAT_DATA]: parseFreeFloatData,
    [RECORD_TYPE.TRAILER]: parseTrailer,
  };

  for (const row of lines) {
    const recordType = row.slice(0, 2);

    if (!recordMapper[recordType]) {
      console.log("No Record Type Found");
      continue;
    }
    recordData.push(recordMapper[recordType](row));
  }
});
