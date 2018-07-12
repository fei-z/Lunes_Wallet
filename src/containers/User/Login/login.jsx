import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import i18n from "../../../utils/i18n";
import { Link } from "react-router-dom";

// COMPONENTS
import Footer from "../footer";

// STYLE
import style from "../style.css";

class Login extends React.Component {
  render() {
    return (
      <div className={style.formLogin}>
        <img src="../../images/logo.svg" className={style.logo} />
        <div className={style.description}>{i18n.t("LOGIN_HEADER")}</div>

        <input
          type="text"
          placeholder={i18n.t("PLACEHOLDER_EMAIL")}
          className={style.inputTextDefault}
        />
        <input
          type="password"
          placeholder={i18n.t("PLACEHOLDER_PASSWORD")}
          className={style.inputTextDefault}
        />

        <Link className={style.textForgetPass} to="/reset">
          {i18n.t("LOGIN_FORGET_PASSWORD_LINK")}
        </Link>

        <button className={style.buttonBorderGreen}>
          {i18n.t("BTN_LOGIN")}
        </button>

        <div className={style.doNotHaveAccount}>
          {i18n.t("LOGIN_CREATE_ACCOUNT_LABEL")}{" "}
          <Link className={style.doNotLink} to="/create">
            {i18n.t("LOGIN_SINGUP_ACCOUNT_LINK")}
          </Link>
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
