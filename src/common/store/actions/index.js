import ActionTypes from "../actionTypes";
import * as parser from './parser';

const updateDataList = ({ data, meta, keys, isFetchComplete }) => {
	return {
		type: ActionTypes.UPDATE_DATA_LIST,
		payload: {
			data,
			meta,
			keys,
			isFetchComplete,
		},
	}
}

export const fetchDataList = payload => (dispatch, getState, { request }) => {
	dispatch(updateDataList({
		isFetchComplete: false,
	}));
	return request
		.fetchDataList(payload)
		.then(({data}) => {
			if(!data.is_success) {
				throw data;
			}
			const responseData = data.data;
			const responseMeta = data.meta;
			dispatch(updateDataList({
				data: parser.normalizeList(responseData),
				meta: responseMeta,
				keys: responseData.map(obj => obj.id),
				isFetchComplete: true,
			}));
			return data;
		})
		.catch(err => {
			console.log(err);
		});
};

export const updateItem = payload => (dispatch, getState, { request }) => {
	dispatch(updateDataList({
		isFetchComplete: false,
	}));
	const { dataList } = getState();
	return request
		.updateItem(payload)
		.then(({data}) => {
			if(!data.is_success) {
				throw data;
			}
			const responseItem = data.data;
			dispatch(updateDataList({
				data: Object.assign({}, dataList.data, {
					[responseItem.id]: responseItem
				}),
				isFetchComplete: true,
			}));
			return data;
		})
		.catch(err => {
			console.log(err);
		});
};

export const login = payload => (dispatch, getState, { request }) => {
	return request
		.login(payload)
		.then(({data}) => data.is_success);
}

