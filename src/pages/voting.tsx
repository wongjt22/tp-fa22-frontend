import type { NextPage } from "next";
import NavBar from "../components/nav-bar";
import { Box } from "@chakra-ui/react";
import VotingCard from "../components/voting-card";

const Voting: NextPage = () => {
  const runner1 = {
    imageUrl: "../../runner1.jpg",
    name: "Speed Sidrimo",
    score: 0,
  };

  const runner2 = {
    imageUrl: "../../runner2.jpeg",
    name: "Fast-roller Fardan",
    score: 0,
  };

  const runner3 = {
    imageUrl: "../../runner3.jpeg",
    name: "Agile Aspen",
    score: 0,
  };

  const runner4 = {
    imageUrl: "../../runner4.jpeg",
    name: "Muscular Macy",
    score: 0,
  };
  /*   style={{background:"none", backgroundColor: "#E5E5E5"}}
   */
  return (
    <>
      <NavBar />
      <Box className="voting">
        <VotingCard imageUrl={runner1.imageUrl} name={runner1.name} />
        <VotingCard imageUrl={runner2.imageUrl} name={runner2.name} />
        <VotingCard imageUrl={runner3.imageUrl} name={runner3.name} />
        <VotingCard imageUrl={runner4.imageUrl} name={runner4.name} />
      </Box>
    </>
  );
};

export default Voting;
