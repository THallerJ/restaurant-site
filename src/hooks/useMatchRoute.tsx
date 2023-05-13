import { useLocation, matchPath } from "react-router-dom";

const useMatchRoute = (path?: string) => {
  const { pathname } = useLocation();
  const isMatch = matchPath(`/${path}/*`, pathname);

  return isMatch !== null;
};

export default useMatchRoute;
