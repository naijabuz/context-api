const UserContainer = ({ user, updateUser }) => {
  return (
    <div>
      <p>{user.name}</p>
      <button type="button" onClick={updateUser}>
        {user.status ? "Log Out" : "Sign In"}
      </button>
    </div>
  );
};

export default UserContainer;
