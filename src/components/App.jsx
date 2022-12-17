import Counter from "./counter/Counter"
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101'
      }}
    >
      <Counter/>
    </div>
  );
};
