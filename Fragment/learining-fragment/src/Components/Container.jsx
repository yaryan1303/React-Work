import styles from "./Container.module.css";
const Container = ({ children }) => {
  return <div classNameName={styles.Container}>{children}</div>;
};

export default Container;
