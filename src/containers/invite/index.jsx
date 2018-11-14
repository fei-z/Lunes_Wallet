import React from "react";
import PropTypes from "prop-types";

// REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  setInviteModal,
  getInviteAddress,
  sendMailInvite,
  getInviteSent
} from "./redux/inviteAction";

// MATERIAL UI
import { Grid, withStyles, Input } from "@material-ui/core";

// UTILS
import i18n from "../../utils/i18n";

//COMPONENTS
import ItemInvite from "./components/itemInvite";
import Modal from "../../components/modal";
import InviteSend from "./modal";

//STYLE
import style from "./style.css";
import colors from "../../components/bases/colors";

const inputStyle = {
  root: {
    color: colors.messages.info,
    margin: "0",
    padding: "5px",
    width: "calc(100% - 20px)",
    "&:hover:before": {
      borderBottomColor: colors.purple.dark
    }
  },
  cssInput: {
    fontFamily: "Noto Sans, sans-serif",
    fontSize: "17px",
    letterSpacing: "0.5px",
    textAlign: "center"
  },
  cssUnderline: {
    "&:before, &:after": {
      borderBottomColor: colors.purple.dark
    },
    "&:hover:not($disabled):not($error):not($focused):before": {
      borderBottomColor: `${colors.purple.dark} !important`
    }
  },
  disabled: {},
  error: {},
  focused: {}
};

class Invite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      email: ""
    };
  }

  componentDidMount = ()=>{
    const { getInviteSent } = this.props;
    getInviteSent();
  }

  setEmail = email => {
    this.setState({ ...this.state, email });
  };

  handleEmail = () => {
    let { email } = this.state;
    let { sendMailInvite } = this.props;
    sendMailInvite(email);
  };

  copyAddress = address => {
    let { successRequest } = this.props;
    const element = document.createElement("textarea");
    element.value = address;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
    successRequest(i18n.t("MODAL_RECEIVE_MESSAGE"));
  };

  sendCoinAddressEmail = address => {
    const base_email = "email@..."; // mock
    return (window.location.href = "mailto:" + base_email + "?body=" + address);
  };

  handleModal = () => {
    const { modalOpen } = this.state;
    this.setState({
      ...this.state,
      modalOpen: !modalOpen
    });
  };

  render() {
    const { classes, invite } = this.props;
    const { modalOpen } = this.state;

    const address_code = "12as3d45ads546asd456asd456asd546asd"; // mock
    const address = "https://luneswallet.app/invite?=" + address_code; // mock

    let { email } = this.state;

    return (
      <div>
        <div className={style.header}>
          <h1>{i18n.t("INVITE_TITLE_INVITE")}</h1>
          <p>{i18n.t("INVITE_TEXT_1")}</p>
        </div>

        <Modal
          title="Convites enviados"
          content={<InviteSend />}
          show={modalOpen}
          close={this.handleModal}
        />

        <Grid container className={style.card}>
          <Grid item xs={12} sm={8}>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <img
                  src="/images/icons/email/email@1x.png"
                  className={style.icon}
                />
              </Grid>
              <Grid item>
                <Input
                  placeholder="Lunes@gmail.com"
                  classes={{
                    root: classes.root,
                    underline: classes.cssUnderline,
                    input: classes.cssInput
                  }}
                  onChange={event => this.setEmail(event.target.value)}
                  value={email}
                />
              </Grid>
            </Grid>
            <div className={style.linkTitle}>
              <p>{i18n.t("INVITE_LINK_SHARE")}</p>
            </div>
            <div className={style.adressShared}>
              <div className={style.adressSharedBox}>
                <p className={style.textSharedLink}>{address_code}</p>
              </div>
            </div>
            <div className={style.copyIcon}>
              <a onClick={() => this.copyAddress(address)}>
                <img src="/images/icons/modal-receive/ic_copy@1x.png" />
              </a>
            </div>
            <div
              onClick={() => this.sendCoinAddressEmail(address)}
              className={style.shareIcon}
            >
              <img src="/images/icons/invite/share@1x.png" />
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={style.boxButtons}>
              <button 
              className={style.btnInviteSent}
              onClick={() => this.handleEmail()}>
                {i18n.t("INVITE_BUTTON_SEND")}
              </button>

              <div className={style.accumulatedBalance}>
                <span>{i18n.t("INVITE_ACCUMULATED_BALANCE")} </span>
                <span className={style.accumulatedLunes}> 50.000 Lunes</span>
              </div>

              <button
                onClick={this.handleModal}
                className={style.btnInviteSent2}
              >
                {i18n.t("INVITE_TEXT_BUTTON")}
              </button>
            </div>
          </Grid>
        </Grid>

        <Grid container className={style.card}>
          <Grid item xs={12}>
            <span className={style.label}>
              {i18n.t("INVITE_CONFIRMED_INVITATIONS")}
            </span>
          </Grid>
          <Grid item xs={12} className={style.cardInviteConfirmation}>
            {invite.invites.map((email, key)=>{
            return (<ItemInvite key={key} email={email.receiptEmail}/>)
            })}
          </Grid>
        </Grid>
      </div>
    );
  }
}

Invite.propTypes = {
  classes: PropTypes.object.isRequired,
  invite: PropTypes.object,
  getInviteSent: PropTypes.func,
  sendMailInvite: PropTypes.func
};

const mapStateToProps = store => ({
  invite: store.invite
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setInviteModal,
      getInviteAddress,
      sendMailInvite,
      getInviteSent
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(inputStyle)(Invite));
