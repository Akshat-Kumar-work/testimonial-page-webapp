import Card from "./Card";
import { FiChevronLeft , FiChevronRight} from 'react-icons/fi';
import { useState } from "react";

function Testimonial (props){
let reviews = props.reviews;

const [index, setIndex] = useState(0);

function leftHandler(){
    //agar index -1 krke neg index ayaga toh tum array k end m chle jao
    if(index -1 <0){
        setIndex(reviews.length-1)
    }
    else{
        setIndex(index-1)
    }
}

function rightHandler(){
    //agar index +1 karne se array k bhar jare ho toh , array k starting m ajao
    if(index +1 >=reviews.length){
        setIndex(0)
    }
    else{
        setIndex(index+1)
    }
}

function surpriseHandler (){
    //random function random no deta hai 0 to 1 k beech m toh multiply kia reviews ki length se taki 0 se length tk de
    //aur koi neg no na de paye eslie floor mthod use kia hai
    let randomIndex =  Math.floor (Math.random() * reviews.length);
    setIndex(randomIndex)
}

    return(
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700
        shadow-md ">
            <Card review = {reviews[index]}></Card>
            
            <div className=' flex text-3xl mt-5 gap-3 text-violet-400 font-bold justify-center'>

            <button onClick={leftHandler}
             className=' cursor-pointer hover:text-violet-500 '>
                <FiChevronLeft></FiChevronLeft>
            </button>

            <button onClick={rightHandler}
            className=' cursor-pointer hover:text-violet-500 '>
            <FiChevronRight></FiChevronRight>
            </button>

            </div>

            <div onClick={surpriseHandler}
            className='mt-5'>
            <button className=' bg-violet-400 hover:bg-violet-500 transition-all duration-200 
            cursor-pointer px-5 py-2 rounded-md font-bold text-white text-lg'>
             Surprise Me
            </button>

            </div>
            
        </div>
    )
}
export default Testimonial;