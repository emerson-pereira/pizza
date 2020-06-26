import React from "react";
import { Link } from "react-router-dom";
import Button from "./styles/Button";
import Subtitle from "./styles/Subtitle";

const Finish = () => (
  <>
    <Subtitle>Pizza finalizada!</Subtitle>

    <Link to="/crust-pick">
      <Button primary>Mais uma</Button>
    </Link>
  </>
);

export default Finish;
