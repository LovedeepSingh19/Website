import React from "react";
import MapsComponent from "@/Components/Maps/MapsComponent";
import { Flex } from "@chakra-ui/react";
import ListOfAppUsers from "@/Components/Maps/ListOfAppUsers";

type MapsProps = {};

const Maps: React.FC<MapsProps> = () => {
  return (
    <Flex p={20}>
      <ListOfAppUsers />
      <MapsComponent />
    </Flex>
  )
};
export default Maps;
