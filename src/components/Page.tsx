import React from "react";

import SearchInput from "./SearchInput/index.tsx";
import CityCard from "./CityCard/index.tsx";
import { Layout, CardContainer } from "./Page.styled.tsx";

const Page = () => {
  return (
    <Layout>
      <SearchInput />
      <CardContainer>
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
      </CardContainer>
    </Layout>
  );
};

export default Page;
