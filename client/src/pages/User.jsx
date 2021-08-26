import React from "react";
import { useUserContext } from "../utils/UserContext";

const User = () => {
  const [state, dispatch] = useUserContext();

  // useEffect(() => {
  //   UserService.getUser().then(
  //     (response) => {
  //       setContent(response.data);
  //     },
  //     (error) => {
  //       const _content =
  //         (error.response &&
  //           error.response.data &&
  //           error.response.data.message) ||
  //         error.message ||
  //         error.toString();

  //       setContent(_content);
  //     }
  //   );
  // }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h5>{state.email}</h5>
      </header>
    </div>
  );
};

export default User;