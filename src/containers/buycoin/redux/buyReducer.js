const initialState = {
  coins: [],
  packages: [],
  history: [],

  loading: false,
  loadingCoins: false,
  loadingPackages: false,

  modalStep: 1,
  modalOpen: false,

  fee: {
    fee: {
      low: 0,
      medium: 0,
      high: 0
    }
  },

  buypackage: {
    idpack: '', // o pacote escolhido
    coin: {
      id: '',
      address: '',
      abbreviation: '',
    },
    paycoin: '', // moeda usada pra pagar
    amountFiat: '', // qtde em fiat a pagar
    amountPay: '', // qtde a pagar
    balance: '', // o balance do usuario de moeda pra pagar
    amount: '', // qtde a receber
    operator: '',
    address: '' // endereco para enviar o pgto
  }
};

const buy = (state=initialState, action) => {
  switch(action.type){
      case "SET_MODAL_BUY_STEP_REDUCER":
        return {
          ...state,
          modalStep: action.step
        };
      
      case "SET_MODAL_OPEN_REDUCER":
        return {
          ...state,
          modalOpen: action.open
        };

      case "SET_LOADING_COIN_REDUCER":
        return {
          ...state,
          loadingCoins: action.payload
        };

      case "SET_LOADING_REDUCER":
        return {
          ...state,
          loading: action.payload
        };

      case "SET_LOADING_PACK_REDUCER":
        return {
          ...state,
          loadingPackages: action.payload
        };

      case "GET_COINS_REDUCER":
        return {
          ...state,
          coins: action.coins,
          loadingCoins: false
        };

      case "GET_BUY_PACKAGE_REDUCER":
        return {
          ...state,
          packages: action.packages,
          buypackage: {
            ...state.buypackage,
            coin: {
              id: action.id,
              abbreviation: action.coin,
              address: action.address
            }
          },
          loadingPackages: false
        };

      case "SET_BUY_PACKAGE_REDUCER":
        return {
          ...state,
          buypackage: {
            ...state.buypackage,
            idpack: action.package, 
            amount: action.amount,
            amountFiat: action.amountFiat,
          }
        }

      case "GET_FEE_BUY_REDUCER":
        return {
          ...state,
          fee: action.fee,
          loading: false
        };

      case "SET_FEE_BUY_REDUCER":
        return {
            ...state,
            buypackage: {
              ...state.buypackage,
              fee: action.fee
            }
          };

      case "SET_CLEAR_BUY_REDUCER":
        return {
          ...initialState
        };

      case "GET_HISTORY_BUY_REDUCER":
        return {
          ...state,
          history: action.history,
          loading: false
        };

      case "SET_BUY_COIN_PAYMENT_REDUCER":
        return {
          ...state,
          buypackage: {
            ...state.buypackage,
            paycoin: action.coin, 
            address: action.address
          }
        }
      
      case "SET_AMOUNT_BUY_PAY_REDUCER":
        return {
          ...state, 
          buypackage: {
            ...state.buypackage,
            amountPay: action.payload.amount,
            balance: action.payload.balance
          }
        }

    default: {
      return {
        ...state
      };
    }
  }
};

export default buy;
