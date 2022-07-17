const {
  TASE_FILE_ID_CHRS_HEADER,
  INDEX_TYPE_HEADER,
  INDEX_TYPE_DATA,
  INDEX_NUMBER_HEADER_OTHERS,
  INDEX_NUMBER_HEADER_ALL
} = require("./const");

const moment = require("moment");

const parseDate = (date, format) => moment(date, format).toDate();

const areIndicesSame = value =>
  value === "000" ? INDEX_NUMBER_HEADER_ALL : INDEX_NUMBER_HEADER_OTHERS;

const getIndexTypeForHeader = value => {
  switch (value) {
    case INDEX_TYPE_HEADER.ALL_INDICES:
      return "All Indices";
    case INDEX_TYPE_HEADER.SECURITY_INDICES:
      return "Security Indices";
    case INDEX_TYPE_HEADER.BOND_INDICES:
      return "Bond Indices";
    default:
      return "N/A";
  }
};

const getTaseFileIdChrs = value => {
  switch (value) {
    case TASE_FILE_ID_CHRS_HEADER.WEIGHT_OF_SECURITIES_IN_INDICES:
      return "Weight of Securities in Indices";
    case TASE_FILE_ID_CHRS_HEADER.WEIGHT_OF_SECURITIES_IN_REZEF_INDICES:
      return "Weight of Securities in Rezef Indices";
    default:
      return "N/A";
  }
};

const getIndexTypeForData = value => {
  switch (value) {
    case INDEX_TYPE_DATA.SHARES:
      return "Shares";
    case INDEX_TYPE_DATA.GOVERNMENT_BONDS:
      return "Government Bonds";
    case INDEX_TYPE_DATA.CORPORATE_BONDS:
      return "Corporate Bonds";
    case INDEX_TYPE_DATA.GOVERNMENT_AND_CORPORATE_BONDS:
      return "Government + Corporate Bonds";
    default:
      return "N/A";
  }
};

module.exports = {
  parseDate,
  areIndicesSame,
  getIndexTypeForData,
  getTaseFileIdChrs,
  getIndexTypeForHeader
};
