import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lsChangeAr, lsChangeDp, lsChangeTT } from "../redux/desktime/actype";

// A custom hook that starts or stop a timer (for time tracking)

function useTimer(initialState, projectID, token) {
  const ls = useSelector((store) => store.ls);
  const dispatch = useDispatch();
  const [time, setTime] = useState(false);
  const [timer, setTimer] = useState(initialState);
  const timerId = useRef(null);
  const d = new Date();

  const start = () => {
    if (!projectID) {
      return alert("no project found");
    }
    if (!timerId.current) {
      timerId.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);

      const arrivalTime = {
        hours: d.getHours() % 12,
        min: d.getMinutes(),
        tmp: d.getHours() <= 11 ? "AM" : "PM",
      };

      localStorage.setItem("arrival", JSON.stringify(arrivalTime));
      dispatch({ type: lsChangeAr, payload: arrivalTime });
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
    dispatch({ type: lsChangeDp, payload: DepartureTime });
    localStorage.setItem("totaltime", JSON.stringify(timer));
    dispatch({ type: lsChangeTT, payload: timer });

    if (ls.totalTime !== 0) {
      const { hours, min, tmp } = ls.arrival;
      const dp = JSON.parse(localStorage.getItem("departure"));

      const currDate = new Date();

      try {
        axios.post(
          `https://upset-teal-duck.cyclic.app/timer/${projectID}`,
          {
            timerStart: `${hours}:${min} ${tmp}`,
            timerEnd: `${dp.hours}:${dp.min} ${dp.tmp}`,
            totalTime: JSON.parse(localStorage.getItem("totaltime")),
            date: `${currDate.getDate()}/${currDate.getMonth()}/${currDate.getFullYear()}`,
          },
          {
            headers: {
              token,
            },
          }
        );
      } catch (e) {
        console.log(e);
      }

      setTimer(0);
    }
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
