import React from "react";
const Users = ({ loading, users }) => {
  const mainstyle = {
    display: "flex"
  };
  return loading ? (
    <div id="main" align="center">
        <h1>Fetching..</h1>
      <img id="fetchimg"
        src="https://media.baamboozle.com/uploads/images/578570/1652276688_378176_gif-url.gif"
        alt="loading.."
        className="loader"
      />
    </div>
  ) : (
    <div id="main" style={mainstyle}>
      {users.map((user) => (
        <div className="profile_cont" key={user.id}>
          {console.log(user)}

          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
          <h2 className="name">
            {user.first_name} {user.last_name}
          </h2>
          <p className="email">{user.email}</p>
          <p>User id: {user.id}</p>
        </div>
      ))}
    </div>
  );
};
export default Users;