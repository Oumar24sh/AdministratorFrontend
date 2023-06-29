import React, { FunctionComponent } from "react";
import StripedDatagrid from "~/components/StripedDatagrid";
import CustomToolbar from "~/components/Datagrid/CustomToolbar";
import { useSearchParams } from "@remix-run/react";

interface OwnProps {
  paginate?: boolean;
  source: any;
  getRowId: any;
}

type Props = OwnProps;

const CustomDataGrid: FunctionComponent<Props> = (props) => {
  const { paginate, source, getRowId, ...otherProps } = props;
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
      if(val.value !== "" || val.value !== null || typeof val.value !== "undefined"){
        acc[val.field] = val.value;
      }
      return acc;
    }, {});
    console.log({filterItems});
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

  return (
    <StripedDatagrid
      slots={{
        toolbar: CustomToolbar,
      }}
      rows={source?.data}
      rowCount={source?.totalRecords}
      getRowId={getRowId}
      density={"compact"}
      filterMode="server"
      onFilterModelChange={onFilterChange}
      {...paginationProps}
      {...otherProps}
    />
  );
};

export default CustomDataGrid;
