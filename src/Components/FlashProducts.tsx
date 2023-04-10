import "./ModuleCss/FlashProduct.module.css";
import products from "../assets/product.json";
import Slider, { Settings, LazyLoadTypes } from "react-slick";
import { AiFillStar, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BsArrowDownUp } from "react-icons/bs";

import { FaShoppingBag } from "react-icons/fa";
type Props = {};

const FlashProducts = (props: Props) => {
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
    <div>
      <button className="border-4 border-black p-1 text-2xl m-2">
        <span className="font-bold">Flash</span> Sale Product
      </button>
      <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5 mt-4 gap-6 mx-2 ">
        {products.map((product) => {
          return (
            <div className="border  border-gray-200 group for-hover bg-white">
              <div>
                <button
                  className={`p-1 text-xs m-2 rounded-md ${
                    product.card === "Hot"
                      ? "bg-red-200 text-red-500"
                      : "bg-green-100 text-green-500"
                  }`}
                >
                  {product.card}
                </button>
                <Slider {...settings} className="w-32 mx-auto">
                  {product.image.map((img, index) => {
                    return (
                      <div>
                        <img
                          src={img}
                          className={`w-32 h-32 mx-auto object-contain group-hover:-scale-x-100 
                        }`}
                        />
                      </div>
                    );
                  })}
                </Slider>
                <div className=" px-6 mt-6 h-full flex flex-col  ">
                  <div className="h-16">
                    <p className="text-xs text-gray-500">{product.title}</p>
                    <p className="text-black font-smeibold text-sm">
                      {product.name}
                    </p>
                  </div>
                  <div className=" block group-hover:hidden h-12">
                    <p className="flex text-yellow-500 text-xs items-center mt-2">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <span> (5.0)</span>
                    </p>
                    <p className="text-green-500">
                      ${product.discountPrice}{" "}
                      <span className="line-through text-gray-400 text-xs">
                        ${product.originalPrice}
                      </span>
                    </p>
                  </div>
                  <div className=" hidden group-hover:block border-t  border-b  h-12">
                    <div className="flex text-black text-xl justify-center my-3 items-center ">
                      <p className="border-r ">
                        <AiOutlineEye className="mr-6 hover:bg-black hover:text-white rounded-full cursor-pointer hover:p-1" />
                      </p>
                      <p className="border-r ">
                        <AiOutlineHeart className="mr-6 ml-6 hover:bg-black hover:text-white rounded-full cursor-pointer hover:p-1" />
                      </p>
                      <p className=" ">
                        <BsArrowDownUp className=" ml-6 hover:bg-black hover:text-white rounded-full cursor-pointer hover:p-1" />
                      </p>
                    </div>
                  </div>
                  <div className="flex items-end my-4 ">
                    <button className="  p-2 bg-green-50 text-green-700 flex items-center justify-center w-full text-xs gap-4 hover:bg-green-500 hover:text-white ">
                      Add to cart <FaShoppingBag />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlashProducts;
