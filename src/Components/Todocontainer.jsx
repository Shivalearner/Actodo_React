import Addtodo from "./Addtodo";
import Todolist from "./Todolist";
import { useState } from "react";
function Todocontainer() {
  var [activityarr, setactivityarr] = useState([
    {
      id: 1,
      activity: "Wake up at 6AM",
    },
    {
      id: 2,
      activity: "Walk 30 mins",
    },
    {
      id: 3,
      activity: "Take a cold shower",
    },
  ]);
  return (
    <div>
      <div className="flex gap-5 flex-wrap ">
        <Addtodo activityarr={activityarr} setactivityarr={setactivityarr} />
        <Todolist activityarr={activityarr} setactivityarr={setactivityarr} />
      </div>
    </div>
  );
}
export default Todocontainer;
