import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import RButton from './components/RButton';
import { useState } from 'react';

function App() {
  const items = ['New York', 'San Francisco', 'Tokyo', 'Paris'];

  const [alertDisplayed, displayAlert] = useState(false);

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      />
      {alertDisplayed && (
        <Alert onClose={() => displayAlert(false)}>
          Hello <strong>World</strong>
        </Alert>
      )}
      <RButton onClick={() => displayAlert(true)} color="success">
        Show Alert
      </RButton>
    </>
  );
}

export default App;
