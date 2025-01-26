import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import Nft from "./page/nft";
import TokenApp from "./components/TokenApp";

import uniswap from "../images/daoImages/uniswap.png"
import maker from "../images/daoImages/maker.png"
import aave from "../images/daoImages/aave.png"
import compound from "../images/daoImages/compound.png"
import lao from "../images/daoImages/lao.png"
import flamingo from "../images/daoImages/flamingo.png"
import syndicate from "../images/daoImages/syndicate.png"
import bit from "../images/daoImages/bit.png"
import pleasr from "../images/daoImages/pleasr.png"
import jenny from "../images/daoImages/jenny.png"
import squiggle from "../images/daoImages/squiggle.png"
import fingerprint from "../images/daoImages/fingerprint.png"
import gitcoin from "../images/daoImages/gitcoin.png"
import moloch from "../images/daoImages/moloch.png"
import metagame from "../images/daoImages/metagame.png"
import gnosis from "../images/daoImages/gnosis.png"

function App() {


  const data = {
    "Protocol":{
        name:["Uniswap DAO","Maker DAO","Aave DAO","Compound DAO"],
        shortName:["uniswap","maker","aave","compound"],
        price:["1.2","1","0.5","0.8"],
        imgUrl:[uniswap,maker,aave,compound],
        description:[
          "Uniswap DAO governs the Uniswap protocol, a leading decentralized exchange on Ethereum. It uses an automated market maker model for seamless, intermediary-free crypto trading. Token holders influence decisions on upgrades, fees, and policies, driving innovation in decentralized finance.",
          "Maker DAO is a decentralized organization managing the Maker protocol, which enables users to generate DAI, a stablecoin pegged to the USD. It leverages collateralized debt positions, offering stability and liquidity while governed by MKR token holders.",
          "Aave DAO oversees Aave, a decentralized liquidity protocol for lending and borrowing cryptocurrencies. Users earn interest by depositing assets or borrowing against collateral. Governance decisions on updates and policies are made by AAVE token holders, ensuring decentralization.",
          "Compound DAO governs the Compound protocol, enabling users to lend and borrow cryptocurrencies in a decentralized way. It uses smart contracts for automated interest rates. COMP token holders vote on upgrades, interest models, and risk parameters for protocol growth."
        ]
    },
    "Investment":{
        name:["The LAO","Flamingo DAO","Syndicate DAO","Bit DAO"],
        shortName:["lao","flamingo","syndicate","bit"],
        price:["1.25","1.1","0.6","1"],
        imgUrl:[lao,flamingo,syndicate,bit],
        description:[
          "The LAO is a venture DAO focused on funding early-stage blockchain projects. Members pool capital, vote on investments, and share profits collectively. It operates transparently, allowing contributors to support innovation while participating in governance and returns distribution.",
          "Flamingo DAO is a collector DAO investing in rare and valuable NFTs. Members collaboratively decide on acquisitions, focusing on digital art and collectibles. It promotes decentralized ownership of high-value digital assets and fosters innovation in the NFT ecosystem.",
          "Syndicate DAO is a decentralized investment platform that simplifies creating and managing investment groups. It enables collective funding for projects and startups, promoting accessibility and innovation in decentralized finance and community-driven investing.",
          "Bit DAO is one of the largest DAOs, focused on advancing decentralized finance and blockchain technology. It funds research, development, and projects through community governance. BIT token holders drive its mission to expand and innovate across Web3 ecosystems."
        ]
    },
    "Collector":{
        name:["Pleasr DAO","Jenny DAO","Squiggle DAO","Fingerprint DAO"],
        shortName:["pleasr","jenny","squiggle","fingerprint"],
        price:["1.5","0.9","1.3","0.7"],
        imgUrl:[pleasr,jenny,squiggle,fingerprint],
        description:[
          "Pleasr DAO is a collective of NFT enthusiasts acquiring culturally significant digital art. It collaborates with artists and uses decentralized governance to preserve and showcase iconic works, blending community-driven art ownership with blockchain technology.",
          "Jenny DAO is an NFT-focused DAO managing a collection of high-value digital assets. It emphasizes curation and community-driven decision-making, enabling members to invest in rare and unique NFTs while shaping the future of digital art.",
          "Squiggle DAO is dedicated to Art Blocks, focusing on generative art NFTs like Chromie Squiggles. Members collaborate to acquire and support digital artists, fostering innovation in generative art and decentralized community-driven art collections.",
          "Fingerprint DAO is a collective curating NFT-based art and blockchain innovation. It combines members' expertise to build a high-quality digital art collection while promoting decentralized ownership and supporting groundbreaking projects in blockchain technology."
        ]
    },
    "Grant":{
        name:["Gitcoin DAO","Moloch DAO","Metagame DAO","Gnosis DAO"],
        shortName:["gitcoin","moloch","metagame","gnosis"],
        price:["0.6","0.9","0.85","1.1"],
        imgUrl:[gitcoin,moloch,metagame,gnosis],
        description:[
          "Gitcoin DAO funds open-source projects, fostering innovation in blockchain and Web3. It operates through quadratic funding, empowering communities to decide on resource allocation, and supports developers building decentralized tools and infrastructure.",
          "Moloch DAO funds Ethereum infrastructure projects. It streamlines grant funding for community-driven initiatives, ensuring efficient resource allocation to improve scalability, security, and usability in the Ethereum ecosystem, all governed by its members.",
          "Metagame DAO is a social DAO fostering collaboration among builders and creators in the Web3 space. It gamifies participation, encouraging contributions to decentralized projects and empowering individuals to grow within the blockchain ecosystem.",
          "Gnosis DAO governs Gnosis, a platform for decentralized prediction markets and tools like Gnosis Safe. Token holders influence decisions on protocol upgrades and resource allocation, driving innovation in decentralized applications and asset management."
        ]
    },
}

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={data}/>} />
        <Route path="/nft/:category/:name" element={<Nft data={data} />} />
      </Routes>
      <TokenApp/>
    </BrowserRouter>
  );
}

export default App;