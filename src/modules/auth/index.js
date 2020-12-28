import { Component } from './Authorization';
import * as actions from '../actions';
import * as selectors from '../selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    userName: selectors.getUserName(state),
});

const mapDispatchToProps = dispatch => ({
    saveCurrentUser: payload => dispatch(actions.authSubmit(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
