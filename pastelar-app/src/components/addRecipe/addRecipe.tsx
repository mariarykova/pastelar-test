import classes from "./addRecipe.module.css";

export default function AddRecipe() {
  return (
    <div className={classes.wrapper}>
      <h3>Recette ajoutee avec succes</h3>
      <div className={classes.circle}>
        <div className={classes.checkmark}></div>
      </div>
    </div>
  );
}
