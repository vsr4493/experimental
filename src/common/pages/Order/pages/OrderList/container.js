import OrderList from './OrderList';
import { connect } from 'react-redux';
import * as Action from 'common/store/actions';
import * as selectors from 'common/store/reducers/dataList';
import * as config from './config';

const CONFIGURATION = {
  FETCH_DATA: {
    url: '/api/sales_orders',
    method: 'GET',
    data: {
      include: 'sku,batch'
    },
  },
  UPDATE_ITEM: (payload) => ({
    url: `/api/sales_orders/${payload.id}`,
    method: 'PUT',
    data: payload,
  }),
  FETCH_ITEM_DATA: (id) => ({
    url: `/api/sales_orders/${id}/sales_order_items`,
    method: 'GET',
    data: {
      include: 'sku,batch_and_location'
    },
  }),
};

// Add any options here if needed
const mapStateToProps = ({ dataList }, ownProps) => ({
  data: selectors.getDataList(dataList),
  baseData: dataList.data,
  meta: dataList.meta,
  config,
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
  getItem(payload) {
    return dispatch(Action.fetchItemData({
      apiConfiguration: CONFIGURATION.FETCH_ITEM_DATA(payload),
    }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
