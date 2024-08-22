import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Page() {
  var location = useLocation();
  var data = location.state ? location.state : { low: "", open: "",volume:"",bitcoin: "" };

  console.log(location?.state);

  // useEffect(() => {
  //   console.log(location);
  // });

  return (
    <>
       
      <h2> your low value is :{data.low}</h2>
      <h2> your open value is :{data.open}</h2>
      <h2> your bitcoin value is :{data.bitcoin}</h2>
      <h2> your volume value is :{data.volume}</h2>
    </>
  );
}

export default Page;