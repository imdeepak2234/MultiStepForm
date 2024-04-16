import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Page5 = ({ setIsButtonVisible }) => {
  setIsButtonVisible(true);
  return (
    <div className=" py-6 mb-2 md:mt-20 md:mb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-5 sm:space-y-0 sm:space-x-8">
          <div className="flex-1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVX86wP5lxT2XA2TuVZ74lvI48-Njwl3fErA&s"
              alt=""
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold pb-3">You're on your way!</h3>

            <FontAwesomeIcon icon={faStar} className={`text-yellow-500 ml-1`} />
            <FontAwesomeIcon icon={faStar} className={`text-yellow-500 ml-1`} />
            <FontAwesomeIcon icon={faStar} className={`text-yellow-500 ml-1`} />
            <FontAwesomeIcon icon={faStar} className={`text-yellow-500 ml-1`} />
            <FontAwesomeIcon
              icon={faStar}
              className={`text-yellow-500 ml-1 `}
            />
            <p className="leading-relaxed">
              <p className="italic mb-3 mt-1">
                "Through its engaging and well-structured course,Brilliant has
                taught me mathematical concepts that I previously struggled to
                understand. I now feel confident approching both technical job
                interviews and real word problem solving situations."
              </p>
              <p>-Jacob S.</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page5;
