import { Fragment, useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./index.css";
import { AiOutlineClose } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import DropDownFilter from "../../DropDown/DropDownFilter";
import ModalSaved from "../ModalSaved";
import DropDownBoostrap from "../../DropDown/DropDownBoostrap";
import ModalSaveFilter from "../ModalSaveFilter";
interface ModalFilterProps {
  data?: Array<any>;
  onHide?: () => void;
  show: boolean;
}
const ModalFilter = ({ data, onHide, show }: ModalFilterProps) => {
  const [showModalSaved, setShowModalSaved] = useState<boolean>(false);
  const [showModalSaveFilter, setShowModalSaveFilter] =
    useState<boolean>(false);
  return (
    <Fragment>
      <ModalSaveFilter
        show={showModalSaveFilter}
        onHide={(val?: boolean) => {
          if (val) {
            setShowModalSaveFilter(false);
            onHide?.();
          } else {
            setShowModalSaveFilter(false);
          }
        }}
      />
      <ModalSaved
        show={showModalSaved}
        onHide={() => setShowModalSaved(false)}
      />
      <Modal
        centered
        className="modal fade custome_width_modal"
        scrollable={true}
        show={show}
        onHide={onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title modal_title">Bộ lọc</Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="py-0 px-0 d-flex pb-5"
          style={{ fontFamily: "Manrope" }}
        >
          <div className="w-100">
            <div className="filter_and_search w-100 border-bottom">
              <div className=" pt-4 px-3 pb-2">
                <div className="search">
                  <BsSearch color="#939393" style={{ marginRight: "10px" }} />
                  <input type="search" placeholder="Tìm kiếm bộ lọc" />
                </div>
                <div
                  className="filter mt-3"
                  onClick={() => setShowModalSaved(true)}
                >
                  <FiFilter color="#007AFF" style={{ marginRight: "10px" }} />
                  <div>Bộ lọc đã lưu</div>
                </div>
              </div>
            </div>
            <DropDownFilter title="Trạng thái" />
            <DropDownFilter title="Danh mục" />
            <DropDownFilter title="Người tạo" />
            <DropDownFilter title="Tag" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-center gap-2 w-100">
            <div
              className="py-2 px-4 border border-danger border-2 rounded-1"
              onClick={() => setShowModalSaved(false)}
            >
              Hủy
            </div>
            <div
              className=" py-2 px-4 bg-primary text-white rounded-1"
              onClick={() => setShowModalSaveFilter(true)}
            >
              Lọc
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default ModalFilter;
