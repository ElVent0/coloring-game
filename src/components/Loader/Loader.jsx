import loader from "../../media/loader.gif";
import { LoaderStyled, Image, Paragraph } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderStyled>
      <Image src={loader} alt="loading..." />
      <Paragraph>Loading...</Paragraph>
      <Paragraph>The first loading may take a minute</Paragraph>
    </LoaderStyled>
  );
};

export default Loader;
