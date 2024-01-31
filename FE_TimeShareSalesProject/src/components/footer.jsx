import { Icon } from "@iconify/react";

export const Footer = () => (
  <>
    <div className="bg-black text-white p-20 flex items-center">
      <div className="w-1/3 px-10 text-center">
        <div className="font-medium text-2xl">Công ty TNHH Khu du lịch</div>
        <div className="text-2xl font-light my-5">Vịnh Thiên Đường</div>
        <div>
          Đơn vị tiên phong tại Việt Nam mang đến mô hình nghỉ dưỡng hàng năm
          vượt trội, đáp ứng các nhu cầu nghỉ ngơi thư giãn đa dạng của mọi thế
          hệ
        </div>
        <div className="font-medium text-xl italic my-5">Liên Hệ</div>
        <div className="flex justify-between px-28 text-4xl">
          <Icon icon="ic:baseline-facebook" />
          <Icon icon="mdi:youtube" />
          <Icon icon="ri:google-fill" style={{ color: "white" }} />
        </div>
      </div>
      <div className="w-1/3 px-10 italic">
        <div className="text-2xl font-medium">Hà Nội</div>
        <div>
          Tầng 7 15 & 20, Tòa nhà Capital - 109 Trần Hưng Đạo, Quận Hoàn Kiếm,
          Hà Nội, Việt Name
        </div>
        <div className="text-2xl font-medium mt-5">TP.Hồ Chí Minh</div>
        <div>
          Tầng 29 & 30, Tòa nhà LIM 9-11 Tôn Đức Thắng, Quận 1, Thành phố Hồ Chí
          Minh, Việt Nam
        </div>
      </div>
      <div className="w-1/3 px-10 italic">
        <div className="text-2xl font-medium">Khánh Hòa - Trụ sở chính</div>
        <div>
          Tầng 9, Tòa nhà Gold Coast, 1 Phố Trần Hưng Đạo, Phường Lộc Thọ, Thành
          phố Nha Trang, Tỉnh Khánh Hòa, Việt Nam
        </div>
        <div className="text-2xl font-medium mt-5">ALMA Resort</div>
        <div>
          D7A2, TT4X6 Khu du lịch Bắc Bán đảo Cam Ranh, Xã Cam Hải Đông, Huyện
          Cam Lâm, Tỉnh Khánh Hòa, Việt Nam
        </div>
        <div className="mt-10">
          Số ĐKKD: 4201550314Đăng ký lần đầu: 05/02/2013Nơi cấp: Sở KH&ĐT tỉnh
          Khánh Hòa
        </div>
      </div>
    </div>
  </>
);
