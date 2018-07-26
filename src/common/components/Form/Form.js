import React from 'react';
import Form from 'material-ui-jsonschema-form';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  field: {
    border: 0,
    display: 'inline-block',
  }
}

class WrappedForm extends React.Component {
  render() {
    const { classes, data, schema, onSubmit, uiSchema } = this.props;
    return (
      <Form
        className={classes.field}
        formData={data}
        schema={schema}
        onSubmit={onSubmit}
        uiSchema={uiSchema}
      />
    )
  }
}

export default withStyles(styles)(WrappedForm);
