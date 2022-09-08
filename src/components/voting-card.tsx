import type { NextPage } from "next";
import { Box, Image, Button } from "@chakra-ui/react";
import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

const VotingCard: NextPage = (props) => {
  const [score, setScore] = useState(0);

  return (
    <>
      <div>
        <Box maxW="sm" borderWidth="5px" borderRadius="lg" overflow="hidden">
          <Image className="votingCard"src={props.imageUrl} alt={props.name} />
          <Box display="flex" alignItems="baseline">
            {props.name}
          </Box>
          <Box>Score: {score}</Box>
          <Box>
            <TriangleUpIcon
              onClick={() => setScore(score + 1)}
              boxSize={8}
            ></TriangleUpIcon>
            <TriangleDownIcon
              onClick={() => setScore(score - 1)}
              boxSize={8}
            ></TriangleDownIcon>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default VotingCard;
