import MenuItem from "@mui/material/MenuItem";

import { useState } from "react";
import { FormControl, Select } from "@mui/material";
import classes from "./Menu.module.scss";

export default function CustomizedMenus() {
  const [age, setAge] = useState("Weekly");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.form}>
        <Select
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="Weekly">Weekly</MenuItem>
          <MenuItem value="Monthly">Monthly</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
