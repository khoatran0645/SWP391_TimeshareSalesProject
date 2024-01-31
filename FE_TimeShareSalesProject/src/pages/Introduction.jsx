import bg from "../assets/images/bg.png";
import room from "../assets/images/room.png";
import resoure from "../assets/images/resoure.png";
import resoure2 from "../assets/images/resoure2.png";
import resoure3 from "../assets/images/resoure3.png";
import CSVC from "../assets/images/CSVC.jpg"
export const Intro = () => (
  <>
    <div>
      <img src={bg} className="w-full" alt="defaultImg" />
      <div className="px-20 py-10">
        <div className="text-6xl font-medium text-center">
          Giới Thiệu
          <div className="border-4 mt-5 m-auto border-black w-3/12"></div>
        </div>
        <div className="text-center my-10 px-20">
          <div className="mb-5">
            Với sứ mệnh kết nối yêu thương và lan toả những giá trị gia đình
            hạnh phúc, ALMA là khu nghỉ dưỡng đầu tiên tại Việt Nam được xây
            dựng và vận hành theo mô hình Sở hữu kỳ nghỉ được ưa chuộng tại
            nhiều quốc gia trên thế giới.
          </div>
          <div className="mb-5">
            Tại ALMA, các gia đình được tận hưởng đầy đủ các tiện ích của một
            khu nghỉ dưỡng 5* hướng biển bao gồm hệ thống nhà hàng sang trọng,
            công viên nước thu nhỏ, rạp chiếu phim, nhà hát ngoài trời, sân
            golf, trung tâm thể thao, khu vui chơi cho trẻ em, quán bar và hơn
            thế nữa. Không chỉ dừng lại ở các tiện ích nghỉ dưỡng đa dạng và
            phong phú, ALMA còn sở hữu gần 600 căn hộ và biệt thự hướng biển bao
            trọn vẻ đẹp của Bãi Dài nên thơ.
          </div>
          <div className="mb-5">
            Đến với ALMA, các thành viên có thể tự do khám phá nhiều hoạt động
            thể thao hấp dẫn trên biển, xem phim, nghe nhạc kịch, thưởng thức
            bữa tối lãng mạn và tận hưởng trọn vẹn những phút giây nghỉ ngơi thư
            giãn bên gia đình.
          </div>
        </div>
        <img src={room} className="w-full mb-10" />
        <img src={resoure} className="w-full mb-10" />
        <div className="flex">
          <div className="w-1/2 p-5">
            <img src={resoure2} className="w-full" />
          </div>
          <div className="w-1/2 p-5">
            <img src={resoure3} className="w-full" />
          </div>
        </div>
        <div className="text-center my-10 text-2xl font-light underline underline-offset-8 uppercase">
          Khu nghỉ dưỡng Alma
        </div>
        <div className="text-center mt-10">
          Khu nghỉ dưỡng ALMA đã hoàn thiện quá trình xây dựng và chính thức đi
          vào vận hành từ tháng 12.
        </div>
        <div className="flex">
          <div className="w-1/2 m-5 border">
            <img className="w-full" src={resoure2} />
            <div className="text-center uppercase font-extralight tracking-widest text-2xl my-5">
              Căn hộ & biệt thự
            </div>
            <div className="text-center my-5">Các loại căn hộ và biệt thự tại khu nghỉ dưỡng</div>
          </div>
          <div className="w-1/2 m-5 border">
            <img className="w-full" src={CSVC} />
            <div className="text-center uppercase font-extralight tracking-widest text-2xl my-5">
              Cơ sở vật chất
            </div>
            <div className="text-center my-5">Các hạng mục tiện ích tại khu nghỉ dưỡng</div>
          </div>
        </div>
      </div>
    </div>
  </>
);
