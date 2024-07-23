import { useEffect, useState } from "react";

const useOnlineListener = () => {
  const [onlineStatus, setOnlineStatus] = useState("online");
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus("online");
    });
    window.addEventListener("offline", () => {
      setOnlineStatus("offline");
    });
  }, []);
  console.log(onlineStatus);
  return onlineStatus;
};

export default useOnlineListener;
