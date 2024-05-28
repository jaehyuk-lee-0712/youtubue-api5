import { BsEmojiHeartEyes } from "react-icons/bs";
import { BsEmojiSunglasses } from "react-icons/bs";
import { BsEmojiWink } from "react-icons/bs";
import { PiSneakerMove } from "react-icons/pi";
import { BsEmojiSurprise } from "react-icons/bs";
import { BsEmojiGrin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillProfile } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";

export const headerMenu = [
    {
        title : "봉팔's",
        icon : <BsEmojiSmile/> , 
        src : "/search/bongpals"
    },
    {
        title : "추천영상",
        icon : <BsEmojiHeartEyes/> , 
        src : "/search/인기 여행지"
    },
    {
        title : "추천 여행지",
        icon : <BsEmojiSunglasses/> , 
        src : "/search/여행지 추천"
    },
    {
        title : "가보고 싶은곳",
        icon : <PiSneakerMove/> , 
        src : "/search/가보고 싶은 여행지"
    },
    {
        title : "예약 정보",
        icon : <BsEmojiWink/> , 
        src : "/search/여행 호텔 예약"
    },
    {
        title : "볼거리",
        icon : <BsEmojiSurprise/> , 
        src : "/search/여행지 볼거리"
    },
    {
        title : "먹거리",
        icon : <BsEmojiGrin/> , 
        src : "/search/여행지 먹거리"
    },
    {
        title : "특별 할인",
        icon : <BsEmojiHeartEyes/> , 
        src : "/search/여행 특별 할인"
    },
    {
        title : "혼자 가기",
        icon : <BsEmojiHeartEyes/> , 
        src : "/search/혼자 가는 여행"
    },
    
    {
        title : "같이 가기",
        icon : <BsEmojiHeartEyes/> , 
        src : "/search/함께 가기 좋은 여행지"
    }
    
]

export const searchKeyword = [
    {
        title : "여행지" ,
        src : "/search/여행지"
    },
    {
        title : "다크라이트" ,
        src : "/search/다크라이드"
    },
    {
        title : "호텔" ,
        src : "/search/호텔"
    },
    {
        title : "항공권" ,
        src : "/search/항공권"
    },
    {
        title : "먹거리" ,
        src : "/search/먹거리"
    },
    {
        title : "경비" ,
        src : "/search/경비"
    },
    {
        title : "이동경로" ,
        src : "/search/move"
    },
    {
        title : "볼거리" ,
        src : "/search/볼거리"
    },
    {
        title : "여행자 보험" ,
        src : "/search/보험"
    },
    {
        title : "렌트" ,
        src : "/search/렌트"
    }
]

export const snsLinks = [
    {
        title : "github" , 
        url : "jaehyuk-lee-0712.github.io" , 
        icon : <AiFillGithub/>
    },
    {
        title : "youtube" , 
        url : "dlwogur0712@gmail.com" , 
        icon : <AiFillYoutube/>
    },
    {
        title : "instagram" , 
        url : "dlwogur0712@gmail.com" , 
        icon : <AiFillInstagram/>
    },
    {
        title : "blog" , 
        url : "dlwogur0712@gmail.com" , 
        icon : <AiFillProfile/>
    }
]