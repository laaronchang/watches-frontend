import { WatchesIndex } from "./WatchesIndex";
import {useState, useEffect } from "react";
import axios from "axios";

export function Content() {

  const [watches, setWatches] = useState([]);

  const handleWatchesIndex = () => {
    console.log("handleWatchesIndex");
    axios.get("http://localhost:3000/watches.json").then((response) => {
      console.log(response.data);
      setWatches(response.data);
    });
  };

  useEffect(handleWatchesIndex, []);

  return (
    <main>
      {/* <h1>Watches</h1> */}
      <WatchesIndex watches={watches} />
    </main>
  )
}