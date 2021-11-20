import Cell from "./Cell";
import { RowContainer } from "./index.styles";

const Row = ({ cells, hovered }) => {
  return (
    <RowContainer>
      {cells.map((item) => (
        <Cell hovered={hovered} value={item} />
      ))}
    </RowContainer>
  );
};

export default Row;
