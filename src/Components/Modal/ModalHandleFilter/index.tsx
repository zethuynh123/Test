import { Fragment } from "react";
import Modal from "react-bootstrap/Modal";
import "./index.css";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
interface ModalHandleFilterProps {
  data?: Array<any>;
  onHide?: () => void;
  show: boolean;
}
const ModalHandleFilter = ({ data, onHide, show }: ModalHandleFilterProps) => {
  return (
    <Fragment>
      <Modal
        className="modal fade custom_width"
        scrollable={true}
        show={show}
        onHide={onHide}
      >
        <Modal.Body className=" py-0 px-0" style={{ fontFamily: "Manrope" }}>
          <div className="py-3 px-3">
            <div
              className="d-flex gap-3 align-items-center handle_func"
              onClick={onHide}
            >
              <FiEdit2 />
              <div className="name_func"> Đổi tên </div>
            </div>
            <div
              className="d-flex gap-3 align-items-center handle_func mt-2"
              onClick={onHide}
            >
              <RiDeleteBinLine size={18} />
              <div className="name_func"> Xóa </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default ModalHandleFilter;
