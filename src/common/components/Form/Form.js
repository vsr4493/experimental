import React from 'react'
import { render } from 'react-dom'
import Form from 'material-ui-jsonschema-form';
import { withStyles } from '@material-ui/core/styles';

const style = {
  form: {
    border: 0,
    width: "300px",
  }
}

class WrappedForm extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Form className={classes.form}
        formData={this.props.data}
        schema={this.props.schema}
        onSubmit={this.props.onSubmit}
        uiSchema={this.props.uiSchema}
      />
    )
  }
}

export default withStyles(style)(WrappedForm);
