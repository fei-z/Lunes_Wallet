import React from "react";
import i18n from "../../utils/i18n";
import { Link } from "react-router-dom";

// MATERIAL UI
import Grid from "@material-ui/core/Grid";

// STYLE
import style from "./style.css";

import TransactionService from "../../services/transaction/transactionService";
import { getAuthToken } from "../../utils/localStorage";

class Home extends React.Component {
  componentDidMount() {
    // **** EXEMPLO DE TRANSACAO LUNES PARA TESTE */
    const token = getAuthToken();
    const transactionService = new TransactionService();

    transactionService.transaction({
      coin: "lunes", // coin
      token: token, // token
      amount: 1000000, // amount ( 10ˆ * precisao)
      fee: 1000000, // fee
      from: "37RThBWionPuAbr8H4pzZJM6HYP2U6Y9nLr", // from
      to: "37NzqxzFAkFVFaXtp79wRuc9X1T7YTqXgwh", // to
      seed:
        "relax board logic reason sustain client current during toilet course element impose", // informe aqui uma SEED
      testnet: true // testnet
    });
  }

  render() {
    return (
      <div>
        <Grid container className={style.homeContainer}>
          <Grid item>
            <div className={style.cardHome}>
              <img
                src="/images/icons/general/wallet@3x.png"
                className={style.cardIcon}
              />
              <div className={style.cardTitle}>
                {i18n.t("CARD_HOME_TITLE_1")}{" "}
              </div>
              <div className={style.descriptionCard}>
                {i18n.t("CARD_HOME_DESCRIPTION_1")}
              </div>

              <Link to="#">
                <button className={style.buttonCard}>
                  {i18n.t("BTN_LOGIN")}
                </button>
              </Link>
            </div>
          </Grid>

          <Grid item>
            <div className={style.cardHome}>
              <img
                src="/images/icons/general/wallet@3x.png"
                className={style.cardIcon}
              />
              <div className={style.cardTitle}>
                {i18n.t("CARD_HOME_TITLE_2")}{" "}
              </div>
              <div className={style.descriptionCard}>
                {i18n.t("CARD_HOME_DESCRIPTION_2")}
              </div>

              <Link to="#">
                <button className={style.buttonCard}>
                  {i18n.t("BTN_LOGIN")}
                </button>
              </Link>
            </div>
          </Grid>

          <Grid item>
            <div className={style.cardHome}>
              <img
                src="/images/icons/general/wallet@3x.png"
                className={style.cardIcon}
              />
              <div className={style.cardTitle}>
                {i18n.t("CARD_HOME_TITLE_3")}{" "}
              </div>
              <div className={style.descriptionCard}>
                {i18n.t("CARD_HOME_DESCRIPTION_3")}
              </div>

              <Link to="#">
                <button className={style.buttonCard}>
                  {i18n.t("BTN_LOGIN")}
                </button>
              </Link>
            </div>
          </Grid>

          <Grid item>
            <div className={style.cardHome}>
              <img
                src="/images/icons/general/wallet@3x.png"
                className={style.cardIcon}
              />
              <div className={style.cardTitle}>
                {i18n.t("CARD_HOME_TITLE_4")}{" "}
              </div>
              <div className={style.descriptionCard}>
                {i18n.t("CARD_HOME_DESCRIPTION_4")}
              </div>

              <Link to="#">
                <button className={style.buttonCard}>
                  {i18n.t("BTN_LOGIN")}
                </button>
              </Link>
            </div>
          </Grid>

          <Grid item>
            <div className={style.cardHome}>
              <img
                src="/images/icons/general/wallet@3x.png"
                className={style.cardIcon}
              />
              <div className={style.cardTitle}>
                {i18n.t("CARD_HOME_TITLE_5")}{" "}
              </div>
              <div className={style.descriptionCard}>
                {i18n.t("CARD_HOME_DESCRIPTION_5")}
              </div>

              <Link to="#">
                <button className={style.buttonCard}>
                  {i18n.t("BTN_LOGIN")}
                </button>
              </Link>
            </div>
          </Grid>

          <Grid item>
            <div className={style.cardHome}>
              <img
                src="/images/icons/general/wallet@3x.png"
                className={style.cardIcon}
              />
              <div className={style.cardTitle}>
                {" "}
                {i18n.t("CARD_HOME_TITLE_6")}{" "}
              </div>
              <div className={style.descriptionCard}>
                {i18n.t("CARD_HOME_DESCRIPTION_6")}
              </div>

              <Link to="#">
                <button className={style.buttonCard}>
                  {i18n.t("BTN_LOGIN")}
                </button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
