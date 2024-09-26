import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FavoriteButton from "./Favorite";

// Styled components for the card container
const CardContainer = styled.section`
  width: 150px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  img {
    width: 120px;
    height: 120px;
    object-fit: contain;
    margin-bottom: 8px;
  }

  div {
    font-size: 18px;
    font-weight: 500;
    color: #333;
    text-align: center;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

// Container for the grid layout
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  justify-items: center;
  padding: 20px;
  background-color: white;
`;

// Card component with navigation functionality
export const Card = ({ pokemon }) => {
  const navigate = useNavigate();

  return (
    <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
      <img src={pokemon.front} alt={`${pokemon.name} 앞모습`} />
      <div>
        {pokemon.name}
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
    </CardContainer>
  );
};
