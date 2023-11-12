import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar
        size="2xl"
        name="Segun Adebayo"
        src="https://i.pravatar.cc/150?img=7"
      />
      <p>Hello, I am Abdu!</p>
      <Heading>A frontend developer</Heading>
      <Heading>specialised in React</Heading>
    </VStack>
  </FullScreenSection>
);


export default LandingSection;
