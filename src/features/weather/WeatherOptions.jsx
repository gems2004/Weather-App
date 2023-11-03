import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DarkContext } from "../../App";
const WeatherOptions = ({ options, setOptions }) => {
  const navigate = useNavigate();
  const { dark, setDark } = useContext(DarkContext);
  return (
    <section className="w-screen h-screen fixed bg-black top-0 bg-opacity-50 grid z-50">
      <div
        className={`w-3/4 h-2/3 lg:w-1/3 ${
          dark ? "bg-[#131d37] text-white" : "bg-livid"
        } rounded-2xl place-self-center flex flex-col`}
      >
        <div
          className="m-4 self-end hover:scale-125 transition-transform"
          onClick={() => {
            setOptions((prevState) => {
              return {
                ...prevState,
                isClicked: false,
              };
            });
          }}
        >
          <FontAwesomeIcon icon={faX} size="xl" />
        </div>
        <div className="flex items-center justify-between mx-6 mb-8">
          <span className="text-2xl">Temperature</span>
          <div
            className="w-16 h-8 rounded-full bg-black relative"
            onClick={() => {
              setOptions((prevState) => {
                return {
                  ...prevState,
                  isF: !options.isF,
                };
              });
            }}
          >
            <div
              className={`w-7 h-7 translate-y-[2px] bg-white rounded-full absolute transition-transform grid place-content-center text-2xl select-none ${
                !options.isF ? "translate-x-[2px]" : "translate-x-[34px]"
              } ${dark ? "text-black" : ""}`}
            >
              {options.isF ? "F" : "C"}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mx-6 mb-8">
          <span className="text-2xl">Wind Speed</span>
          <div
            className="w-16 h-8 rounded-full bg-black relative"
            onClick={() => {
              setOptions((prevState) => {
                return {
                  ...prevState,
                  isMph: !options.isMph,
                };
              });
            }}
          >
            <div
              className={`w-7 h-7 translate-y-[2px] bg-white rounded-full absolute transition-transform grid place-content-center text-xs select-none ${
                !options.isMph ? "translate-x-[2px]" : "translate-x-[34px]"
              } ${dark ? "text-black" : ""}`}
            >
              {options.isMph ? "Mph" : "Kph"}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mx-6">
          <span className="text-2xl">Date Format</span>
          <div
            className="w-16 h-8 rounded-full bg-black relative"
            onClick={() => {
              setOptions((prevState) => {
                return {
                  ...prevState,
                  is24: !options.is24,
                };
              });
            }}
          >
            <div
              className={`w-7 h-7 translate-y-[2px] bg-white rounded-full absolute transition-transform grid place-content-center text-lg select-none ${
                !options.is24 ? "translate-x-[2px]" : "translate-x-[34px]"
              } ${dark ? "text-black" : ""}`}
            >
              {options.is24 ? "24" : "12"}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="grid h-full items-end justify-center ">
            <span
              className="bg-red-600 text-white rounded-xl p-2 mb-2 select-none"
              onClick={() => {
                navigate("/");
              }}
            >
              Return To Search Page
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherOptions;
