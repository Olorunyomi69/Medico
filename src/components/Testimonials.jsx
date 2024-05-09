import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Testimonials = () => {
  return (
    <section id="testimonials" className="hidden md:block scroll-smooth">
      <div>
        <div className="container flex flex-col px-4 mx-auto mt-20 space-y-12 md:space-y-0 md:flex-col">
          <div>
            <h1 className="text-3xl text-[#21513b] font-semibold mb-4 ">
              Testimonials
            </h1>
          </div>
          <div>
            <p className="text-xl">
              See what people are saying about taking charge or their health
            </p>
          </div>
        </div>
        <div className="container mx-auto flex justify-center items-center p-3 mb-4">
          <Swiper
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              Autoplay,
              EffectCoverflow,
            ]}
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{ pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
          >
            <SwiperSlide className="flex justify-center items-center">
              <div className="flex flex-col items-center justify-center mt-10 space-y-6 p-10 rounded-lg bg-white md:w-full">
                <img
                  src="/avatar-anisha.png"
                  className="w-16 -mt-14"
                  alt="avatar"
                />
                <h5 className="text-lg font-bold">Anisha Lee</h5>
                <p className="text-sm font-semibold leading-normal text-lg">
                  &quot;As a busy parent, this system makes it so much easier to
                  track my family&apos;s health data. I love the secure
                  messaging feature that allows me to easily communicate with
                  our pediatrician&quot;
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center">
              <div className="flex-col items-center py-10 justify-center mt-10 space-y-6 p-6 rounded-lg bg-white md:flex md:w-full">
                <img
                  src="/avatar-ali.png"
                  className="w-16 -mt-14"
                  alt="avatar"
                />
                <h5 className="text-lg font-bold">Ali Bravo</h5>
                <p className="text-sm font-semibold leading-normal text-lg">
                  &quot;I was initially hesitant about using a health management
                  app, but this system has exceeded my expectations. The
                  interface is user-friendly and has helped me set and achieve
                  my health goals.&quot;
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center">
              <div className="flex-col items-center py-10 justify-center mt-10 space-y-6 p-6 rounded-lg bg-white md:flex md:w-full">
                <img
                  src="/avatar-richard.png"
                  className="w-16 -mt-14"
                  alt="avatar"
                />
                <h5 className="text-lg font-bold">Richard Josu</h5>
                <p className="text-sm font-semibold leading-normal text-lg">
                  &quot;This system has been a lifesaver! I finally feel in
                  control of my chronic condition. The appointment scheduling
                  and medication reminders have been incredibly helpful.&quot;
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center">
              <div className="flex-col items-center py-10 justify-center mt-10 space-y-6 p-6 rounded-lg bg-white md:flex md:w-full">
                <img
                  src="/avatar-jessica.png"
                  className="w-16 -mt-14"
                  alt="avatar"
                />
                <h5 className="text-lg font-bold">Jessica Huston</h5>
                <p className="text-sm font-semibold leading-normal text-lg">
                  &quot;Living with a disability can be challenging, but this
                  system has helped me stay organized and motivated. The
                  progress tracking features allow me to see how far I&apos;ve
                  come, which is incredibly rewarding.&quot;
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center">
              <div className="flex-col items-center py-10 justify-center mt-10 space-y-6 p-6 rounded-lg bg-white md:flex md:w-full">
                <img
                  src="/avatar-michael.png"
                  className="w-16 -mt-14"
                  alt="avatar"
                />
                <h5 className="text-lg font-bold">Michael Kneed </h5>
                <p className="text-sm font-semibold leading-normal text-lg">
                  &quot;I&apos;m a big advocate for preventative health. This
                  system has been instrumental in helping me identify potential
                  health concerns early on through the health data analysis and
                  doctor recommendations. It gives me peace of mind.&quot;
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
