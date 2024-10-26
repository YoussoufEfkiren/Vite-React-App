// VilleList.js
import  { useState } from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 30px;
  border: 1px solid #007bff;
  border-radius: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid #007bff;
  border-radius: 5px;
  width: 80%;
  margin-right: 10px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #0056b3;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const ListItem = styled.li`
  padding: 8px;
  border: 1px solid #007bff;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: space-between; /* Align items in a row */
  align-items: center; /* Center items vertically */
`;

const Counter = styled.p`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const ToDoList = () => {
  // State to hold the input value and the list of villes
  const [ville, setVille] = useState('');
  const [villes, setVilles] = useState([]);

  const addVille = () => {
    if (ville.trim() === '') return; // Prevent adding empty values
    setVilles([...villes, ville]); // Add the new ville to the list
    setVille(''); // Clear the input field
  };

  const deleteVille = (index) => {
    setVilles(villes.filter((_, i) => i !== index)); // Remove ville at the specified index
  };

  return (
    <Container>
      <Input
        type="text"
        className="ville"
        value={ville}
        onChange={(e) => setVille(e.target.value)} // Update the state on input change
        placeholder="Enter a city"
      />
      <Button onClick={addVille}>Add Ville</Button>
      
      <List>
        {villes.map((v, index) => (
          <ListItem key={index}>
            {v} {/* Render the ville */}
            <DeleteButton onClick={() => deleteVille(index)}>Delete</DeleteButton> {/* Delete button */}
          </ListItem>
        ))}
      </List>

      <Counter>{`Total Villes: ${villes.length}`}</Counter> {/* Counter to display total villes */}
    </Container>
  );
};

export default ToDoList;
