import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Card from "../Components/Card";
import Todocontainer from "../Components/Todocontainer";
function Landing() {
  const data = useLocation();
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-start py-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md w-full max-w-5xl">
        {/* Header */}
        <Header name={data.state.user} />

        {/* Cards */}
        <div className="flex gap-5 my-10 justify-between flex-wrap">
          <Card bgcolor={"#8272DA"} title={"34°C"} subtitle={"Pondy"} />
          <Card bgcolor={"#FD6663"} title={"June"} subtitle={"20.06.25"} />
          <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
        </div>

        {/* Todo Container */}
        <Todocontainer />
      </div>
    </div>
  );
}

export default Landing;
