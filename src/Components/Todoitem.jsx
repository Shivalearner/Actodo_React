function Todoitem(props) {
  const activityarr = props.activityarr;
  const setactivityarr = props.setactivityarr;

  function Handledelete(deleteId) {
    var temparr = activityarr.filter(function (item) {
      return item.id !== deleteId;
    });
    setactivityarr(temparr);
  }

  return (
    <div className="flex justify-between">
      <p>
        {props.index + 1}.{props.item.activity}
      </p>
      <button
        className="bg-red-500  rounded-md p-2 mt-2 text-black"
        onClick={() => Handledelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
}
export default Todoitem;
