import Base from 'layouts/Base';
import { connect } from 'react-redux';
import * as Action from 'common/store/actions';
import * as selectors from 'common/store/reducers/dataList';
import * as config from './config';

const CONFIGURATION = {
  FETCH_DATA: {
    url: '/api/supplier_skus',
    method: 'GET',
    data: {}
  },
  UPDATE_ITEM: (payload) => ({
    url: `/api/supplier_skus/${payload.id}`,
    method: 'PUT',
    data: payload,
  }),
};

// Add any options here if needed
const mapStateToProps = ({ dataList }, ownProps) => ({
  data: selectors.getDataList(dataList),
  baseData: dataList.data,
  meta: dataList.meta,
  config,
  ...ownProps,
});

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

export default connect(mapStateToProps, mapDispatchToProps)(Base);
