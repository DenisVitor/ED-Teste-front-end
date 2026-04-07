import { useState } from "react";
import forestImg from '../../assets/forest.png';
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function SwiperSlideImage() {
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  return (
    <div className="custom-slider-container">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        loop={false}
        slidesPerView={1}
        onReachEnd={() => setIsEnd(true)}
        onReachBeginning={() => setIsBeginning(true)}
        onSlideChange={(swiper) => {
          setIsEnd(!!swiper.isEnd);
          setIsBeginning(!!swiper.isBeginning);
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
      >
        <SwiperSlide>
          <img src={forestImg} alt="forest" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={forestImg} alt="forest" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={forestImg} alt="forest" />
        </SwiperSlide>
      </Swiper>

      <div className="controls-wrapper">
        <button
          className={isBeginning ? "custom-prev" : "custom-next"}
        >
          <svg
            width="5"
            height="7"
            viewBox="0 0 5 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 7L0 3.5L3.5 0L4.31667 0.816667L1.63333 3.5L4.31667 6.18333L3.5 7Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <div className="custom-pagination"></div>
        <button
          className={isEnd ? "custom-prev" : "custom-next"}
        >
          <svg
            width="5"
            height="7"
            viewBox="0 0 5 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.816651 -3.0598e-07L4.31665 3.5L0.81665 7L-1.61411e-05 6.18333L2.68332 3.5L-1.56719e-05 0.816666L0.816651 -3.0598e-07Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SwiperSlideImage;
