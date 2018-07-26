import React from 'react';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import Switch from 'react-router-dom/Switch';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
// Pages
import Admin from 'pages/Admin';
import Login from 'pages/Login';
import EnhancedTable from 'components/Table';
import NavBar from 'containers/NavBar';
import {fetchDataList} from './store/actions';
import { connect } from 'react-redux';
import { dateFormatter } from 'common/utility/formatters';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
jss.options.insertionPoint = 'jss-insertion-point';

const formatLabel = (string_like_this) => {
  const parts = string_like_this.split('_').map(s => s.slice(0, 1).toUpperCase() + s.slice(1))
  return parts.join(' ');
}
const getColumns = (data) => {
  if (!Array.isArray(data)) {
    console.warn('[getFirstColumn]: getFirstColumn expect array')
    return
  }
  if (data.length === 0) {
    return ''
  }

  const columnNames = Object.keys(data[0])

  return columnNames.map(column => ({id: column, label: formatLabel(column)}));
};


let ExportableTable = ({getData, data}) => (
  <EnhancedTable
		getData={getData}
		data={data}
    getColumns={getColumns}
    dataURL={'not required'}
    hideFields={['id']}
    tableTitle={"Stuff Stuff"}
    fieldFormatters={{
      created_at: dateFormatter,
      updated_at: dateFormatter
    }}
    searchFields={['vendor_id', 'location_id']}
  />
)

const App = () => (
	<div>
		<NavBar />
		<JssProvider jss={jss} generateClassName={generateClassName}>
			<Switch>
				<Route exact path="/tb" component={ExportableTable} />
			  <Route path="/administration" component={Admin} />
				<Route path="/login" component={Login} />
				<Redirect to="/administration" />
			</Switch>
		</JssProvider>
	</div>
);

export default App;
