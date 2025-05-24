import { useCounterStore } from '@/store/counter';
import styles from "./index.module.css"


export default function counter() {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <div className={styles.mainPage}>
      <main className={styles.main}>
        <h1 className={styles.counterTitle}>Counter:</h1>
        <h2 className={styles.counter}>{count}</h2>

        <div className={styles.btnBox}>
          <button onClick={decrease} className={styles.btn}>decrease</button>
          <button onClick={reset} className={styles.btn}>reset</button>
          <button onClick={increase} className={styles.btn} >increase</button>
        </div>

      </main>
    </div>
  );
}
