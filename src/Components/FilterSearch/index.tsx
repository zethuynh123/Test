import React from "react";
import "./index.css";
import { BsSearch, BsChevronDown, BsThreeDots } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
interface FilterSearchProps {
  data: Array<any>;
  handleOpenModalFilter: () => void;
}

const FilterSearch: React.FC<FilterSearchProps> = ({
  handleOpenModalFilter,
}) => {
  return (
    <div className="filter_content">
      <div className="search_input">
        <BsSearch color="#939393" />
        <input
          type="search"
          placeholder="Tìm kiếm theo mã khách hàng, tên khách hàng và số điện thoại"
        />
      </div>
      <div className="filters">
        <div className="filter_text filter_text_active">Đang lọc</div>
        <div className="filter_text">Yêu cầu</div>
        <div className="filter_text">Đã xuất kho</div>
        <div className="filter_text">
          Cần xác nhận
          <BsChevronDown color="#007AFF" style={{ marginLeft: "5px" }} />
        </div>
        <div className="change_filter_text" onClick={handleOpenModalFilter}>
          <FiFilter color="#007AFF" />
          Bộ lọc
        </div>
        <div className="filter_button">
          <div className="create_button">
            <AiOutlinePlus color="#fff" size={20} />
            <button>Thêm mới</button>
          </div>
          <div className="three_dot_buttom">
            <BsThreeDots color="#fff" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;
