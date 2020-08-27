import React from "react";
import styled from "styled-components";
import Country from "./country";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  background: var(--background);
  padding: 4em 2em;
  border: 1px solid red;
  justify-content: center;
`;

const CountryList = () => {
  return (
    <CountryListStyled>
      <Country
        flag="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/255px-Flag_of_Chile.svg.png"
        name="Chile"
        population={123123}
        region="America"
        capitale="Santiago"
      />
      <Country
        flag="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/255px-Flag_of_Chile.svg.png"
        name="Chile"
        population={123123}
        region="America"
        capitale="Santiago"
      />
      <Country
        flag="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/255px-Flag_of_Chile.svg.png"
        name="Chile"
        population={123123}
        region="America"
        capitale="Santiago"
      />
      <Country
        flag="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/255px-Flag_of_Chile.svg.png"
        name="Chile"
        population={123123}
        region="America"
        capitale="Santiago"
      />
    </CountryListStyled>
  );
};

export default CountryList;
