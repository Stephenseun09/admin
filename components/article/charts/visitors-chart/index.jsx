import Chart from "./Chart";
import CustomizedMenus from "./Menu";
import classes from "./index.module.scss";

const VisitorsChart = () => {
  return (
    <div className={classes.container}>
      <div className={classes.chart__heading}>
        <h3>Unique Visitors</h3>
        <CustomizedMenus />
      </div>
      <div className={classes.chart__container}>
        <Chart />
      </div>
    </div>
  );
};

export default VisitorsChart;
