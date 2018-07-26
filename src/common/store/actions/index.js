import ActionTypes from "../actionTypes";

const updateDataList = ({ data, isFetchComplete }) => {
	return {
		type: ActionTypes.UPDATE_DATA_LIST,
		payload: {
			data,
			isFetchComplete,
		},
	}
}

export const fetchDataList = payload => (dispatch, getState, { request }) => {
	console.log(request);
	dispatch(updateDataList({
		isFetchComplete: false,
	}));
	return request
		.fetchDataList(payload)
		.then(({data}) => {
			if(!data.is_success) {
				throw data;
			}
			dispatch(updateDataList({
				data: data.data,
				isFetchComplete: true,
			}));
		})
		.catch(err => {
			console.log(err);
		});
};
