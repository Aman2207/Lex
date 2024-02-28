import './App.css';
import Navigation from './Navi';
import { InputGroup, InputGroupText, Input, Label } from 'reactstrap';
import { FaSearch } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation title="| My Smart Agent" />
      </header>
      <div className='d-flex flex-row bd-highlight w-100 gap-2' style={{ height: '90vh', }}>
        <div style={{ backgroundColor: 'yellow', height: '90vh', width: '5vw', }}></div>
        <div className='d-flex flex-column md w-75 gap-1' style={{ height: '90vh', }}>
          <div className='d-flex flex-row w-100' style={{ height: '12.5vh', }}>
            <div className='md'>
              <Label size='sm' style={{ color: 'gray',}}>Search</Label>
              <InputGroup className='w-100' size='sm'>
                <InputGroupText>
                  <FaSearch />
                </InputGroupText>
                <Input placeholder="search" />
              </InputGroup>
            </div>
            <div className='ms-auto' style={{ width: '150px', color: 'gray',}}>
              <Label size='sm'>Filter by</Label>
              <Input clas name="select" type="select" size='sm'>
                <option disabled selected>Filter by</option>
                <option>Filter 1</option>
                <option>Filter 2</option>
              </Input>
            </div>
            <div className='ms-2 me-0' style={{ width: '150px', color: 'gray',}}>
              <Label size='sm'>Sort by</Label>
              <Input name="select" type="select" size='sm'>
                <option disabled selected>Sort by</option>
                <option>Sort 1</option>
                <option>Sort 2</option>
              </Input>
            </div>
          </div>
          <div className='md w-100' style={{ backgroundColor: 'red', height: '77.5vh', }}></div>
        </div>
        <div className='md w-25' style={{ backgroundColor: 'green', height: '90vh', }}></div>
      </div>
    </div>
  );
}

export default App;
