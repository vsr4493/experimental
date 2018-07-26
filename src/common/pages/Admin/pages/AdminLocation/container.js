import AdminLocation from './AdminLocation';
import { connect } from 'react-redux';
import * as Action from 'common/store/actions';
import * as selectors from 'common/store/reducers';

const CONFIGURATION = {
  FETCH_DATA: {
    url: '/api/locations',
    method: 'GET',
    data: {
      include: 'vendor',
    }
  },
  UPDATE_ITEM: (payload) => ({
    url: `/api/locations/${payload.id}`,
    method: 'PUT',
    data: {
      include: 'vendor',
    },
  }),
};

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
      apiConfiguration: CONFIGURATION.FETCH_DATA,
      ...payload
    }));
  },
  updateItem(payload) {
    return dispatch(Action.updateItem({
      apiConfiguration: CONFIGURATION.UPDATE_ITEM(payload),
      updated: payload,
    }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminLocation);
