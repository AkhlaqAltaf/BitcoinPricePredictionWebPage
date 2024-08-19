import { useState } from "react";
import "./Bitcoin.css";

function Bitcoin() {
  const [data, setData] = useState([
    { coinname: "BTC", price: "234$", Volume: "  234 ", imgAddress: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMpWI3uiz6F0xzkYijbEJNxoBm5LGBCuk0Og&s" },
    { coinname: "ETH", price: "8789$", Volume: "  24 ", imgAddress: "https://avatars.githubusercontent.com/u/74071671?v=4" },
    { coinname: "TRB", price: "234$", Volume: "  32 ", imgAddress: "https://t4.ftcdn.net/jpg/04/45/20/83/360_F_445208362_Crm4Y3Zun8dgI03YLKtrkPNEMVWritgl.jpg" },
    { coinname: "CRV", price: "5.67$", Volume: "  234 ", imgAddress: "https://cryptologos.cc/logos/curve-dao-token-crv-logo.png" },
    { coinname: "BNB", price: "5.45$", Volume: "  234 ", imgAddress: "https://cryptologos.cc/logos/curve-dao-token-crv-logo.png" },
    { coinname: "ALGO", price: "45$", Volume: "  234 ", imgAddress: "https://cryptologos.cc/logos/curve-dao-token-crv-logo.png" },
    { coinname: "USDT", price: "788$", Volume: "  234 ", imgAddress: "https://cryptologos.cc/logos/curve-dao-token-crv-logo.png" },
    { coinname: "KLAY", price: "0.00045$", Volume: "  234 ", imgAddress: "https://cryptologos.cc/logos/curve-dao-token-crv-logo.png" },
    { coinname: "DAR", price: "34$", Volume: "  234 ", imgAddress: "https://cryptologos.cc/logos/curve-dao-token-crv-logo.png" },
    { coinname: "CTK", price: "0.657$", Volume: "  234 ", imgAddress: "https://cryptologos.cc/logos/curve-dao-token-crv-logo.png" },
    { coinname: "XRP", price: ".0567$", Volume: "  234 ", imgAddress: "https://cryptologos.cc/logos/curve-dao-token-crv-logo.png" },
    { coinname: "PEPE", price: ".0000056$", Volume: "  234 ", imgAddress: "https://cryptologos.cc/logos/curve-dao-token-crv-logo.png" },
  ]);

  return (
    <>
      {data.map((data) => (
        <div class="mapcontainer">
          <img src={data.imgAddress} alt={data.coinname} class="coin-avatar" />
          <h1>Coin name = {data.coinname}</h1>
          <h1>Price = {data.price}</h1>
          <h1>Volume = {data.Volume}</h1>
        </div>
      ))}
    </>
  );
}

export default Bitcoin;
