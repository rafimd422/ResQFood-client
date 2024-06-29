import "keen-slider/keen-slider.min.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { useKeenSlider } from "keen-slider/react";

const Reviews = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged() {
      console.log("slide changed");
    },
  });
  const goToPrevSlide = () => {
    if (instanceRef.current) {
      instanceRef.current.prev();
    }
  };

  // Function to go to the next slide
  const goToNextSlide = () => {
    if (instanceRef.current) {
      instanceRef.current.next();
    }
  };

  const reviews = [
    {
      id: 1,
      author: "John Doe",
      role: "User",
      review:
        "I started using ResQFood because we needed items for our newborn. After a few collections I discovered what a wonderful group of ResQFood there are close to me. It’s amazing how connected my family are with our community now, and we’ve been sharing flyers locally to help introduce even more people to Olio. I’ve felt a real sense of accomplishment completing Food Waste Hero pick ups too. It’s wonderful knowing I’m playing a part in reducing waste.",
      img: "https://i.ibb.co/j3W3495/speaker1.jpg",
    },
    {
      id: 2,
      author: "Alice Smith",
      role: "Volunteer",
      review:
        "As a volunteer, I've seen firsthand the positive impact this platform has on our community. It brings people together and ensures that no good food goes to waste.",
      img: "https://i.ibb.co/PhrP9fb/speaker4.jpg",
    },
    {
      id: 3,
      author: "Ella Johnson",
      role: "Recipient",
      review:
        "Hi  I Just wanted to come and say Hi I’m new here and just wanted to share what a positive experience I’ve had on this app so far. In a cost of living crisis this app has been exactly what me and my family needed with the added bonus of reducing food waste which is a massive problem in this country I couldn’t be more grateful for the volunteers who take time out of their day to collect and fairly distribute the food.",
      img: "https://i.ibb.co/YdfLztg/speaker2.jpg",
    },
  ];

  return (
    <>
      <section className="bg-white">
        <div className="container px-6 py-10 mx-auto">
          <h3 className="text-3xl font-extrabold text-center my-4 uppercase text-purple-950 mx-4">
            Hear why <span className="text-red-600">our community</span> loves
            ResQFood
          </h3>

          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>

          <div className="flex items-start max-w-6xl mx-auto mt-16">
            <div ref={sliderRef} className="keen-slider">
              {reviews.map((review) => (
                <div key={review.id} className="keen-slider__slide">
                  <div>
                    <p className="flex items-center text-center text-gray-500 lg:mx-8">
                      {review.review}
                    </p>

                    <div className="flex flex-col items-center justify-center mt-8">
                      <img
                        className="object-cover rounded-full w-14 h-14"
                        src={review.img}
                        alt=""
                      />

                      <div className="mt-4 text-center">
                        <h1 className="font-semibold text-gray-800 ">
                          {review.author}
                        </h1>
                        <span className="text-sm text-gray-500 ">
                          {review.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex md:gap-16 gap-8 justify-center my-4 text-5xl w-full">
            <button onClick={goToPrevSlide}>
              <FaAngleLeft />
            </button>
            <button onClick={goToNextSlide}>
              <FaAngleRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
