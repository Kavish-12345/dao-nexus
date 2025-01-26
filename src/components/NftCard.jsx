import { useNavigate } from "react-router-dom"

export default function NftCard({img,name,price,category,shortName}){
    const navigate = useNavigate();

    const handleNavigation = ()=>{
        navigate(`/nft/${category}/${shortName}`);
        window.scrollTo(0, 0);
      };

    return(
        <div className="font-bold transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer" onClick={handleNavigation}>
            <img src={img} className="h-[220px] w-[300px] rounded-tr-lg rounded-tl-lg"/>
            <div className="h-[80px] bg-col4 rounded-bl-lg rounded-br-lg pl-5 pt-4">
              <div>{name}</div>
              <div className="pt-3 pl-50">{price} ETH</div>
            </div>
        </div>
    )
}