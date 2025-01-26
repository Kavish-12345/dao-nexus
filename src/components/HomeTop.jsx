import removedLogo from "../../images/removedlogo.png"
import topimg from "../../images/topimg.jpg"

export default function HomeTop(){
    return(
        <div className="bg-col1 h-[650px]">
        <div className="flex">
          <div className="pt-3 pl-3">
            <img src={removedLogo} className="w-[40px] h-[40px]"/>
          </div>
          <div class="text-white pl-1 pt-5 font-bold flex text-2xl">DAO Nexus</div>
          <div className="flex justify-end gap-10 text-white text-lg font-bold pt-7 mr-10 absolute right-0 mt-2">
            <div className="cursor-pointer">Protocol DAO</div>
            <div className="cursor-pointer">Investment DAO</div>
            <div className="cursor-pointer">Collector DAO</div>
            <div className="cursor-pointer">Grand DAO</div>
          </div>
        </div>
        <div className="flex ml-[100px] gap-10 pt-[70px]">
          <img src={topimg} className="h-[470px] w-[770px] rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"/>
          <div className="text-white text-6xl pt-30 ml-10 ">
            <div className="p-2 flex">One Stop Platform</div>
            <div className="ml-30 mt-2">for DAOs</div>
            <div className="ml-38 text-xl mt-5">Buy&nbsp;&nbsp;&nbsp;Create&nbsp;&nbsp;&nbsp;Join&nbsp;&nbsp;&nbsp;</div>
          </div>
        </div>
      <div/>
    </div>
    )
}