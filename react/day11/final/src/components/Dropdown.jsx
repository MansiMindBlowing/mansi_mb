import { useState } from "react";

function Dropdown({options}){
    const[isOpen, setIsOpen] = useState(false);

    const handleClick = () =>{
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setIsOpen(false);
        // console.log(option);
        onselect(option);
        
    }

    const renderedOptions = option.map((option)=>{
        return(
            <div onClick={()=>handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        )
    })

    return (
        <div>

        </div>
    )
}

export default Dropdown;