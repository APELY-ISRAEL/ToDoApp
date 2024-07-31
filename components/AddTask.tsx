import { AiOutlinePlus } from "react-icons/ai";
import { FaPlus  } from "react-icons/fa";

;

const AddTask = () => {
    return (
    <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full flex items-center justify-center">Add new task
        <AiOutlinePlus className="ml-2" size={18}/>
        </button>
    </div>
   
    );
};

export default AddTask;
