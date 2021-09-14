import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p>- CssModules -</p>
      <button>fight</button>
    </div>
  );
};
