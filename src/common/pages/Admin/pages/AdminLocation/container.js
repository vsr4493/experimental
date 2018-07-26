import AdminLocation from './AdminLocation';
import { connect } from 'react-redux';
import * as Action from 'common/store/actions';
import * as selectors from 'common/store/reducers';

const pageCategory = 'LOCATION_MASTER';

const mapStateToProps = ({
	dataList: {
    data,
  },
}, { }) => {
  return {
  	data,
  };
};

const mapDispatchToProps = (dispatch, {}) => ({
  getData(payload) {
    return dispatch(Action.fetchDataList({
      pageCategory,
      ...payload
    }));
  },
  updateItem(payload) {
    return dispatch(Action.updateItem({
      pageCategory,
      ...payload,
    }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminLocation);
