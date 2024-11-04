import styles from './App.module.scss';
import Card from "./components/Card";

function App() {
  return (
      <div className={styles.appContainer}>
        <Card
            img="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
            name="Walter White"
            birthday="09.07.1958"
            status="покойный"
        />
      </div>
  );
}

export default App;
