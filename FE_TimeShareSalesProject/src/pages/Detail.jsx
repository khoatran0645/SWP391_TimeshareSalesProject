import { Link, useParams } from "react-router-dom";
import defaultImg from "../assets/images/default-image.jpg";
import PN_5_large from "../assets/images/3PN_5_large.png";
import PN_6_large from "../assets/images/3PN_6_large.png";
import PN_7_large from "../assets/images/3PN_7_large.png";
import PN_8_large from "../assets/images/3PN_8_large.png";
import PN_9_large from "../assets/images/3PN_9_large.png";
import gray from "../assets/images/gray.png";
import image2 from "../assets/images/image 2.png"
import beach from "../assets/images/beach.png"
import { Icon } from "@iconify/react";

export const Detail = () => {
  const { id } = useParams();

  return (
    <>
      <div className="px-20">
        <div className="flex items-center">
          <Link className="underline mr-2">Trang chủ</Link>
          <div className="mr-2 text-3xl">
            <Icon icon="material-symbols-light:navigate-next" />
          </div>
          <Link className="underline mr-2">BĐS Từ chủ đầu tư</Link>
          <div className="mr-2 text-3xl">
            <Icon icon="material-symbols-light:navigate-next" />
          </div>
          <span className="underline mr-2">{id}</span>
        </div>
        <button className="rounded-2xl m-5 p-5 px-10 bg-neutral-200">
          So sánh
        </button>
        <div className="flex">
          <img src={PN_5_large} className="w-1/2 rounded-md p-2" />
          <div className="w-1/2 p-2 flex flex-wrap">
            <img src={PN_6_large} className="w-1/2 rounded-md p-2" />
            <img src={PN_7_large} className="w-1/2 rounded-md p-2" />
            <img src={PN_8_large} className="w-1/2 rounded-md p-2" />
            <img src={PN_9_large} className="w-1/2 rounded-md p-2" />
          </div>
        </div>

        <div className="my-5 flex">
          <div className="w-2/3">
            <div className="flex items-center justify-around">
              <img src={PN_5_large} className="w-2/12 rounded-md" />
              <div className="text-indigo-800 text-2xl font-bold">
                Vinhomes OCean Park - {id}
              </div>
              <div className="p-4 rounded-2xl bg-neutral-200">
                Đăng ký tham quan
              </div>
            </div>

            <div className="py-5 px-14 my-10 inline-block text-indigo-400 rounded-2xl border-2 border-indigo-400">
              Chính sách bán hàng
            </div>
            <div>
              <div className="text-lg font-medium">Tổng quan căn hộ</div>
              <div>
                Căn hộ được thiết kế dành cho các gia đình có nhiều thành viên
                chung sống. Cấu trúc căn hộ gồm 3 phòng ngủ, 1 phòng khách, 1
                phòng bếp, 2 nhà vệ sinh và lô gia. Sở hữu lợi thế diện tích
                rộng rãi và các phòng ngủ nằm riêng biệt, căn hộ mở ra không
                gian sinh hoạt chung ấm cúng, đồng thời đảm bảo đủ sự riêng tư
                cho mỗi thành viên. Căn hộ cũng là lựa chọn phù hợp với khách
                hàng yêu thích không gian sống rộng rãi, có thể tùy biến chức
                năng các phòng để đáp ứng nhu cầu sử dụng.
              </div>
              <div className="text-lg font-medium">Tòa</div>
              <div>
                Tòa S1.11 nằm tại trung tâm phân khu Sapphire 1. Tòa S1.11 nằm
                trong những tòa căn hộ đẳng cấp nằm ngay cạnh khu biệt thự Ngọc
                Trai, cách hồ trải cát trắng 24,5 ha chưa đầy 300 m. Tòa S1.11
                còn là một trong số ít các tòa tháp Sapphire có mặt bằng hình
                chữ Z với nhiều ưu điểm vượt trội trong thiết kế. Tòa được thiết
                kế với 28 tầng nổi và 1 tầng hầm để xe, mật độ 19 căn/sàn.
              </div>
              <img src={gray} className="my-10 w-full"/>
              <div  className="whitespace-pre-line">
              Phân khu
              
Căn hộ S1 Vinhomes Ocean Park là khu căn hộ phức hợp, nằm ngay trung tâm Thành phố biển hồ. Nơi đây được mệnh danh là “trung tâm tiện ích giữa lòng tiện ích” và cũng là nơi tiếp cận gần nhất với mọi đại tiện ích như hồ điều hoà, biển hồ nước mặn,...
Vị trí căn hộ S1 Vinhomes Ocean Park 
Căn hộ S1 Vinhomes Ocean Park được mệnh danh là “ngọn hải đăng” Thành phố biển hồ khi được quy hoạch tại vị trí đắc địa, thừa hưởng mạng lưới kết nối giao thông thuận tiện.
Các hướng tiếp giáp của căn hộ S1 Vinhomes Ocean Park:  
Căn hộ S1 Vinhomes Ocean Park hướng đông bắc, hướng bắc tiếp giáp tiểu khu Ngọc Trai Vinhomes Ocean Park
Căn hộ S1 Vinhomes Ocean Park hướng tây nam, hướng nam giáp Sapphire 2 
Căn hộ S1 Vinhomes Ocean Park hướng bắc, tây bắc tiếp giáp hệ thống trường học 
Căn hộ S1 Vinhomes Ocean Park hướng tây tiếp giáp với khu thể thao tích hợp hiện đại.
Khu căn hộ S1 là địa điểm nằm gần nhất với hai đại tiện ích: hồ Ngọc Trai diện tích 24,5ha và hồ nước mặn 6,1ha. Nhờ vậy, căn hộ S1 có tầm nhìn toàn cảnh biển và hồ, tạo nên không gian mang hơi thở đại dương có “một không hai” cho cư dân.
Ngoài ra, căn hộ S1 còn nằm gần các trục đường nội khu quan trọng như đường 30m hay 40m, điều này giúp cư dân dễ dàng tiếp cận với các tiện ích độc đáo như Vincom Mega Mall, bệnh viện Vinmec hay đại học tư thục VinUni. 
Khi mua căn hộ S1 Vinhomes Ocean Park, khách hàng được hiện thực hoá về giấc mơ không chỉ được sống gần biển và hồ mà còn thuận tiện đi lại.
Mặt bằng căn hộ S1 Vinhomes Ocean Park 
Hai mặt bằng tiêu biểu của các tòa căn hộ S1 Vinhomes Ocean Park là hình chữ L và chữ Z, giúp không gian sống đón nắng và gió tự nhiên tối đa. Tại 3 tòa S1.03, S1.07 và S1.11 có layout chữ Z, mật độ căn hộ là 19 căn/sàn; đối với các tòa hình chữ L là 22 căn/sàn. 
Các căn hộ S1 được thiết kế theo tiêu chuẩn Vinhomes Sapphire, chia làm 4 loại hình phổ biến: studio, 1PN, 2PN và 3PN với thiết kế tinh giản, diện tích từ 28m2 - 75m2. So với các các căn hộ Vinhomes Ruby hay Vinhomes Diamond, đây là dòng sản phẩm có mức giá ưu đãi hơn. Do vậy, căn hộ S1 hướng tới các nhóm đối tượng khách hàng trẻ và có mức độ thu nhập, tích luỹ ở mức khá. 
Điểm đặc biệt của căn hộ S1 là có thêm loại hình +1 linh hoạt. Các gia đình có thể tận dụng khoảng không gian này để thiết kế theo nhu cầu và sở thích cá nhân. Đó có thể là phòng thay đồ, phòng nghỉ ngơi thư giãn của bố mẹ hay không gian vui chơi của trẻ nhỏ,....
Các loại hình căn hộ S1 Vinhomes Ocean Park 
Với định hướng xây dựng Vinhomes Smart City trở thành nơi quy tụ của một cộng đồng dân cư văn minh, chủ đầu tư Vinhomes đã phát triển các loại hình căn hộ đa dạng như studio, 1 phòng ngủ, 2 phòng ngủ và 3 phòng ngủ. Mỗi loại hình căn hộ đều có những ưu điểm nổi bật riêng phù hợp với nhiều đối tượng khách hàng. 
Tiêu chuẩn bàn giao căn hộ S1 Vinhomes Ocean Park 
Số lượng khách hàng mua căn hộ S1 Vinhomes Ocean Park ngày càng gia tăng không chỉ bởi vị trí, quy hoạch đồng bộ, thiết kế tinh tế mà còn vì tiêu chuẩn bàn giao khắt khe của chủ đầu tư.
Các căn hộ S1 được bàn giao theo tiêu chuẩn tối thiểu, bao gồm:
Sàn, trần và tường đã được hoàn thiện 
Thiết bị vệ sinh: American Standard hoặc các sản phẩm tương đương
Điều hoà Multi treo tường 
Hành lang 1,6m và có điều hoà 
Chiều cao để hoàn thiện căn hộ xấp xỉ 2,65m
Giá bán căn hộ S1 Vinhomes Ocean Park 
Căn hộ S1 Vinhomes Ocean Park từ khi ra mắt đã thu hút được sự quan tâm của đông đảo các khách hàng. Một trong những yếu tố mà khách hàng luôn quan tâm là giá căn hộ S1 Vinhomes Ocean Park để tìm kiếm một sản phẩm phù hợp cho mình. 
Theo đó, giá bán của các căn hộ S1 Vinhomes Ocean Park  hướng đông (đông nam), hướng tây, hướng nam, hướng bắc vào khoảng 800 triệu - 3,5 tỷ. 
Tuy nhiên, khách hàng thường có xu hướng chọn mua căn hộ S1 Vinhomes Ocean Park hướng đông, nam, đông nam, đông bắc hơn. Vì nhà ở hướng đông nam và nam sẽ mát vào mùa hè và ấm áp vào mùa đông. Đó là tâm lý chung của người Á Đông khi đi mua nhà. Chính vì vậy, giá các căn hộ hướng này thường cao hơn so với giá căn hộ S1 Vinhomes Ocean Park hướng tây, bắc, tây bắc, tây nam. 
Chính sách bán hàng căn hộ S1 Vinhomes Ocean Park 
Chọn mua căn hộ S1 Vinhomes Ocean Park, khách hàng sẽ được nhận hàng loạt ưu đãi hấp dẫn từ chủ đầu tư. Thời gian áp dụng từ ngày 24/05/2021 đến khi có chính sách mới thay thế. 
Theo đó, với tất cả các khách hàng thuê hoặc mua căn hộ sẽ được hỗ trợ lãi suất 0% cho 80% giá trị căn hộ đến 20/08/2023. 
Ngoài ra, chủ đầu tư còn áp loạt các chính sách hấp dẫn khác cho tất cả các khách hàng thuê, mua căn hộ và đã ký thoả thuận đặt cọc. 
Tặng voucher mua xe Vinfast từ 70 - 150 - 200 triệu tuỳ theo giá trị căn hộ 
Tặng 1 gói “Vàng Tài Lộc” tuỳ theo giá trị căn hộ
Tiến độ thanh toán căn hộ S1 Vinhomes Ocean park 
Khách hàng khi mua căn hộ S1 Vinhomes Ocean Park có thể lựa chọn 1 trong 3 tiến độ thanh toán như sau: 
Tiến độ thanh toán thông thường 
Khách hàng được chiết khấu 6% vào giá bán trước thuế và KPBT. Ở tiến độ thanh toán này, khách hàng thanh toán theo 7 đợt, cụ thể như sau: 
Đợt 1: Khách hàng đặt cọc và ký thoả thuận đặt cọc 50.000.000vnđ
Đợt 2: Trong vòng 7 ngày sau khi ký TTĐC, ký HĐMB: 10% giá bán căn hộ (bao gồm VAT) 
Đợt 3: Trong vòng 30 ngày kể từ ngày đăng ký HĐMB thanh toán 15% GTCH bao gồm VAT và 5% GBCH chưa bao gồm VAT vào TTĐC để đảm bảo HĐMB 
Đợt 4: Trong vòng 60 ngày kể từ ngày ký HĐMB, thanh toán 25% GTCH (bao gồm VAT) 
Đợt 5: Trong vòng 90 ngày kể từ ngày ký HĐMB, thanh toán 20% GTCH (chưa bao gồm VAT)
Đợt 6: Thông báo bàn giao: thanh toán 25% GTCH (bao gồm VAT) + 100% kinh phí bảo trì + VAT và 5% GTCH 
Đợt 7: Thông báo cấp giấy CNQSH: thanh toán 5% GTCH (chưa bao gồm VAT) khấu trừ giá trị TTĐC. 
Tiến độ vay ngân hàng 
Khách hàng lựa chọn tiến độ vay này được hỗ trợ 70% giá bán (đã bao gồm VAT) với lãi suất 0%. Thời gian được lãi suất từ 12 - 29 tháng tuỳ loại hình căn hộ và khách hàng không bị phạt trả nợ trước hạn trong thời gian hỗ trợ lãi suất 0%. Ở tiến độ thanh toán này, khách hàng thanh toán theo 6 đợt, cụ thể như sau: 
Đợt 1: Khách hàng đặt cọc và ký thoả thuận đặt cọc: 50.000.000vnđ
Đợt 2: Trong vòng 7 ngày từ sau khi ký TTĐC, ký HĐMB: 10% GBCH (gồm VAT) 
Đợt 3: Trong vòng 15 ngày kể từ khi khách hàng ký HĐMB: ngân hàng giải ngân 70% GTCH (gồm VAT) 
Đợt 4: Trong vòng 30 ngày kể từ ngày ký HĐMB, thanh toán 15% GTCH (gồm VAT) và 5% GBCH (chưa bao gồm VAT) vào TTĐC đảm bảo HĐMB 
Đợt 5: Thanh toán 5% GTCH (gồm VAT) và 100% kinh phí bảo trì
Đợt 6: Thông báo cấp giấy CNQSH: thanh toán 5% GTCH (chưa bao gồm VAT) khấu trừ từ giá trị thanh toán đặt cọc 
Kể từ khi ra mắt, các căn hộ S1 Vinhomes Ocean Park luôn nhận được sự săn đón của khách hàng và các nhà đầu tư. Đây là sự lựa chọn hoàn hảo, chốn an cư lý tưởng cho cộng đồng cư dân tìm kiếm tổ ấm tiện nghi, thời thượng. 
              </div>
              <img src={image2} className="my-10 w-full"/>
              <img src={beach} className="my-10 w-full"/>
            </div>
          </div>
          <div className="w-1/3">
            <div className="rounded-3xl p-5 border w-full">
              <div className="flex py-5 justify-between">
                <div className="text-center">
                  <div className="text-xl font-medium">Giá niêm yết</div>
                  <div className="text-sm">Đã bao gồm ví VAT & KPBT</div>
                </div>
                <div className="text-xl font-medium text-indigo-700">
                  3.949.406.887 vnđ
                </div>
              </div>

              <button className="py-2 px-5 bg-indigo-950 text-white font-medium text-center w-full rounded-2xl">
                Đặt cọc 50.000.000 vnđ
              </button>
            </div>
            <div className="rounded-2xl border px-10">
              <div className="py-2 font-medium text-center text-xl">
                Hoặc chúng tôi sẽ liên hệ với quý khách
              </div>
              <div className="py-10">
                <input
                  className=" rounded-2xl p-2 border text-center font-medium w-full"
                  placeholder="Họ và Tên"
                />
                <input
                  className=" rounded-2xl p-2 border text-center font-medium w-full"
                  placeholder="Email"
                />
                <input
                  className=" rounded-2xl p-2 border text-center font-medium w-full"
                  placeholder="Số điện thoại"
                />
              </div>
              <div className="p-5 border border-black font-bold text-center">
                Tôi muốn được tư vấn về căn hộ "Vinhomes Ocean Park - S1.112305"
              </div>
              <div className="text-center text-sm my-3">
                Bằng việc bấm vào nút "Nhận tư vấn", bạn đồng ý với Chính Sách
                Bảo Mật Thông Tin của chúng tôi.
              </div>
              <button className="w-full border-2 rounded-2xl mb-5 border-black font-bold text-2xl text-indigo-700">
                Gửi
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
