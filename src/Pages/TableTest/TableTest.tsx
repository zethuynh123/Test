import React, { Fragment, useState } from "react";
import Table from "../../Components/Table/Table.tsx";
import FilterSearch from "../../Components/FilterSearch/index.tsx";
import ModalDieuChinhCotHienThi from "../../Components/Modal/ModalDieuChinhCotHienThi/index.tsx";
import ModalFilter from "../../Components/Modal/ModalFilter/index.tsx";

interface TableTestProps {
  data: Array<any>;
}
const TableTest: React.FC<TableTestProps> = () => {
  const [showModalDieuChinhCotHienThi, setShowModalDieuChinhCotHienThi] =
    useState<boolean>(false);
  const [showModalFilter, setShowModalFilter] = useState<boolean>(false);
  return (
    <div className="py-3 px-3">
      <ModalFilter
        show={showModalFilter}
        onHide={() => setShowModalFilter(false)}
      />
      <ModalDieuChinhCotHienThi
        show={showModalDieuChinhCotHienThi}
        onHide={() => setShowModalDieuChinhCotHienThi(false)}
      />
      <FilterSearch
        data={[]}
        handleOpenModalFilter={() => setShowModalFilter(true)}
      />
      <Table
        data={[]}
        handleOpenModalDieuChinhCotHienThi={() =>
          setShowModalDieuChinhCotHienThi(true)
        }
      />
    </div>
  );
};

export default TableTest;
