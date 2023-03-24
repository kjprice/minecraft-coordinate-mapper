import Form from 'react-bootstrap/Form';

function ColorPicker(props) {
  const { color="#563d7c", title="Choose your color", onChange = ()=>{}} = props;
  return (
      <Form.Control
        type="color"
        value={color}
        title={title}
        onChange={onChange}
      />
  );
}

export default ColorPicker;