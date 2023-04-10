import "./ModuleCss/FlashProduct.module.css";
import women from "../assets/women.json";
import food from "../assets/food.json";
import cosmetics from "../assets/cosmetic.json";
import Slider, { Settings, LazyLoadTypes } from "react-slick";
import { AiFillStar, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

type Props = {};

const TrendinProducts = (props: Props) => {
  const settings: Settings = {
    dots: true,

    lazyLoad: "ondemand",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return (
    <div className="mt-4 mb-8">
      <button className="  border-4 border-black p-1 text-2xl m-2">
        <span className="font-bold">Trending</span>Products
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        <div className="flex flex-col lg:grid-cols-5 mt-4 gap-6 mx-2 ">
          <div className="flex justify-between items-center">
            <button className=" p-1 text-xl m-2">
              <span className="font-bold">Fashion</span> For Women
            </button>
            <div className="flex ">
              <FiArrowLeft className="hover:bg-black rounded-full w-6 hover:text-white" />{" "}
              <FiArrowRight className="hover:bg-black rounded-full w-6 hover:text-white" />
            </div>
          </div>
          {women.map((product) => {
            return (
              <div className="border  border-gray-200 group bg-white ">
                <div className="flex items-center">
                  <button
                    className={`p-[2px] text-xs m-2 rounded-md -mt-14 top-2 ${
                      product.card === "Hot"
                        ? "bg-red-200 text-red-500"
                        : "bg-green-100 text-green-500"
                    }`}
                  >
                    {product.card}
                  </button>
                  <div>
                    <img
                      src={product.image}
                      className={`w-20 h-20 mx-auto object-contain }`}
                    />
                  </div>

                  <div className=" px-6  h-full flex flex-col py-4 ">
                    <div className="">
                      <p className="flex text-yellow-500 text-xs items-center mt-2">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <span> (5.0)</span>
                      </p>
                      <p className="text-black font-smeibold text-sm">
                        {product.name}
                      </p>
                    </div>
                    <div className=" ">
                      <p className="text-green-500 text-sm">
                        ${product.discountPrice}{" "}
                        <span className="line-through text-gray-400 text-xs">
                          ${product.originalPrice}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <button className="text-xs p-2 bg-gray-950 text-white font-bold hover:bg-gray-800 rounded-md">
            VIEW ALL{" "}
          </button>
        </div>
        <div className="flex flex-col lg:grid-cols-5 mt-4 gap-6 mx-2 ">
          <div className="flex justify-between items-center">
            <button className=" p-1 text-xl m-2">
              <span className="font-bold">Food</span> For Health
            </button>
            <div className="flex ">
              <FiArrowLeft className="hover:bg-black rounded-full w-6 hover:text-white" />{" "}
              <FiArrowRight className="hover:bg-black rounded-full w-6 hover:text-white" />
            </div>
          </div>
          {food.map((product) => {
            return (
              <div className="border  border-gray-200 group bg-white ">
                <div className="flex items-center">
                  <button
                    className={`p-[2px] text-xs m-2 rounded-md -mt-14 top-2 ${
                      product.card === "Hot"
                        ? "bg-red-200 text-red-500"
                        : "bg-green-100 text-green-500"
                    }`}
                  >
                    {product.card}
                  </button>
                  <div>
                    <img
                      src={product.image}
                      className={`w-20 h-20 mx-auto object-contain }`}
                    />
                  </div>

                  <div className=" px-6  h-full flex flex-col py-4 ">
                    <div className="">
                      <p className="flex text-yellow-500 text-xs items-center mt-2">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <span> (5.0)</span>
                      </p>
                      <p className="text-black font-smeibold text-sm">
                        {product.name}
                      </p>
                    </div>
                    <div className=" ">
                      <p className="text-green-500 text-sm">
                        ${product.discountPrice}{" "}
                        <span className="line-through text-gray-400 text-xs">
                          ${product.originalPrice}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <button className="text-xs p-2 bg-gray-950 text-white font-bold hover:bg-gray-800 rounded-md">
            VIEW ALL{" "}
          </button>
        </div>
        <div className="flex flex-col lg:grid-cols-5 mt-4 gap-6 mx-2 ">
          <div className="flex justify-between items-center">
            <button className=" p-1 text-xl m-2">
              <span className="font-bold">Cosmetics</span> For Winter
            </button>
            <div className="flex ">
              <FiArrowLeft className="hover:bg-black rounded-full w-6 hover:text-white" />{" "}
              <FiArrowRight className="hover:bg-black rounded-full w-6 hover:text-white" />
            </div>
          </div>
          {cosmetics.map((product) => {
            return (
              <div className="border  border-gray-200 group bg-white ">
                <div className="flex items-center">
                  <button
                    className={`p-[2px] text-xs m-2 rounded-md -mt-14 top-2 ${
                      product.card === "Hot"
                        ? "bg-red-200 text-red-500"
                        : "bg-green-100 text-green-500"
                    }`}
                  >
                    {product.card}
                  </button>
                  <div>
                    <img
                      src={product.image}
                      className={`w-20 h-20 mx-auto object-contain }`}
                    />
                  </div>

                  <div className=" px-6  h-full flex flex-col py-4 ">
                    <div className="">
                      <p className="flex text-yellow-500 text-xs items-center mt-2">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <span> (5.0)</span>
                      </p>
                      <p className="text-black font-smeibold text-sm">
                        {product.name}
                      </p>
                    </div>
                    <div className=" ">
                      <p className="text-green-500 text-sm">
                        ${product.discountPrice}{" "}
                        <span className="line-through text-gray-400 text-xs">
                          ${product.originalPrice}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <button className="text-xs p-2 bg-gray-950 text-white font-bold hover:bg-gray-800 rounded-md">
            VIEW ALL{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendinProducts;
