import React, { FunctionComponent } from "react";
import StripedDatagrid from "~/components/StripedDatagrid";
import CustomToolbar from "~/components/Datagrid/CustomToolbar";
import { useSearchParams } from "@remix-run/react";
import { GridCsvExportOptions } from "@mui/x-data-grid";
import dayjs from "dayjs";

interface OwnProps {
  paginate?: boolean;
  source: any;
  getRowId: any;
  extraSlots: any;
  csvOptions?: GridCsvExportOptions;
}

type Props = OwnProps;

const CustomDataGrid: FunctionComponent<Props> = (props) => {
  const {
    paginate,
    source,
    getRowId,
    extraSlots,
    csvOptions = {
      fileName: `Export_${dayjs().format("DD-MM-YYYY HH:mm a")}`,
    },
    ...otherProps
  } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const handlePaginationChange = (pageOptions) => {
    const { page: pageNumber, pageSize } = pageOptions;
    if (pageNumber !== null && pageSize !== null) {
      const initialSearchParams = [...searchParams.entries()].reduce(
        (acc, [key, value]) => ({ ...acc, [key]: value }),
        {}
      );
      setSearchParams({ ...initialSearchParams, pageSize, pageNumber });
    }
  };
  const onFilterChange = (filterOptions) => {
    let filterItems = filterOptions?.items?.reduce((acc, val) => {
      if (
        val.value !== "" ||
        val.value !== null ||
        typeof val.value !== "undefined"
      ) {
        acc[val.field] = val.value;
      }
      return acc;
    }, {});
    const initialSearchParams = [...searchParams.entries()].reduce(
      (acc, [key, value]) => ({ ...acc, [key]: value }),
      {}
    );
    if (filterOptions.items.length > 0) {
      setSearchParams({ ...initialSearchParams, ...filterItems });
    } else {
      if (initialSearchParams?.pageSize && initialSearchParams?.pageNumber) {
        setSearchParams({
          pageSize: initialSearchParams?.pageSize,
          pageNumber: initialSearchParams?.pageNumber,
        });
      }
    }
  };

  const paginationProps = paginate
    ? {
        paginationMode: "server",
        paginationModel: { pageSize: source.pageSize, page: source.pageNumber },
        pageSizeOptions: [10, 20, 50, 100],
        onPaginationModelChange: handlePaginationChange,
        pagination: true,
      }
    : {};

  const slots = extraSlots || {};

  return (
    <StripedDatagrid
      slots={{
        toolbar: CustomToolbar,
        ...slots,
      }}
      rows={source?.data}
      rowCount={source?.totalRecords}
      getRowId={getRowId}
      density={"compact"}
      filterMode="server"
      slotProps={{ toolbar: { csvOptions } }}
      onFilterModelChange={onFilterChange}
      {...paginationProps}
      {...otherProps}
    />
  );
};

export default CustomDataGrid;
