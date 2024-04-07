import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import backgroundImage from "../../../assets/Baner.jpg"
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";

export default function Home(){
    const[prop, setProp] = useState(null)
    console.log(prop);
    const[state, setState] = useState(null)

    const recommendedImages = [
        "/src/assets/recommonded/Rectangle 2.svg",
        "/src/assets/recommonded/Rectangle 4-1.svg",
        "/src/assets/recommonded/Rectangle 4.svg",
        "/src/assets/recommonded/Rectangle 5-1.svg",
        "/src/assets/recommonded/Rectangle 5-2.svg",
        "/src/assets/recommonded/Rectangle 4.svg",
        "/src/assets/recommonded/Rectangle 5.svg",
        "/src/assets/recommonded/Rectangle 34.svg",
      ];

    const upCommingEvents=[

            "/src/assets/upcoming/Rectangle 7.svg",
            "/src/assets/upcoming/Rectangle 9.svg",
            "/src/assets/upcoming/Rectangle 11.svg",
            "/src/assets/upcoming/Rectangle 15.svg",
            "/src/assets/upcoming/Rectangle 16.svg",
            "/src/assets/upcoming/Rectangle 17.svg",
            "/src/assets/upcoming/Rectangle 21.svg",
            "/src/assets/upcoming/Rectangle 22.svg",
            "/src/assets/upcoming/Rectangle 23.svg",
            "/src/assets/upcoming/Rectangle 23.svg",
        
    ]

    useEffect(() =>{
        fetch("https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco")
        .then(response => response.json())
        .then(data => {
            setProp(data)
        })
    },[]);

    useEffect(() =>{
        fetch("https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming")
        .then(response => response.json())
        .then(data => {
            setState(data)
        })
    },[]);
   

    return(
        <>
        <div className="flex justify-around max-sm:justify-between">

            <div className="text-logoRed font-bold text-xl sm:p-2 font-sans max-sm:ml-2">
                <h1 className=" text-center">BookUsNow</h1>
                <div className="sm:hidden flex ">
                    <div className=" flex items-center justify-center w-full">
                        <IoLocationSharp className="inline text-stroke"/><p className="inline text-xs text-black">Mumbai,India &gt;</p>
                    </div>
                </div>
            </div>
            

            {/* icons */}
            <div className="sm:hidden flex justify-between items-center w-20 px-1">
                < AiOutlineSearch className=""/>
                <AiFillHeart className="" />
                <CgProfile className="text-black"/>
            </div>

            {/* category  */}
            <div className=" mt-1 relative flex items-center max-sm:hidden">
                <button className="  bg-black text-white p-1 rounded-md"><HiOutlineMenu className="inline mb-1" />&nbsp;Categories</button>
                <input type="text" placeholder="search" className="border-2 border-stroke rounded-md ml-2 p-1" style={{width:'460px'}} />
                <AiOutlineSearch className="absolute right-1 top-1/2 transform -translate-y-1/2" />
            </div>                

            {/* favorites */}
            <div className="flex w-52 mt-2 max-sm:hidden">
                <div className=" mt-3"><AiFillHeart/></div>
                <h3 className=" mt-2 ml-2 ">Favorites</h3>
                <button className="border-2 border-stroke bg-white text-black rounded-md ml-2 w-20">Sign In</button>
            </div>
        </div>

        {/* second container */}

        <div className=" flex">

            <div className="flex p-1 ml-10  max-sm:hidden">
                <div className=" ">
                <IoLocationSharp className="inline ml-4"/><p className="inline ml-2">Mumbai,India &gt;</p>
                </div>
            </div>

            <div className="flex ml-32 justify-between font-sans  max-sm:m-0 max-sm:text-xs max-sm:overflow-x-auto max-sm:hide-scrollbar">
                <div className="sm:p-2 py-1 px-3 ">Live&nbsp;shows</div>
                <div className="sm:p-2 py-1 px-3 ">Streams</div>
                <div className="sm:p-2 py-1 px-3 ">Movies</div>
                <div className="sm:p-2 py-1 px-3 ">Plays</div>
                <div className="sm:p-2 py-1 px-3 ">Events</div>
                <div className="sm:p-2 py-1 px-3 ">Sports</div>
                <div className="sm:p-2 py-1 px-3 ">Activities</div>
            </div>
        </div>

        {/* Banner */}
        <div className="h-screen bg-cover bg-center flex flex-col items-center justify-center " style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="mb-52">
                <h1 className="text-white text-5xl text-center max-sm:text-3xl" style={{
                    lineHeight:'1.5'
                }}>Discover Exsiting Events Happenning <br />Near You - Stay Tuned for Updates!</h1>
                <h3 className="text-white text-center text-lg max-sm:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ut nihil similique a suscipit! 
                <br />necessitatibus consectetur adipisicing elit Cum ut nihil similique a suscipit voluptatum.</h3>
                <h3 className="text-white text-center text-sm sm:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ut nihil similique a suscipit!</h3>

            </div>
        </div>


        {/* event */}
        
        <div className="cardContainer" > 

          <div className="text-white text-xl mb-4  flex  w-full justify-between">
            <h1 className="font-bold max-sm:text-lg max-sm:p-0 ">Recommended&nbsp;Shows&nbsp;<BsArrowRight className="inline" /></h1>
            <a href="" className="sm:mr-28 sm:underline max-sm:text-xs max-sm:mr-10 max-sm:mt-2 max-sm:underline">see all</a>
          </div>

            
            {/* Recommended Shows */}
            <div style={{ overflowX: 'auto', '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }}>
                <div className=" flex gap-4 " style={{ width: '150%' }}>
                    {prop &&
                        prop.events.map((element, index) => (
                            <div className="max-sm:w-62 max-sm:h-72  w-62 h-72 relative max-sm:grow max-sm:shrink-0" key={index}>
                                <img src={recommendedImages[index]} alt="image" className="w-full h-full object-cover" />

                                <div className="absolute text-xs p-2 text-gray-300 bottom-0 w-full  h-18">

                                    <div className="flex justify-around ">
                                        <h2><p>{element.eventName.substring(0, 23)}</p></h2>
                                        <p>{new Date(element.date).toLocaleDateString()}</p>
                                    </div>
                                    <div className="flex justify-around ">
                                        <h2 className=""><IoLocationSharp className="inline" />{element.cityName}</h2>
                                        <p className="">{element.weather} | {parseInt(element.distanceKm).toString().substring(0, 2)}Km</p>
                                    </div>

                                </div>
                            </div>
                        ))}
                </div>
            </div>


            <div className="text-black text-xl mt-10 mb-4 flex">
                <h1 className="font-bold">Upcoming Events <BsArrowRight className="inline" /></h1>
                <a href="" className="sm:hidden max-sm:text-xs max-sm:ml-14 max-sm:mt-2 max-sm:underline">see all</a>
            </div>

            {/* Upcoming Events */}
            <div className="flex flex-wrap gap-4  overflow-y-auto" style={{maxHeight:'600px','-ms-overflow-style': 'none', 'scrollbar-width': 'none'}}>
                {state ? (
                    state.events.map((item, index) => (
                        <div key={index} className="max-w-xs h-auto bg-white rounded-xl shadow-2xl p-2 border-2 border-stroke">
                            <div className=" relative">
                                <img src={upCommingEvents[index]} className="w-full rounded-md" alt="image" />
                                <p className="absolute p-2 bottom-0 w-full text-gray-100 bg-gray-700 bg-opacity-80 rounded-md text-xs ">{new Date(item.date).toISOString().substring(0, 10)}</p>
                            </div>
                            <div className="">
                                <h2 className="font-bold text-md hover:cursor-default font-sans ">{item.eventName}</h2>
                                <div className=" text-sm  flex justify-between">
                                    <p className="font-medium "><IoLocationSharp className="inline" />{item.cityName}</p>
                                    <span className="">{item.weather} | {parseInt(item.distanceKm).toString().substring(0, 2)}Km</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <h3>Loading.....</h3>
                )}
            </div>

        </div>       
        </>
    )
}