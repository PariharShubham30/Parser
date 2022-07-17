const { parseDate } = require("../utils");
const { DATE_FORMAT_DATA } = require("../const");

const parseFreeFloatData = line => ({
  recordType: "Free Float Data",
  date: parseDate(line.slice(2, 10), DATE_FORMAT_DATA),
  securityId: parseInt(line.slice(10, 18)),
  indexNumber: parseInt(line.slice(18, 21)),
  indexAdjustedNumberOfShares: parseInt(line.slice(21, 36)),
  indexAdjustedFreeFloatPercentage: parseInt(line.slice(36, 41)),
  freeFloat: parseInt(line.slice(41, 56)),
  lastUpdateDateOfIndexAdjustedNumberOfShares: parseDate(
    line.slice(56, 64),
    DATE_FORMAT_DATA
  ),
  weightLimitationFactor: parseInt(line.slice(64, 70))
});

module.exports = parseFreeFloatData;
