import { RecipeBook } from "../../types/RecipeBook";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";
import RecipeBookDisplay from "./RecipeBookDisplay";
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import { useRecipeBookContext } from "./RecipeCard";

function RecipesBookSlider({
  recipeBooks,
  recipeId,
  handleOpenToast,
}: {
  recipeBooks: RecipeBook[];
  recipeId?: string;
  handleOpenToast: (arg0: string) => void;
}) {
  const swiperRef = useRef<any>(null); // Ref for accessing Swiper instance
  const [canSlidePrev, setCanSlidePrev] = useState(false); // State to track if previous slide is possible
  const [canSlideNext, setCanSlideNext] = useState(true); // State to track if next slide is possible
  const recipeBookId = useRecipeBookContext(); // Get the context value

  const updateNavigationState = () => {
    if (swiperRef.current) {
      setCanSlidePrev(!swiperRef.current.isBeginning);
      setCanSlideNext(!swiperRef.current.isEnd);
    }
  };

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

  // Reorder recipeBooks to place the one matching the context value first
  const reorderedRecipeBooks = recipeBookId
    ? [
        ...recipeBooks.filter((book) => book.id === recipeBookId),
        ...recipeBooks.filter((book) => book.id !== recipeBookId),
      ]
    : recipeBooks;

  return (
    <div>
      {/* Pagination Controls */}
      <div className={`flex justify-between ${recipeBooks.length <= 2 && "hidden"}`}>
        <h2 className="text-md text-slate-600">Choose a recipe book</h2>
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
            <ArrowCircleRight fontSize="large" className="text-primary-color" />
          </button>
        </div>
      </div>

      {/* Swiper Component */}
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        className="mySwiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
      >
        {reorderedRecipeBooks.map((o, index) => (
          <SwiperSlide key={index} className="!w-fit">
            <RecipeBookDisplay
              handleOpenToast={handleOpenToast}
              recipeToCheck={recipeId}
              recipeBook={o}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RecipesBookSlider;

