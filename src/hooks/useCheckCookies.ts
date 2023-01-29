import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAPI } from "../services/apis";
import addCookies from "../cookies/addCookies";

function useCheckCookies(token: string, time: number) {
  const dispatch = useDispatch<any>();
  const signInInfo = useSelector((state: any) => state?.auth?.entities);
  useEffect(() => {
    let tokenTimeOut: any = undefined;

    if (signInInfo) {
      !document.cookie.includes(token) && addCookies(token, time);
      const lastCookie = document.cookie;
      tokenTimeOut = setInterval(() => {
        if (lastCookie !== document.cookie) {
          dispatch(authAPI.authSlice.actions.resetAction());
          alert("token is expired");
        }
      }, 1000);
    }

    return () => clearInterval(tokenTimeOut);
  }, [signInInfo]);
}
export default useCheckCookies;
