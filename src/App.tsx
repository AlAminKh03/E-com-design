import React from "react";
import FlashProducts from "./Components/FlashProducts";
import TrendinProducts from "./Components/Trending";

type Props = {};

const App = (props: Props) => {
  return (
    <div className="bg-gray-50">
      <FlashProducts />
      <TrendinProducts />
    </div>
  );
};
export default App;
