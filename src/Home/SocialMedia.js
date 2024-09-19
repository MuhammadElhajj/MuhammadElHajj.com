import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import { FaTwitter } from "react-icons/fa"
import { FaTelegram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa6"

const SocialMediaIcon = [
    {
        name: <FaLinkedin /> ,
        style : {color : "#007ab9"} ,
        title : 'visit my LinkedIn'
    },
    {
        name: <FaFacebook /> ,
        style : {color : "#3b5998"},
        title : 'visit my FaceBook'
    },
    {
        name: <FaInstagram /> ,
        style : {color : '#cc3972'},
        title : 'visit my Instagram'
    },
    {
        name: <FaYoutube /> ,
        style : {color : 'red'},
        title : 'I do not have a YouTube Channal'
    },
    {
        name: <FaTwitter /> ,
        style : {color : '#38a8e0'},
        title : 'I do not hane Twitter'
    },
    {
        name: <FaTelegram /> ,
        style : {color : '#33bcfd'},
        title : 'My Phone Number is Pravite'
    },
    {
        name: <FaWhatsapp /> ,
        style : {color : '#53d324'},
        title : 'My Phone Number is Pravite'
    }
]


export default SocialMediaIcon