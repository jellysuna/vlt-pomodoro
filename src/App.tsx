import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
import Pomodoro from "./components/Pomodoro";

/*
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}
*/

function App() {
  return (
    <div>
      <Pomodoro />
    </div>
  );
}
export default App;
