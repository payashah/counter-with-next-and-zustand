import { useCounterStore } from '@/store/counter';

export default function counter() {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <div style={{
      backgroundColor: 'blue', display: 'flex', justifyContent: 'center',
      alignItems: 'center', width: "100%", height: "100vh"
    }}>
      <main style={{ backgroundColor: 'gray', textAlign: 'center', padding: 10, width: "15rem" }}>
        <h1 style={{ marginBottom: ".5rem" }}>Counter:</h1>
        <h2 style={{ marginBottom: ".5rem" }}>{count}</h2>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={decrease} style={{ padding: ".2rem .4rem" }}>decrease</button>
          <button onClick={reset} style={{ padding: ".2rem .4rem" }}>reset</button>
          <button onClick={increase} style={{ padding: ".2rem .4rem" }} >increase</button>
        </div>

      </main>
    </div>
  );
}
