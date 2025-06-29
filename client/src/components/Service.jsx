import React from "react";
import { BiCalendar, BiMusic } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

export default function Service() {
  return (
    <div className="bg-gray-50 py-10 px-5 lg:px-40 grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
      <div className="flex flex-col gap-5 items-center">
        <BiCalendar className="text-8xl text-gray-400" />
        <h3>7/24 Event available</h3>
        <hr className="w-2/4 text-primary" />
        <p className="text-center text-gray-400">
          Our events run around the clock—day and night—so you can participate
          whenever it suits your schedule. Whether you're an early bird or a
          night owl, there's always something happening!
        </p>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <CiLocationOn className="text-8xl text-gray-400" />
        <h3>Great Locations</h3>
        <hr className="w-2/4 text-primary" />
        <p className="text-center text-gray-400">
          We host our events in the most exciting and accessible venues across
          the country—ensuring a top-tier experience with vibrant surroundings,
          modern amenities, and unforgettable views.
        </p>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <BsPeople className="text-8xl text-gray-400" />
        <h3>More Then 200 Speakers</h3>
        <hr className="w-2/4 text-primary" />
        <p className="text-center text-gray-400">
          Learn from over 200+ inspiring speakers, including industry leaders,
          innovators, and influencers sharing insights, strategies, and stories
          to spark your creativity and career.
        </p>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <BiMusic className="text-8xl text-gray-400" />
        <h3>Lets Party After Event</h3>
        <hr className="w-2/4 text-primary" />
        <p className="text-center text-gray-400">
          The fun doesn’t end when the sessions do! Join our epic after-event
          parties with music, food, and networking in a relaxed and friendly
          environment.
        </p>
      </div>
    </div>
  );
}
