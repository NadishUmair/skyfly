import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { HiMiniMapPin } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";

const BookForm = () => {
  // Function to get today's date in yyyy-mm-dd format
  const getTodaysDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [departureDate, setDepartureDate] = useState(getTodaysDate());
  const [returnDate, setReturnDate] = useState(getTodaysDate());

  const handleTripChange = (e) => {
    const tripType = e.target.value;
    console.log(`Trip type selected: ${tripType}`);
    setIsRoundTrip(tripType === "round-trip");
  };

  const handleDepartureDateChange = (e) => {
    setDepartureDate(e.target.value);
  };

  const handleReturnDateChange = (e) => {
    setReturnDate(e.target.value);
  };

  console.log(`Is Round Trip: ${isRoundTrip}`);

  return (
    <div className="">
      <div className="w-full text-center font-bold text-2xl">
        <h1 className="">FIND YOUR PERFECT GATEWAY</h1>
      </div>
      <div className="p-2 flex flex-col justify-center items-center mt-2">
        <div className="w-[70%] md:w-[20%] flex  justify-between">
          <div className="flex items-center">
            <input
              type="radio"
              name="way"
              value="round-trip"
              className="mr-2 w-[1.2rem] h-[1.2rem]"
              checked={isRoundTrip}
              onChange={handleTripChange}
            />
            Round Trip
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="way"
              value="one-way"
              className="mr-2 w-[1.2rem] h-[1.2rem]"
              checked={!isRoundTrip}
              onChange={handleTripChange}
            />
            <span>One Way</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-4">
        <form
          action=""
          className="bookform bg-black/5 flex flex-wrap md:flex-nowrap gap-4 md:gap-0 justify-between rounded-lg items-center py-2 md:py-1 px-4 md:px-8 text-[14px] w-[90%] md:rounded-full md:h-[6rem]"
        >
         <div className="w-[90%] flex flex-wrap md:flex-nowrap gap-4 md:gap-1 justify-between">
         <div>
            <span className="text-[12px]">From</span>
            <div className="flex items-center">
              <HiMiniMapPin className="text-[1rem]" />
              <input type="text" placeholder="Flying From?" />
            </div>
          </div>
          <div>
            <span>To</span>
            <div className="flex items-center">
              <HiMiniMapPin className="text-[1rem]" />
              <input type="text" placeholder="Where Are you flying" />
            </div>
          </div>
          <div>
            <span>Departure</span>
            <div>
              <div className="flex items-center">
                <SlCalender className="text-[1rem] mr-1" />
                <input
                  type="date"
                  value={departureDate}
                  onChange={handleDepartureDateChange}
                />
              </div>
            </div>
          </div>
          <div>
            <span>Return</span>
            <div className="flex items-center">
              <SlCalender className="text-[1rem] mr-1" />
              <input
                type="date"
                value={isRoundTrip ? returnDate : "mm/dd/yyyy"}
                onChange={handleReturnDateChange}
                disabled={!isRoundTrip}
                className={isRoundTrip ? "cursor-pointer" : "cursor-not-allowed"}
              />
            </div>
          </div>
          <div>
            <span>Traveller(s)</span>
            <input type="text" placeholder="1 Person" className="ml-1" />
          </div>
          <div>
            <span>Cabin Class</span>
            <input type="text" placeholder="Economy" className="ml-1" />
          </div>
         </div>
          <div className=" w-full  flex flex-col justify-center items-center">
            <div className="hidden md:flex items-center">
            <span className="bg-green-500 md:p-4 rounded-full">
            <IoSearch className="text-2xl text-white" />
            </span>
            </div>
            <div className=" md:hidden w-full  text-center rounded-full flex items-center   ">
             <div className="flex bg-green-500 w-full rounded-full p-2 items-center justify-center">
            <span className="md:p-4 rounded-full">
            <IoSearch className="text-2xl text-white" />
            </span>
             <h1 className="block md:hidden text-white font-semibold text-xl">Search</h1>
             </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
