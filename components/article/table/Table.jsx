import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import classes from "./Table.module.scss";

const TransactionList = () => {
  const rows = [
    {
      id: 1143155,
      product: "Godspeed Vest",
      img: "https://global-uploads.webflow.com/5d556af3fe21d65f602dca94/61dff3f5e0198a26c25e6d45_Frame%2030-p-500.jpeg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "St. Perry Shirt",
      img: "https://global-uploads.webflow.com/5d556af3fe21d65f602dca94/6171357fcb12cd0a3aff6e31_Group%20108-p-500.jpeg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Royale Sneakers",
      img: "https://global-uploads.webflow.com/5d556af3fe21d65f602dca94/5ef0ab60b22d8333b3cf57e7_Order%20%23538714%20%7C%20cra%40greatsbrand.com%202-p-500.jpeg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "TWA Sneakers",
      img: "https://global-uploads.webflow.com/5d556af3fe21d65f602dca94/5dec1fa4ef1c1080ebb07393_Mv46P9lBnZDz-p-500.png",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "Ray Bam Sunglasses",
      img: "https://global-uploads.webflow.com/5d556af3fe21d65f602dca94/5ef0a76460d29e11d65e927f_Order%20%23538830%20%7C%20timmy%40emberniche.com%204-p-500.jpeg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <div>
      <div className={classes.heading}>
        <h3>Latest transactions</h3>
      </div>
      <TableContainer component={Paper} className={classes.table}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>Tracking ID</TableCell>
              <TableCell className={classes.tableCell}>Product</TableCell>
              <TableCell className={classes.tableCell}>Customer</TableCell>
              <TableCell className={classes.tableCell}>Date</TableCell>
              <TableCell className={classes.tableCell}>Amount</TableCell>
              <TableCell className={classes.tableCell}>
                Payment Method
              </TableCell>
              <TableCell className={classes.tableCell}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className={classes.tableCell}>{row.id}</TableCell>
                <TableCell className={classes.tableCell}>
                  <div className={classes.cellWrapper}>
                    <Image
                      src={row.img}
                      alt={row.product}
                      height="32px"
                      width="32px"
                      className={classes.image}
                    />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {row.customer}
                </TableCell>
                <TableCell className={classes.tableCell}>{row.date}</TableCell>
                <TableCell className={classes.tableCell}>
                  {row.amount}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {row.method}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <span
                    className={`${classes.status} ${
                      row.status === "Pending"
                        ? classes.Pending
                        : classes.Approved
                    }`}
                  >
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TransactionList;
