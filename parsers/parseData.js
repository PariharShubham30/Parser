const { DATE_FORMAT_DATA } = require('../const')
const { parseDate, getIndexTypeForData } = require('../utils')


const parseData = line => ({
  recordType: "Data",
  date: parseDate(line.slice(2, 10), DATE_FORMAT_DATA),
  securityId: parseInt(line.slice(10, 18)),
  securityName: line.slice(18, 33),
  indexNumber: parseInt(line.slice(33, 36)),
  indexTypeNo: getIndexTypeForData(line.slice(36, 38)),
  indexType: parseInt(line.slice(36, 38)),
  basePrice: parseInt(line.slice(38, 50)),
  percentageInTheIndex: parseInt(line.slice(50, 58)),
  marketValue: parseInt(line.slice(58, 76)),
  exCodeNo: line.slice(76, 77) === "1" ? "Ex Day" : -1,
  exCode: parseInt(line.slice(76, 77))
});

module.exports = parseData 
