import { useToggle } from "../hooks/useToggle";
import styles from "./Modal.module.css"; // importo el objeto styles

// eslint-disable-next-line react/prop-types
export const Modal = ({ children }) => {
  console.log(styles);
  const { open, close, isOpen } = useToggle();
  return (
    <div>
      <button className={styles.button} onClick={open}>Open </button>
      {/*main se va a mostrar solo cuando isOpen sea true */}
      {isOpen && (
        <main className={styles.modal}>
          <div className={styles.overlay} onClick={close} />
          <div className={styles.content}>{children}</div>
        </main>
      )}
    </div>
  );
};