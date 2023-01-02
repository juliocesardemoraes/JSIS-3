import { useParams } from "react-router-dom";
import ChallengeBoard from "../../components/ide";

// SELECIONAR CLASSE
export default function Class() {
  const params = useParams();
  return (
    <>
      <h1>JS IS &lt;3</h1>
      <h3>Flex Challenge 01</h3>
      <p>In this challenge you should </p>
      <ChallengeBoard></ChallengeBoard>
    </>
  );
}
