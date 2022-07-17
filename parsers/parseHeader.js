const { parseDate, areIndicesSame, getIndexTypeForHeader, getTaseFileIdChrs } = require('../utils')
const { DATE_FORMAT_HEADER } = require('../const')

const parseHeader = line => ({
  recordType: "Header",
  date: parseDate(line.slice(8, 14), DATE_FORMAT_HEADER),
  version: parseInt(line.slice(14, 16)),
  fromDate: parseDate(line.slice(26, 32), DATE_FORMAT_HEADER),
  toDate: parseDate(line.slice(32, 38), DATE_FORMAT_HEADER),
  indexNo: areIndicesSame(line.slice(38, 41)),
  index: parseInt(line.slice(38, 41)),
  indexTypeNo: getIndexTypeForHeader(line.slice(41, 42)),
  indexType: parseInt(line.slice(41, 42)),
  tASEFileId4ChrsNo: parseInt(line.slice(68, 72)),
  tASEFileId4Chrs: getTaseFileIdChrs(line.slice(68, 72))
});

module.exports = parseHeader
