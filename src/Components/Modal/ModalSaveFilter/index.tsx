import { Fragment } from "react";
import Modal from "react-bootstrap/Modal";
import "./index.css";
import { AiOutlineMenu } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import DropDownFilter from "../../DropDown/DropDownFilter";
interface ModalSaveFilterProps {
  data?: Array<any>;
  onHide?: (val?: boolean) => void;
  show: boolean;
}
const ModalSaveFilter = ({ data, onHide, show }: ModalSaveFilterProps) => {
  return (
    <Fragment>
      <Modal
        className="modal fade modal_saved_custom_position"
        scrollable={true}
        show={show}
        onHide={onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title modal_title">
            Lưu bộ lọc
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className=" py-0 px-0" style={{ fontFamily: "Manrope" }}>
          <div className="py-4 px-3">
            <div className="filter_input">
              <input
                className="w-100  "
                type="text"
                placeholder="Nhập tên bộ lọc"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-center gap-2 w-100">
            <div
              className="py-2 px-4 border border-danger border-2 rounded-1"
              onClick={() => onHide?.()}
            >
              Hủy
            </div>
            <div
              className=" py-2 px-4 bg-primary text-white rounded-1"
              onClick={() => onHide?.(true)}
            >
              Lưu
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default ModalSaveFilter;
