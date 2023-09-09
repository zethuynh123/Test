import { Fragment } from "react";
import Modal from "react-bootstrap/Modal";
import "./index.css";
import { AiOutlineClose } from "react-icons/ai";
interface ModalDieuChinhCotHienThiProps {
  data?: Array<any>;
  onHide?: () => void;
  show: boolean;
}
const ModalDieuChinhCotHienThi = ({
  data,
  onHide,
  show,
}: ModalDieuChinhCotHienThiProps) => {
  return (
    <Fragment>
      <Modal
        centered
        size="lg"
        className="modal fade"
        scrollable={true}
        show={show}
        onHide={onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title modal_title">
            Điều chỉnh cột hiển thị
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className=" py-4 px-3 d-flex">
          <div className="d-flex justify-content-between w-100 gap-3">
            <div className="add_table border w-100  ">
              <div className="add__table_header text-center py-3  border-bottom">
                Thêm cột hiển thị
              </div>
              <div className="add__table_content py-4 px-3">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tìm kiếm"
                  />
                </div>
                <div>
                  <div className="custome_input">
                    <input type="checkbox" id="cb1" className="cb_custom" />
                    <label htmlFor="cb1"></label>
                    <label htmlFor="cb1" className="label_custome_input">
                      Mã khách hàng
                    </label>
                  </div>
                  <div className="custome_input">
                    <input type="checkbox" id="cb2" className="cb_custom" />
                    <label htmlFor="cb2"></label>
                    <label htmlFor="cb2" className="label_custome_input">
                      Tên khách hàng
                    </label>
                  </div>
                  <div className="custome_input">
                    <input type="checkbox" id="cb3" className="cb_custom" />
                    <label htmlFor="cb3"></label>
                    <label htmlFor="cb3" className="label_custome_input">
                      Số điện thoại
                    </label>
                  </div>
                  <div className="custome_input">
                    <input type="checkbox" id="cb4" className="cb_custom" />
                    <label htmlFor="cb4"></label>
                    <label htmlFor="cb4" className="label_custome_input">
                      Nhóm khách hàng
                    </label>
                  </div>
                  <div className="custome_input">
                    <input type="checkbox" id="cb5" className="cb_custom" />
                    <label htmlFor="cb5"></label>
                    <label htmlFor="cb5" className="label_custome_input">
                      Nợ hiện tại
                    </label>
                  </div>
                  <div className="custome_input">
                    <input type="checkbox" id="cb6" className="cb_custom" />
                    <label htmlFor="cb6"></label>
                    <label htmlFor="cb6" className="label_custome_input">
                      Tổng chi tiêu
                    </label>
                  </div>
                  <div className="custome_input">
                    <input type="checkbox" id="cb7" className="cb_custom" />
                    <label htmlFor="cb7"></label>
                    <label htmlFor="cb7" className="label_custome_input">
                      Lợi nhuận
                    </label>
                  </div>
                  <div className="custome_input">
                    <input type="checkbox" id="cb8" className="cb_custom" />
                    <label htmlFor="cb8"></label>
                    <label htmlFor="cb8" className="label_custome_input">
                      SL đơn hàng
                    </label>
                  </div>
                  <div className="custome_input">
                    <input type="checkbox" id="cb9" className="cb_custom" />
                    <label htmlFor="cb9"></label>
                    <label htmlFor="cb9" className="label_custome_input">
                      Ngày tạo
                    </label>
                  </div>
                  <div className="custome_input">
                    <input type="checkbox" id="cb10" className="cb_custom" />
                    <label htmlFor="cb10"></label>
                    <label htmlFor="cb10" className="label_custome_input">
                      Ngày cập nhật
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="display_table border w-100 ">
              <div className="display__table_header text-center py-3 border-bottom">
                cột hiển thị
              </div>
              <div className="display__table_content  py-4">
                <div className="border-bottom">
                  <p className="text-center" style={{ color: "#007AFF" }}>
                    Di chuyển để sắp xếp cột hiển thị
                  </p>
                </div>
                <div>
                  <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
                    Mã khách hàng
                    <AiOutlineClose />
                  </div>
                  <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
                    Tên khách hàng
                    <AiOutlineClose />
                  </div>
                  <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
                    Số điện thoại
                    <AiOutlineClose />
                  </div>
                  <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
                    Nhóm khách hàng
                    <AiOutlineClose />
                  </div>
                  <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
                    Nợ hiện tại
                    <AiOutlineClose />
                  </div>
                  <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
                    Tổng chi tiêu
                    <AiOutlineClose />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default ModalDieuChinhCotHienThi;
