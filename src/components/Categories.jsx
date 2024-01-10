import { Link } from 'react-router-dom';
import overwatchImage from '../assets/overwatchImage.png';
import valorantImage from '../assets/valorantImage.jpg';
import leagueImage from '../assets/leagueImage.jpg';
import TheFinalsImage from '../assets/theFinals.jpg'
import rainbowImage from '../assets/yomiImage.jpg'
import misc from '../assets/misc.jpg'
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
        to: "/TheFinals",
        imageSrc: TheFinalsImage,
        alt: "TheFinals",
        text: "The Finals",
        categoryClass: "TheFinalsCategory",
      },
      {
        to: "/Yomi",
        imageSrc: rainbowImage,
        alt: "Your Only Move Is Hustle",
        text: "Your Only Move Is Hustle",
        categoryClass: "YomiCategory",
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
        imageSrc: misc,
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
