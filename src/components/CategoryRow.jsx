import NftCard from "./nftCard"

export default function CategoryRow({Category_Name,DataObj}){

    return(
        <div>
          <div className="text-2xl text-white font-bold pl-10 pt-10">Trending in {Category_Name} DAO</div>
          <div className="flex justify-center gap-10 pt-10">
            {DataObj.name.map((name, index)=>(<NftCard key={index} shortName={DataObj.shortName[index]} img={DataObj.imgUrl[index]} name={name} category={Category_Name} price={DataObj.price[index]} />))}
          </div>
      </div>
    )
}