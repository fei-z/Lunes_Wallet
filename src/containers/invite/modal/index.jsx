import React from "react";
import PropTypes from "prop-types";

// STYLE
import style from "./style.css";

// REDUX
import { connect } from "react-redux";

// COMPONENTS
import ItemInvite from "../components/itemInvite";

class InviteSend extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { invite } = this.props;
    return (
      <div>
        {
          invite.invites.map((email, key)=>{
            return (<ItemInvite key={key} email={email.receiptEmail}/>)
          })
        }
      </div>
    )
  }
}

InviteSend.propTypes = {
  invite: PropTypes.object
};

const mapStateToProps = store => ({
  invite: store.invite
});


export default connect(
  mapStateToProps,
)((InviteSend));