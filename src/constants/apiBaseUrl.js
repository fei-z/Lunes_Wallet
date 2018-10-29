export const TESTNET = true;
export const BASE_URL = TESTNET
  ? "https://a.lunes.io/wallet/staging"
  : "https://a.lunes.io/wallet/v1";
export const LUNESNODE_URL = TESTNET
  ? "https://lunesnode-testnet.lunes.io"
  : "https://lunesnode.lunes.io";
export const TETHER_URL = "https://api.omniwallet.org";
export const HEADER_RESPONSE = "x-amzn-remapped-authorization";
export const HEADER_REQUEST = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*"
  }
};

export const HEADER_REQUEST_FORM = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
};

export const API_HEADER = {
  headers: {
    key: "IIP0X6S4Ui7z0lTfTkeLO6te2ZmyxOJ1fNeuoIC9"
  }
};

export const blockexplorer = {
  lunes: TESTNET
    ? "https://blockexplorer-testnet.lunes.io/tx/"
    : "https://blockexplorer.lunes.io/tx/",
  btc: "https://live.blockcypher.com/btc/tx/",
  ltc: "https://live.blockcypher.com/ltc/tx/",
  bch: "https://live.blockcypher.com/bch/tx/",
  dash: "https://chainz.cryptoid.info/dash/search.dws?q=",
  eth: "https://etherscan.io/tx/"
};
