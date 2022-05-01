import Article from "../components/article";
import Aside from "../components/aside";
import { TSPData } from "../data/navdata";

import classes from "./index.module.scss";

export default function Home({ products }) {
  return (
    <div className={classes.container}>
      <div className={classes.aside}>
        <Aside />
      </div>
      <div className={classes.article}>
        <Article products={products} />
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const products = TSPData;
  return {
    props: {
      products,
    },
  };
}
