import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Card from "../Components/Card";
import Todocontainer from "../Components/Todocontainer";
function Landing() {
  const data = useLocation();
  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        {/* Header */}
        <Header name={data.state.user} />
        {/* Cards */}
        <div className="flex gap-5 my-10 justify-between flex-wrap ">
          <Card bgcolor={"#8272DA"} title={"34°C"} subtitle={"Pondy"}></Card>
          <Card bgcolor={"#FD6663"} title={"June"} subtitle={"20.06.25"}></Card>
          <Card
            bgcolor={"#FCA201"}
            title={"Built Using"}
            subtitle={"React"}
          ></Card>
        </div>
        {/* Todo Container */}
        <Todocontainer />
      </div>
    </div>
  );
}
export default Landing;
