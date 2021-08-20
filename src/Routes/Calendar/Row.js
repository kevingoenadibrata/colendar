import Cell from "./Cell";
import { RowContainer } from "./index.styles";

const Row = ({ cells }) => {
  return (
    <RowContainer>
      {cells.map((item) => (
        <Cell value={item} />
      ))}
    </RowContainer>
  );
};

export default Row;
