import "./ModuleCss/FlashProduct.module.css";
import products from "../assets/product.json";
import Slider, { Settings, LazyLoadTypes } from "react-slick";
import { AiFillStar } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
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
    <div className="grid grid-cols-5 mt-20 gap-6 mx-2">
      {" "}
      {products.map((product) => {
        return (
          <div className=" border ">
            <div>
              <Slider {...settings} className="w-32 mx-auto">
                {product.image.map((img, index) => {
                  return (
                    <div>
                      <img
                        src={img}
                        className="w-32 h-32 mx-auto object-cover"
                      />
                    </div>
                  );
                })}
              </Slider>
              <div className=" px-6 mt-6 h-full flex flex-col  ">
                <div className="h-12">
                  <p className="text-xs text-gray-500">{product.title}</p>
                  <p className="text-black font-smeibold text-sm">
                    {product.name}
                  </p>
                </div>
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
                <div className="flex items-end my-4 ">
                  <button className="  p-2 bg-green-50 text-green-700 flex items-center justify-center w-full text-xs gap-4 ">
                    Add to cart <FaShoppingBag />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FlashProducts;
