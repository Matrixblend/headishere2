import React from "react";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

const CarouselComponent = ({ items }) => {
  return (
    <div className="et_pb_column et_pb_column_4_4 et_pb_column_4_tb_body et_pb_css_mix_blend_mode_passthrough et-last-child">
      <div className="et_pb_module dsm_post_carousel dsm_post_carousel_0_tb_body">
        <div className="et_pb_module_inner">
          <Swiper
            loop={true}
            speed={500}
            spaceBetween={20}
            // Other Swiper configurations
          >
            {items.map(item => (
              <SwiperSlide key={item.id}>
                <div className="dsm-grid-post-holder-inner">
                  <div className="dsm-entry-image">
                    <div className="dsm-entry-thumbnail">
                      <a href={item.link}>
                        <img src={item.imageUrl} alt={item.imageAlt} />
                      </a>
                    </div>
                  </div>
                  <div className="dsm-entry-wrapper">
                    <header className="dsm-entry-header">
                      <h2 className="dsm-entry-title">
                        <a href={item.link}>{item.title}</a>
                      </h2>
                    </header>
                    <div className="dsm-entry-meta">
                      <span className="dsm-posted-on">
                        <time dateTime={item.date}>{item.formattedDate}</time>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
