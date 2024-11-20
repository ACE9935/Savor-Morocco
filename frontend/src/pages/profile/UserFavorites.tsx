import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState, useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import { ArrowCircleLeft, ArrowCircleRight, Favorite } from "@mui/icons-material";
import { useUser } from "../../context/auth-context";
import RecipeCard from "../recipes/RecipeCard";
import { recipes } from "../../utils/recipes";
import SectionPlaceHolder from "./SectionPlaceHolder";

function UserFavorites() {

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
    <>{!user?.favRecipes.length?
    <SectionPlaceHolder Icon={Favorite} title="Favorite recipes" subTitle="Your favorite recipes" description="Save your favorite recipes"/>
    :<div>
      {/* Pagination Controls */}
      <div
        className="flex justify-between"
      >
        <div className="flex pb-4 gap-3 items-center">
        <h2 className="text-xl font-semibold text-slate-600">Favorite recipes</h2>
        <div className="w-[0.3px] h-[30px] bg-black"></div>
        <h3 className="text-amber-500 font-semibold text-xl">{user?.favRecipes.length} Recipes</h3>
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
        {user?.favRecipes?.map((o, index) => (
          <SwiperSlide key={index} className="w-full max-w-[24rem]">
            <RecipeCard recipe={recipes.find((recipe)=>recipe.id==o)!}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>}
    </>
  );
}

export default UserFavorites;
