import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 40px;
  border : 1px solid #007bff;
  padding : 20px;
`;

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

const Label = styled.label`
  margin-left: 8px;
  text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
`;

const CheckedOptions = styled.div`
  margin-top: 16px;
  padding: 8px;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const ResetButton = styled.button`
  margin-top: 16px;
  padding: 8px 12px;
  border: none;
  background-color: #007bff;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #0056b3;
  }
`;

function ChoixOption() {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setCheckedItems((prevState) => ({
      ...prevState,
      [value]: checked,
    }))
  };
  
  return (
    <Container>
      {['Html', 'JavaScript', 'Css', 'C++', 'Python', 'Bootstrap'].map((option, index) => (
        <OptionWrapper key={index}>
          <input
            type="checkbox"
            value={option}
            onChange={handleCheckboxChange}
            checked={!!checkedItems[option]}
          />
          <Label checked={!!checkedItems[option]}>{option}</Label>
        </OptionWrapper>
      ))}
    <ResetButton onClick={() => setCheckedItems({})}>Reset</ResetButton>
      <CheckedOptions>
        <h4>Checked Options:</h4>
        <ul>
          {Object.entries(checkedItems)
            .filter(([, isChecked]) => isChecked)
            .map(([option]) => (
              <li key={option}>{option}</li>
            ))}
        </ul>
      </CheckedOptions>
    </Container>
  );
}

export default ChoixOption;
