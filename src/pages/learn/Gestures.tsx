import { useState } from "react";
import SideNav from "../../components/SideNav";
import { useNavigate } from "react-router-dom";
import SelectDropdown from "../../components/SelectDropDown";

const Gestures = () => {
  const [selectedOption, setSelectedOption] = useState("gestures");
  const navigate = useNavigate();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newOption = e.target.value;
    setSelectedOption(newOption);
    navigate(`/learn/${newOption}`); // Updated to use newOption
  };

  return (
    <>
      <div className="flex">

        <div className="hidden 2xl:block">
          <SideNav />
        </div>

        <div className="mx-auto w-full max-w-screen-xl">

          <SelectDropdown
            selectedOption={selectedOption}
            onSelectChange={handleSelectChange}
          />

          <h1 className="text-teal-400 text-center mt-10 xl:mt-28 text-4xl font-bold">
            Gestures
          </h1>
          <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus repudiandae laudantium suscipit beatae quisquam eveniet dolore blanditiis fugiat, aut sequi, optio expedita ex enim veritatis corporis officiis ullam error inventore? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quis enim nisi rerum provident praesentium dolorem quo consequuntur numquam quasi autem soluta, repellendus accusantium sequi voluptatem quod, corporis commodi rem!</p>

        </div>
      </div>
    </>
  );
};

export default Gestures;
