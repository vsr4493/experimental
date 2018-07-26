import Login from './Login';
import { connect } from 'react-redux';
import * as Action from 'common/store/actions';
import * as selectors from 'common/store/reducers';

const pageCategory = 'LOGIN';

const mapStateToProps = ({
	dataList: {
    data,
  },
}, { }) => {
  return {
  	data,
  };
};

const mapDispatchToProps = (dispatch, { history }) => ({
  login(email, password) {
    return dispatch(Action.login({
      pageCategory,
      email,
      password
    })).then(is_success => {
      if(is_success) {
        history.push('/');
      }
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
