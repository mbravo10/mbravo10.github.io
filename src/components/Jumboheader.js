import React, { useState, useEffect } from "react";

export default function Jumboheaders() {
  const [data, setData] = useState("Nothing");
  const getData = () => {
    fetch("/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => getData(), []);

  return (
    <div>
      <h1>{data.gameName}</h1>
      <h4>Welcome, {data.gamePlayer}</h4>
    </div>
  );
}
