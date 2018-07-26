import React from 'react'
import { render } from 'react-dom'
import Form from 'material-ui-jsonschema-form'

class WrappedForm extends React.Component {
  render() {
    const schema = {
      "title": "Inventory Edit",
      "description": "Form to edit Inventory",
      "type": "object",
      "required": [
        "location_id",
        "quantity",
        "cost_price",
        "selling_price"
      ],
      "properties": {
        "location_id": {
          "type": "integer",
          "title": "Location"
        },
        "quantity": {
          "type": "integer",
          "title": "Quantity"
        },
        "cost_price": {
          "type": "integer",
          "title": "Cost Price"
        },
        "selling_price": {
          "type": "string",
          "title": "Selling Price"
        },
      }
    };

    const formData = {
      "location_id": 60,
      "quantity": 13,
      "cost_price": "5.78",
      "selling_price": "45.08",
    };

    const uiSchema = {
      "location_id": {
      },
      "quantity": {
        "ui:title": "Quantity"
      },
      "cost_price": {
        "ui:title": "Cost Price"
      },
      "selling_price": {
        "ui:title": "Selling Price"
      }
    };
    return (
      <Form
        formData={formData}
        schema={schema}
        uiSchema={uiSchema}
      />
    )
  }
}

export default WrappedForm;
