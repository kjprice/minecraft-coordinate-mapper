import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import SHAPES from "../../../utils/sketchShapes";

const ShapeDropdown = (props) => {
  const { shape, onChange } = props;

  return (
    <DropdownButton id="dropdown-basic-button" title={shape}>
      {SHAPES.map((shape) => (
        <Dropdown.Item key={shape} onClick={() => onChange(shape)}>
          {shape}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default ShapeDropdown;