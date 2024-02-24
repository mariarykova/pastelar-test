import classes from "./button.module.css";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <div className={classes.btn_wrapper}>
      <button className={classes.btn} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
