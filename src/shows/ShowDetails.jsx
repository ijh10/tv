import { useState } from "react";
import{tvShows} from "./shows/data.js";
import ShowDetails from "./show/ShowDetails.jsx";
import ShowSelection from "./shows/ShowSelection.jsx";

export default function App() {
  const [selectedShow, setSelectedShow] = useState();
  const [shows] = useState {tvShows}



    return {
      <header>
        <><h1>React Tv</h1><ShowSelection shows={shows} setSelectedShow={setSelectedShow} /></>
        </header>
      <main>
        <ShowDetails show={selectedShow}
        </main>
        </>
    };
  }