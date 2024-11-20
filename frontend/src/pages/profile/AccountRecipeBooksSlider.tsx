import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState, useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import { ArrowCircleLeft, ArrowCircleRight, MenuBook } from "@mui/icons-material";
import { useUser } from "../../context/auth-context";
import RecipeBookSliderItem from "./RecipeBookSliderItem";
import SectionPlaceHolder from "./SectionPlaceHolder";

function AccountRecipeBooksSlider() {

  const { user, updateUser } = useUser();
  const swiperRef = useRef<any>(null); // Ref for accessing Swiper instance
  const [canSlidePrev, setCanSlidePrev] = useState(false); // State to track if previous slide is possible
  const [canSlideNext, setCanSlideNext] = useState(false); // State to track if next slide is possible
  const [isOverflowing, setIsOverflowing] = useState(false); // State to check if slides overflow container

  const updateNavigationState = () => {
    if (swiperRef.current) {
      setCanSlidePrev(!swiperRef.current.isBeginning);
      setCanSlideNext(!swiperRef.current.isEnd);

      // Check if slides overflow the container
      const swiperWidth = swiperRef.current.el.clientWidth;
      const slidesWidth = swiperRef.current.slides.reduce(
        (total: number, slide: any) => total + slide.clientWidth,
        0
      );

      setIsOverflowing(slidesWidth > swiperWidth);
    }
  };

  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper) {
      // Attach event listeners for swiper changes
      swiper.on("resize", updateNavigationState);
      swiper.on("slidesLengthChange", updateNavigationState);

      // Initial check
      updateNavigationState();

      // Cleanup listeners on unmount
      return () => {
        swiper.off("resize", updateNavigationState);
        swiper.off("slidesLengthChange", updateNavigationState);
      };
    }
  }, []);

  const handleSlidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
      updateNavigationState();
    }
  };

  const handleSlideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      updateNavigationState();
    }
  };

  return (
    <>{!user?.recipesBooks.length?
      <SectionPlaceHolder Icon={MenuBook} title="Recipe books" subTitle="You recipe books" description="Organize your favorite recipes"/>
      :<div>
      {/* Pagination Controls */}
      <div
        className="flex justify-between"
      >
        <div className="flex pb-4 gap-3 items-center">
        <h2 className="text-xl font-semibold text-slate-600">Recipe books</h2>
        <div className="w-[0.3px] h-[30px] bg-black"></div>
        <h3 className="text-amber-500 font-semibold text-xl">{user?.recipesBooks.length} Books</h3>
        </div>
        {isOverflowing && ( // Only show buttons if content overflows
          <div className={`flex justify-end gap-2 mb-3`}>
            <button
              disabled={!canSlidePrev}
              className="rounded-full disabled:opacity-30"
              onClick={handleSlidePrev}
            >
              <ArrowCircleLeft fontSize="large" className="text-primary-color" />
            </button>
            <button
              disabled={!canSlideNext}
              className="rounded-full disabled:opacity-30"
              onClick={handleSlideNext}
            >
              <ArrowCircleRight
                fontSize="large"
                className="text-primary-color"
              />
            </button>
          </div>
        )}
      </div>

      {/* Swiper Component */}
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        className="!pb-6"
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
      >
        {user?.recipesBooks?.map((o, index) => (
          <SwiperSlide key={index} className="!w-fit">
            <RecipeBookSliderItem recipeBook={o} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>}</>
  );
}

export default AccountRecipeBooksSlider;
