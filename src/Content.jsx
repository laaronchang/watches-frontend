import { WatchesIndex } from "./WatchesIndex";
import { useState, useEffect } from "react";
import { WatchesNew } from "./WatchesNew";
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

  const handleCreateWatch = (params, successCallback) => {
    console.log("handleCreateWatch", params);
    axios.post("http://localhost:3000/watches.json", params).then((response) => {
      setWatches([...watches, response.data]);
      successCallback();
    });
  };

  useEffect(handleWatchesIndex, []);

  return (
    <main>
      <WatchesNew onCreateWatch={handleCreateWatch} />
      <br />
      <br />
      <br />
      <WatchesIndex watches={watches} />
    </main>
  )
}