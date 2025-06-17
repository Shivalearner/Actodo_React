import { useState } from "react";

function Addtodo(props) {
  const activityarr = props.activityarr;
  const setactivityarr = props.setactivityarr;
  //New Activity Arr State
  const [newactivity, setnewactivity] = useState("");
  function handlechange(event) {
    setnewactivity(event.target.value);
  }
  function handleAdditem(){
    setactivityarr([...activityarr,{id:activityarr.length+1,activity:newactivity}])
    setnewactivity("")
  }

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-2xl font-medium">Manage Activities</h1>
        </div>
        <div>
          <input
            className="border border-black  bg-transparent px-2 py-2"
            placeholder="Next Activity!!"
            type="text"
            onChange={handlechange}
            value={newactivity}
          />
          <button onClick={handleAdditem} className="bg-black text-white px-2 py-2 border border-black">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Addtodo;
