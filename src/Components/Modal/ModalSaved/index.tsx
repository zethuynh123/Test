import { Fragment, useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./index.css";
import { AiOutlineMenu } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import ModalHandleFilter from "../ModalHandleFilter";
interface ModalSavedProps {
  data?: Array<any>;
  onHide?: () => void;
  show: boolean;
}
const ModalSaved = ({ data, onHide, show }: ModalSavedProps) => {
  const [showModalHandleFilter, setShowModalHandleFilter] =
    useState<boolean>(false);
  return (
    <Fragment>
      <ModalHandleFilter
        show={showModalHandleFilter}
        onHide={() => setShowModalHandleFilter(false)}
      />
      <Modal
        className="modal fade modal_saved_custom_position"
        scrollable={true}
        show={show}
        onHide={onHide}
      >
        <Modal.Body className=" py-0 px-0" style={{ fontFamily: "Manrope" }}>
          <div className="py-3">
            <div className="d-flex justify-content-between align-items-center py-3 px-3 hover_filter">
              <div className="d-flex align-items-center gap-3">
                <AiOutlineMenu size={12} fontWeight={500} />
                <div className="filter_title">Lọc theo trạng thái</div>
              </div>
              <BsThreeDots onClick={() => setShowModalHandleFilter(true)} />
            </div>
            <div className="d-flex justify-content-between align-items-center py-3 px-3 hover_filter">
              <div className="d-flex align-items-center gap-3">
                <AiOutlineMenu size={12} fontWeight={500} />
                <div className="filter_title">Lọc theo ngày tạo hôm nay</div>
              </div>
              <BsThreeDots />
            </div>
            <div className="d-flex justify-content-between align-items-center py-3 px-3 hover_filter">
              <div className="d-flex align-items-center gap-3">
                <AiOutlineMenu size={12} fontWeight={500} />
                <div className="filter_title">Lọc theo tag iPhone</div>
              </div>
              <BsThreeDots />
            </div>
            <div className="d-flex justify-content-between align-items-center py-3 px-3 hover_filter">
              <div className="d-flex align-items-center gap-3">
                <AiOutlineMenu size={12} fontWeight={500} />
                <div className="filter_title">Lọc theo người tạo</div>
              </div>
              <BsThreeDots />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default ModalSaved;
