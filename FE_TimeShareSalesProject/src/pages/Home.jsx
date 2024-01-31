import city from "../assets/images/city.png";
import img1 from "../assets/images/image 1.png";
import { data1 } from "../data/data";
export const Home = () => (
  <>
    <div>
      <img src={city} className="w-full" />
      <div className="flex mt-20 mb-10 px-20 justify-between">
        {data1.map((data) => (
          <div className="w-1/3 text-center italic">
            <img src={data.image} className="rounded-2xl m-auto" />
            <div className="font-bold text-3xl my-3">{data.title}</div>
            <div className="bg-neutral-300 text-xl font-medium px-3 inline-block">
              Tìm hiểu thêm
            </div>
          </div>
        ))}
      </div>
      <div className="bg-neutral-400 py-10 px-64 text-center">
        <div className="my-10 text-2xl font-medium italic">
          Trải Nghiệm Của Khách Hàng
        </div>
        <div className="rounded-3xl p-10 bg-white">
          <img src={img1} className=" w-full m-auto" />
        </div>
      </div>
    </div>
  </>
);
