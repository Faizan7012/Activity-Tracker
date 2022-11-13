import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lsChangeAr, lsChangeDp, lsChangeTT } from "../redux/desktime/actype";


function useTimer(initialState) {
  const dispatch = useDispatch();
  const [time, setTime] = useState(false);
  const [timer, setTimer] = useState(initialState);
  const timerId = useRef(null);
  const d = new Date();
  const start = () => {
    if (!timerId.current) {
      timerId.current = setInterval(() => {
        setTimer((prev) => prev + 1);
        console.log(timer);
      }, 1000);

      const arrivalTime = {
        hours: d.getHours() % 12,
        min: d.getMinutes(),
        tmp: d.getHours() <= 11 ? "AM" : "PM",
      };

      localStorage.setItem("arrival", JSON.stringify(arrivalTime));
      dispatch({type: lsChangeAr, payload: arrivalTime});
    }
    setTime(!time);
  };
  const stop = () => {
    clearInterval(timerId.current);
    timerId.current = null;
    setTime(!time);

    const DepartureTime = {
      hours: d.getHours() % 12,
      min: d.getMinutes(),
      tmp: d.getHours() <= 11 ? "AM" : "PM",
    };
    localStorage.setItem("departure", JSON.stringify(DepartureTime));
    dispatch({type: lsChangeDp, payload: DepartureTime});
    localStorage.setItem("totaltime", JSON.stringify(timer));
    dispatch({type: lsChangeTT, payload: timer});
    setTimer(0);
  };

  useEffect(() => {
    const cleanup = () => {
      clearInterval(timerId.current);
    };
    return cleanup;
  }, []);
  return { timer, start, stop, time };
}
export default useTimer;
