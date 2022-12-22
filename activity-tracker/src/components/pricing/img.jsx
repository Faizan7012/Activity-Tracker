import { BsCheckLg } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
function Img({ p }) {
  return p === "ok" ? (
    <BsCheckLg fontSize="20px" color="#00d084" />
  ) : p === "no" ? (
    <IoClose color="#999da1" fontSize="30px" />
  ) : (
    p
  );
}

export default Img;
