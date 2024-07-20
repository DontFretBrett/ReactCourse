import ListGroup from './components/ListGroup';
import Alert from './components/Alert';

function App() {
  const items = ['New York', 'San Francisco', 'Tokyo', 'Paris'];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      />
      <Alert>Hello <strong>World</strong></Alert>
    </div>
  );
}

export default App;
