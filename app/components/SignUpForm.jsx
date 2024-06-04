import React from "react";
import { FaTimes } from "react-icons/fa";

const SignUpForm = () => {
  return (
    <div className="">
      <form className="bg-gradient-to-br from-cyan-500 to-indigo-600 w-[400px] h-[600px] text-center rounded-lg py-28 px-12 drop-shadow-xl relative z-0">
        <div className="absolute top-6 right-6 text-gray-200 cursor-pointer p-2">
          <FaTimes />
        </div>
        <h1 className="text-white text-xl text-start mb-8">
          Join our network of developers
        </h1>
        <div className="flex justify-center items-start flex-col text-white text-xs mb-[24px] border-b border-slate-100    hover:mb-[23px] hover:border-b-2 ">
          <label for="email">email</label>
          <input
            className="bg-transparent placeholder-gray-300 text-sm pb-0.5 mt-1 size-full outline-none focus:text-green-400 focus:text-sm"
            id="email"
            type="email"
            placeholder="email"
          />
        </div>

        <div className="flex justify-center items-start flex-col text-white text-xs mb-[24px] border-b border-slate-100    hover:mb-[23px] hover:border-b-2">
          <label for="password">password</label>
          <input
            className="bg-transparent placeholder-gray-300 text-sm pb-0.5 mt-1 size-full outline-none focus:text-green-400 focus:text-sm"
            id="password"
            type="password"
            placeholder="password"
          />
        </div>
        <div className="flex justify-center items-start flex-col text-white text-xs mb-[24px] border-b border-slate-100  hover:mb-[23px] hover:border-b-2">
          <label for="password2">confirm password</label>
          <input
            className="bg-transparent placeholder-gray-300 text-sm pb-0.5 mt-1 size-full outline-none"
            id="password2"
            type="password"
            placeholder="confirm password"
          />
        </div>
        <input
          className="w-full bg-white border-2 border-white rounded-full p-2 my-4 uppercase font-bold text-blue-600 hover:bg-transparent hover:text-white duration-300 "
          type="submit"
          value="Sign Up"
        />
        <p className="text-white text-sm">Already have an account</p>
      </form>
    </div>
  );
};

export default SignUpForm;
