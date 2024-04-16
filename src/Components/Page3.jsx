const Page3 = ({ setIsButtonVisible }) => {
  setIsButtonVisible(true);
  return (
    <div className="  py-6 mb-2 md:mt-20 md:mb-20 ">
      <div className=" max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-y-0 sm:space-x-8">
          <div className="flex-1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpVs0CQjRLZ-aA9YELkc84c-ULQGBzc3T9A&s"
              alt=""
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold pb-3">
              You're in the right place
            </h3>
            <p className="leading-relaxed text-gray-600 mt-2 text-sm">
              Brilliant gets you hands-on to help improve your professional
              skills and knowledge. You'll interact with concepts and solve fun
              problems in math, science and computer science.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page3;
