import { BiSolidHomeCircle } from "react-icons/bi"

import { PiPhoneCallBold } from "react-icons/pi"
import { MdWorkOff } from "react-icons/md"
 import { MdManageSearch } from "react-icons/md"

import { FaServer } from "react-icons/fa"
import { FaQuestionCircle } from "react-icons/fa"


const MenuHomeData = [
{
    icon : <BiSolidHomeCircle/> ,
    name : "Home" ,
    herf : "#Home",
    id : "active"
},
{
    icon : <FaQuestionCircle/> ,
    name : "About Me" ,
    herf : "#AboutMe"
},
{
    icon : <FaServer/> ,
    name : "Services",
    herf : "#Services"
},
{
    icon : <MdWorkOff/> ,
    name : "Works",
    herf : "#Work"
},
{
    icon : <PiPhoneCallBold/> ,
    name : "Contact me",
    herf : "#ContactMe"
}
]

export default MenuHomeData
