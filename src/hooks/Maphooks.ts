import React, { useEffect, useState } from "react";

const Maphooks = () => {
  const [error, setError] = useState("");
  const [currentCoords, setCurrentCoords] = useState({
    lat: 28.6448,
    lng: 77.216721,
  });

  const errorHandler = () => {
    if (navigator.permissions) {
      navigator.permissions.query({ name: "geolocation" }).then((res) => {
        if (res.state === "denied") {
          setError(
            "Enable location for permissions for this website in your browser settings."
          );
        }
      });
    } else {
      setError("Unable to access your location");
    }
  };

  const getPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      }, errorHandler);
    } else {
      console.log("sorry, geolocation is not supported by this browser");
    }
  };

  useEffect(() => {
    getPosition();
  }, []);

  return { currentCoords, error };
};
export default Maphooks;
