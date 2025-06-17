import Todoitem from "./Todoitem";

function Todolist(props) {
  const activityarr = props.activityarr;
  const setactivityarr = props.setactivityarr;
  

  return (
    <div className="flex-grow">
      <div className="px-5 py-5 bg-[#BDB4EA]   rounded-md border border-black">
        <h1 className="text-2xl font-medium mb-3 ">Today's Activity</h1>
        {activityarr.length === 0 ? <p>You haven't added anything yet</p> : " "}

        {activityarr.map(function (item, index) {
          return (
            <Todoitem
              key={item.id}
              id={item.id}
              activityarr={activityarr}
              setactivityarr={setactivityarr}
              item={item}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Todolist;
