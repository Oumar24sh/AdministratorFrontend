import React, { FunctionComponent } from "react";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {MdClose} from "react-icons/md";

interface OwnProps {
  rows: any;
  remove: any;
}

type Props = OwnProps;

const AddExpensesItemList: FunctionComponent<Props> = (props) => {
  const { rows, remove } = props;
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Expense Name</TableCell>
            <TableCell align="right">Rate</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.expenseDisplayName}
              </TableCell>
              <TableCell align="right">{row.rate}</TableCell>
              <TableCell align="right">
                <Button>
                  <MdClose/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AddExpensesItemList;
