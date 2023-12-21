import { useState } from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [user, setUser] = useState({
    name: "Tomilolaaaaa",
    status: true,
  });

  //   const [status, setStatus] = useState(true);

  const logOut = () => {
    setUser((prevUser) => ({
      ...prevUser,
      name: "",
      status: false,
    }));
  };

  //   const updateStatus = () => {
  //     setStatus(false);
  //   };

  const handleClick = () => {
    logOut();
    // updateStatus();
  };

  return (
    <header>
      <NavLinks user={user} updateUser={handleClick} />
    </header>
  );
};

export default Navbar;
