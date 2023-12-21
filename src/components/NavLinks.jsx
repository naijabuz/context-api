import UserContainer from "./UserContainer";

const NavLinks = (props) => {
  const { user, updateUser } = props;

  return (
    <nav>
      <UserContainer user={user} updateUser={updateUser} />
    </nav>
  );
};

export default NavLinks;
