import { Link } from 'react-router-dom';
import overwatchImage from '../assets/overwatchImage.png';
import valorantImage from '../assets/valorantImage.jpg';
import leagueImage from '../assets/leagueImage.jpg';
import battleBitImage from '../assets/battleBitImage1.jpg'
import rainbowImage from '../assets/rainbowImage.jpg'

import apexImage from '../assets/apexImage.jpg'
import counterStrike2Image from '../assets/counterStrike2.jpg'

function Categories() {
  const categoriesData = [
    {
      to: "/League",
      imageSrc: leagueImage,
      alt: "League",
      text: "League Of Legends",
      categoryClass: "LeagueCategory",
    },
    {
      to: "/Overwatch",
      imageSrc: overwatchImage,
      alt: "Overwatch",
      text: "Overwatch 2",
      categoryClass: "Overwatch2Category",
    },
    {
      to: "/Valorant",
      imageSrc: valorantImage,
      alt: "Valorant",
      text: "Valorant",
      categoryClass: "ValorantCategory",
    },
    {
        to: "/BattleBitRemastered",
        imageSrc: battleBitImage,
        alt: "BattleBit",
        text: "BattleBit Remastered",
        categoryClass: "BattleBitRemasteredCategory",
      },
      {
        to: "/Rainbow6Siege",
        imageSrc: rainbowImage,
        alt: "Rainbow 6 Seige",
        text: "Rainbow 6 Seige",
        categoryClass: "Rainbow6SiegeCategory",
      },
      {
        to: "/ApexLegends",
        imageSrc: apexImage,
        alt: "Apex Legends",
        text: "Apex Legends",
        categoryClass: "ApexLegendsCategory",
      },
      {
        to: "/CounterStrike2",
        imageSrc: counterStrike2Image,
        alt: "CounterStrike 2",
        text: "CounterStrike 2",
        categoryClass: "CounterStrike2Category",
      },
      {
        to: "/Misc",
        alt: "Misc",
        text: "Misc",
        categoryClass: "MiscCategory",
      },
  ];

  return (
    <div className="Cat">
      <ul className="CatList">
        {categoriesData.map((category, index) => (
          <li key={index}>
            <Link to={category.to} className={`CategoryLink ${category.categoryClass}`}>
              <div className="Category">
                <img
                  src={category.imageSrc}
                  alt={category.alt}
                  style={{ width: '171px', height: '228px' }}
                />
                <p>{category.text}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
