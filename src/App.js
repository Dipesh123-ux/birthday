import React, { useState } from "react";
import Gift from "./gift";
import Confetti from "./confetti";

function App() {
  const [party, setParty] = useState(false);

  return (
    <>
      {<Confetti party={party} setParty={setParty} />}
      <div className="App">
        <Gift party={party} setParty={setParty} />
      </div>
    </>
  );
}

export default App;
