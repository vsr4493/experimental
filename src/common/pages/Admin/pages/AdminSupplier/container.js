import AdminSupplier from './AdminSupplier';
import { connect } from 'react-redux';
import * as Action from 'common/store/actions';
import * as selectors from 'common/store/reducers/dataList';

const CONFIGURATION = {
  FETCH_DATA: {
    url: '/api/suppliers',
    method: 'GET',
    data: {}
  },
  UPDATE_ITEM: (payload) => ({
    url: `/api/suppliers/${payload.id}`,
    method: 'PUT',
    data: payload,
  }),
};

const mapStateToProps = ({
	dataList,
}, { }) => {
  return {
  	data: selectors.getDataList(dataList),
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminSupplier);
