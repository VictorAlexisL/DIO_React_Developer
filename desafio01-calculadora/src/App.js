import Input from './components/Input';
import Button from './components/Button'
import { Container, Content, Row } from './styles'
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  return (
    <Container className="App">
      <header className="App-header">
        <Content>
          <Input />
          <Row>
            <Button label="x" onClick={() => handleAddNumber('x')}/>
            <Button label="/" onClick={() => handleAddNumber('/')}/>
            <Button label="C" onClick={() => handleOnClear()}/>
            <Button label="X" onClick={() => handleAddNumber('X')}/>
          </Row> 
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="-" onClick={() => handleAddNumber('-')}/>
          </Row>          
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="+" onClick={() => handleAddNumber('+')}/>
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="=" onClick={() => handleAddNumber('4')}/>
          </Row>
        </Content>
      </header>
    </Container>
  );
}

export default App;