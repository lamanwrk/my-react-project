import { useEffect, useState } from "react";

const OurTeamItem = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data.results[0])
        console.log(data);
      })
      .catch((error) => console.error("errro", error))
  }, []);
  return (
    <div>
      {user ? (
        <figure >
          <img src={user.picture.large} alt={user.name.first} />
          <figcaption>
            {user.name.first} {user.name.last}
          </figcaption>
        </figure>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OurTeamItem;
