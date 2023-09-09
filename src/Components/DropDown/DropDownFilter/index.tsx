import { useState } from "react";
import "./index.css";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import SelectReact from "../../SelectReact/index";

interface DropDownFilterProps {
  title: string;
  //   onHide?: () => void;
  //   show: boolean;
}
const DropDownFilter = ({ title }: DropDownFilterProps) => {
  const [dropDown, setDropDown] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    setDropDown(!dropDown);
  };
  return (
    <div className="py-3 px-3 border-bottom" style={{ fontSize: "14px" }}>
      <div
        className="d-flex justify-content-between"
        style={{ fontSize: "14px,", fontWeight: "500" }}
        onClick={handleClick}
      >
        <div className="d-flex align-items-center gap-2">
          {dropDown ? <BsChevronDown color="#007AFF" /> : <BsChevronRight />}

          <div>{title}</div>
        </div>
        <div className="selected">Đã chọn 2</div>
      </div>
      {dropDown && (
        <div className="mt-2">
          <SelectReact />
        </div>
      )}
    </div>
  );
};

export default DropDownFilter;
