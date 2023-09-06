import { useState } from 'react';
import { SearchModal } from './components/modals/SearchModal';
import './styles/index.scss';
import styled from 'styled-components';

const TriggerButton = styled.button`
  text-transform: uppercase;
  border: none;
  outline: none;
  padding: 12px 16px;
  background-color: teal;
  cursor: pointer;
`;

function App() {
  const [isModalVisible, showModal] = useState(false);

  const onShowHandler = () => showModal(true);

  const onCloseHandler = () => showModal(false);

  return (
    <main>
      <TriggerButton onClick={onShowHandler}>Show Modal</TriggerButton>
      {isModalVisible ? <SearchModal onClose={onCloseHandler} /> : null}
    </main>
  );
}

export default App;
