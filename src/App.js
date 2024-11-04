import styles from './App.module.scss';
import CardList from "./components/CardList/CardList";

function App() {
  return (
      <div className={styles.appContainer}>
        <CardList />
      </div>
  );
}

export default App;
