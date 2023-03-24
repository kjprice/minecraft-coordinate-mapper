import React from "react";
import { connect } from "react-redux";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import ColorPicker from "../../common/ColorPicker";

import { setIconSettingValue } from "../../../redux/actions/sketch";

const IconSettingOption = props => {
  const {text, color, shape, onChange} = props;
  // console.log({text, color, shape});

  const onSettingChange = (option, value) => {
    onChange(text, option, value)
    console.log({option, value})
  }
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          {text}
        </Form.Label>
        <Col sm={4}>
          <ColorPicker onChange={(e)=>onSettingChange('color', e.target.value)} color={color} />
        </Col>
      </Form.Group>
    </Form>
  );
}

const actions = {
  setIconSettingValue,
};

export default connect(() => ({}), actions)(IconSettingOption);