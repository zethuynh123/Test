import { useState } from "react";
// import "./index.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

interface DropDownBoostrapProps {
  //   title: string;
  //   onHide?: () => void;
  //   show: boolean;
}
const DropDownBoostrap = ({}: DropDownBoostrapProps) => {
  return (
    <>
      <div className="mb-2">
        <DropdownButton
          as={ButtonGroup}
          key={"start"}
          id={`dropdown-button-drop-start`}
          drop={"start"}
          variant="secondary"
          title={` Drop start `}
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          {/* <div>abc</div>
          <div>abc</div>
          <div>abc</div>
          <div>abc</div> */}
        </DropdownButton>
      </div>
    </>
  );
};

export default DropDownBoostrap;
