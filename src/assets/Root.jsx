import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Components/Header/Header";
import ReactLoading from "react-loading";

const Root = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header></Header>
      {navigation.state === "loading" ? (
        <ReactLoading
          className="mx-auto"
          type={"cylon"}
          color={"black"}
          height={667}
          width={375}
        />
      ) : (
        <Outlet></Outlet>
      )}
    </>
  );
};

export default Root;
