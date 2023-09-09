import React from "react";
import "./Table.css";
import { AiOutlineClose } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
interface TableProps {
  data: Array<any>;
  handleOpenModalDieuChinhCotHienThi: () => void;
}
const Table: React.FC<TableProps> = ({
  handleOpenModalDieuChinhCotHienThi,
}) => {
  return (
    <div className="table_general">
      <div className="filter_table">
        <div className="filter_status">
          <span>Trạng thái: Đã xuất kho, Đã xác nhận</span>
          <AiOutlineClose color="#007AFF" />
        </div>
        <div className="filter_status">
          <span>Kho:TLM, LK247</span>
          <AiOutlineClose color="#007AFF" />
        </div>
        <div className="filter_status">
          <span>Kỹ thuật: Bình, Khoa</span>
          <AiOutlineClose color="#007AFF" />
        </div>
      </div>
      <table className="table_test">
        <thead>
          <th className="th_input" style={{ textAlign: "unset" }}>
            <div className="container">
              <FiSettings
                color="#4361EE"
                size={20}
                style={{ marginRight: "12px" }}
                onClick={handleOpenModalDieuChinhCotHienThi}
              />
              <input type="checkbox" />
            </div>
          </th>
          <th>Mã phiếu</th>
          <th>Tên sản phẩm</th>
          <th>Giá bán</th>
          <th>Kho</th>
          <th>Mã phiếu dịch vụ</th>
          <th>Trạng thái</th>
          <th>Loại</th>
          <th>Kỹ thuật</th>
        </thead>
        <tbody>
          <tr>
            <td className="td_input">
              <input type="checkbox" />
            </td>
            <td>XKLK21738</td>
            <td className="name_product">Kính iPhone 14 Pro Max</td>
            <td>70,000đ</td>
            <td>TLM</td>
            <td className="id_service">PBH98142</td>
            <td style={{ color: "#FF9E00" }}>Yêu cầu</td>
            <td>Linh kiện cần</td>
            <td>Bình</td>
          </tr>
          <tr>
            <td className="td_input">
              <input type="checkbox" />
            </td>
            <td>XKLK21738</td>
            <td className="name_product">Kính iPhone 14 Pro Max</td>
            <td>70,000đ</td>
            <td>TLM</td>
            <td className="id_service">PBH98142</td>
            <td style={{ color: "#007AFF" }}>Đã xuất kho</td>
            <td>Linh kiện cần</td>
            <td>Bình</td>
          </tr>
          <tr>
            <td className="td_input">
              <input type="checkbox" />
            </td>
            <td>XKLK21738</td>
            <td className="name_product">Kính iPhone 14 Pro Max</td>
            <td>70,000đ</td>
            <td>TLM</td>
            <td className="id_service">PBH98142</td>
            <td style={{ color: "#0DC268" }}>Đã xác nhận</td>
            <td>Linh kiện cần</td>
            <td>Bình</td>
          </tr>
          <tr>
            <td className="td_input">
              <input type="checkbox" />
            </td>
            <td>XKLK21738</td>
            <td className="name_product">Kính iPhone 14 Pro Max</td>
            <td>70,000đ</td>
            <td>TLM</td>
            <td className="id_service">PBH98142</td>
            <td style={{ color: "#747C87" }}>Cần xác nhận</td>
            <td>Linh kiện cần</td>
            <td>Bình</td>
          </tr>
          <tr>
            <td className="td_input">
              <input type="checkbox" />
            </td>
            <td>XKLK21738</td>
            <td className="name_product">Kính iPhone 14 Pro Max</td>
            <td>70,000đ</td>
            <td>TLM</td>
            <td className="id_service">PBH98142</td>
            <td style={{ color: "#ED0A34" }}>Trả lại</td>
            <td>Linh kiện cần</td>
            <td>Bình</td>
          </tr>
        </tbody>
        <tfoot className="tfoot_table">
          <tr>
            <td className="tfoot_page_number">Hiển thị 1-10 của 1126</td>
            <td>
              {
                <select className="tfoot_select">
                  <option value="5">5</option>
                  <option selected value="10">
                    10
                  </option>
                  <option value="25">25</option>
                </select>
              }
            </td>
            <td className="tfoot_pagination">
              <div className="tfoot_pagination_wrapper">
                <div className="tfoot_pagination_button">{"<<"}</div>
                <div className="tfoot_pagination_button">{"<"}</div>
                <div className="tfoot_pagination_button">1</div>
                <div className="tfoot_pagination_button tfoot_pagination_button_active">
                  2
                </div>
                <div className="tfoot_pagination_button">3</div>
                <div className="tfoot_pagination_button">{">"}</div>
                <div className="tfoot_pagination_button">{">>"}</div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
