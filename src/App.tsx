import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import RButton from './components/RButton';

function App() {
  const items = ['New York', 'San Francisco', 'Tokyo', 'Paris'];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const handleButtonClick = () => {
    console.log('Clicked');
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      />
      <Alert>
        Hello <strong>World</strong>
      </Alert>
      <RButton onClick={handleButtonClick} color="success">Submit</RButton>
    </div>
  );
}

export default App;
