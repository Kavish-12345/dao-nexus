import CategoryRow from "../components/CategoryRow";
import EndComp from "../components/EndComp";
import HomeTop from "../components/HomeTop";

export default function Home({data}){

    return(
        <div>
            <HomeTop/>
            <div className="h-[1800px] bg-col5 text-white text-sm">
                <CategoryRow Category_Name="Protocol" DataObj={data["Protocol"]}/>
                <CategoryRow Category_Name="Investment" DataObj={data["Investment"]}/>
                <CategoryRow Category_Name="Collector" DataObj={data["Collector"]}/>
                <CategoryRow Category_Name="Grant" DataObj={data["Grant"]}/>
            </div>
            <EndComp/>
        </div>
    )
}