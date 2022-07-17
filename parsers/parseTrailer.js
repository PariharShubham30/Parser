const parseTrailer = line => ({
  recordType: "Trailer",
  totalNumberOfRecords: parseInt(line.slice(2, 7)),
  version: parseInt(line.slice(7, 9))
});

module.exports = parseTrailer