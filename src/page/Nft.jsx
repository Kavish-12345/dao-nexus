import removedLogo from "../../images/removedlogo.png"
import img1 from "../../images/img1.jpg"
import { useParams } from "react-router-dom"
import EndComp from "../components/EndComp";

export default function Nft({data}){

    let {category,name} = useParams();
    category = category.charAt(0).toUpperCase() + category.slice(1);
    const categoryData = data[category];
    const index = categoryData.shortName.indexOf(name);

    let title,description,image,price;
    
    if(categoryData){
        const nameData = data[category].shortName
        if(nameData){
            title = categoryData.name[index];
            description = categoryData.description[index];
            image = categoryData.imgUrl[index];
            price = categoryData.price[index];
        }
        else{
            return(
                <div>
                    NOT FOUND
                </div>
            )
        }
    }
    else{
        return(
            <div>
                NOT FOUND
            </div>
        )
    }

    return(
        <div>
            <div className="bg-col1 h-screen">
            <div className="flex">
          <div className="pt-3 pl-3">
            <img src={removedLogo} className="w-[40px] h-[40px]"/>
          </div>
          <div className="text-white pl-1 pt-5 font-bold flex text-2xl">Block Bazzar</div>
          
          <div className="flex absolute left-[100px]">
            <div className="mt-[120px] p-[50px] border border-white rounded-lg">
                <img src={image} className="h-[400px] w-[600px] rounded-lg"/>
            </div>
            <div className="text-white mt-[200px] ml-[60px] w-[600px]">
                <div className="font-bold text-6xl mt-3">{title}</div>
                <div className="mt-3">
                    <div className="flex">
                        <div className="font-bold">Category: </div>
                        <div className="ml-3">{category}</div>
                    </div>
                    
                    <div>
                        <div className="font-bold">Description: </div>
                        <div>{description}</div>
                    </div> 
                    <div className="mt-5">
                        <div className="font-bold">Price: </div>
                        <div className="text-2xl text-bold flex">{price} ETH</div>
                    </div> 
                    <div className="flex justify-end">
                        <button className="bg-col6 mt-10 p-2 rounded-lg w-[170px]">Buy Now</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
        </div>
            <EndComp/>
        </div>
        
    )
}