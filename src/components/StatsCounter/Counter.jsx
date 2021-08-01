import { TitleStyled, DescriptionStyled } from "./StatsCounter.styled";

function Counter({ title, sub }) {
  return (
    <div>
      <TitleStyled>{title}</TitleStyled>
      <DescriptionStyled>{sub}</DescriptionStyled>
    </div>
  );
}

export default Counter;
