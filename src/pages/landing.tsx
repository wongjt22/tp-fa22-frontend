import type { NextPage } from "next";
import NavBar from "../components/nav-bar";

const Landing: NextPage = () => {
/*   const mystyle = {
    background: "url('../../public/background.png') no-repeat center fixed",
    backgroundSize: "cover"
  } */
  return (
    <>
      <NavBar />
      <h2 className="title">Grand Cheese Race</h2>
      <div className="subtitle">
        It's the race of the century! All victors return for one final race...
        who do you think will win?
      </div>
    </>
  );
};

export default Landing;
