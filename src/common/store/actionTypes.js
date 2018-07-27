import actionGenerator from 'common/utility/actionGenerator';
const generator = actionGenerator('');

export default {
	FETCH_USER_DETAILS: generator('FETCH_USER_DETAILS'),
  UPDATE_DATA_LIST: generator('UPDATE_DATA_LIST')
}
