import removedLogo from "../../images/removedlogo.png"

export default function EndComp(){
    return(
        <div className="h-[500px] bg-black">
      <div className="pt-[60px] ml-[300px] flex">
        <img src={removedLogo} className="h-[350px] w-[350px]"/>
        <div className="mt-25 ml-10">
          <div className="text-6xl text-white font-bold">DAO Nexus</div>
          <div className="text-white mt-3">DAO Nexus is a dynamic platform redefining community membership through NFTs in a secure, user-friendly ecosystem. It empowers DAOs with seamless management of governance, exclusive access, and rewards, leveraging blockchain for transparency and multi-chain compatibility.
          Join DAO Nexus to shape and thrive in the evolving world of decentralized organizations.</div>
        </div>
      </div>
    </div>
    )
}