import React from 'react'
import { render } from 'react-dom'
import Form from 'material-ui-jsonschema-form'

class WrappedForm extends React.Component {
  render() {
    
    return (
      <Form
        formData={this.props.data}
        schema={this.props.schema}
        onSubmit={this.props.onSubmit}
        uiSchema={this.props.uiSchema}
      />
    )
  }
}

export default WrappedForm;
