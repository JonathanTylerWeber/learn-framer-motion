import React from 'react';

interface SelectDropdownProps {
  selectedOption: string;
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({ selectedOption, onSelectChange }) => {
  return (
    <div className="text-teal-400 mt-24 ml-10 sm:ml-16 sm:pl-2 lg:ml-40 lg:pl-4 flex 2xl:hidden">
      <div>
        <span className="text-slate-400">learn/</span>
        <label>
          <select
            className="bg-transparent"
            value={selectedOption}
            onChange={onSelectChange}
          >
            <option value="basics">basics</option>
            <option value="gestures">gestures</option>
            <option value="variants">variants</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default SelectDropdown;
