import React, { useEffect, useState } from "react";
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
  const [countryList, setCountryList] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((json) => json.json())
      .then((data) => setCountryList(data))
      .catch(() => {
        console.log("Error al obtener los paises");
      });
  }, []);
  return (
    <CountryListStyled>
      {countryList !== undefined &&
        countryList.map(
          ({ numericCode, flag, name, population, region, capital }) => (
            <Country
              key={numericCode}
              flag={flag}
              name={name}
              population={population}
              region={region}
              capitale={capital}
            />
          )
        )}
    </CountryListStyled>
  );
};

export default CountryList;
