

const RandomPicture = () => {
  const randomPictures = [
    'https://media1.tenor.com/m/izKH0rZqv-IAAAAd/bardmp4-bard.gif',
    'https://media1.tenor.com/m/3saaHIv3zBgAAAAd/aatrox-league-of-legends.gif',
    'https://media1.tenor.com/m/f-_ko3SD2IAAAAAC/omen-valorant.gif',
    'https://media1.tenor.com/m/imCqsaxJQlMAAAAC/kaisa.gif',
    'https://media1.tenor.com/m/KyuAgnD3t1QAAAAC/valorant-cypher.gif',
    'https://media1.tenor.com/m/Gb4ftr4F3qoAAAAC/squint-my-eyes-reyna.gif',
    'https://media1.tenor.com/m/tb1Mk1o8I10AAAAC/jett-jett-valorant.gif',
    'https://media1.tenor.com/m/wrM9BKU3rsoAAAAd/bateatbanan-banana.gif',
    'https://media1.tenor.com/m/9Eyt1T8mGyoAAAAd/star-guardian-morgana-morgana.gif',
    'https://media1.tenor.com/m/YTiWpm8Wl9sAAAAC/overwatch-winston.gif',
    'https://media1.tenor.com/m/ZF7-tlrGKNYAAAAd/over-watch-reinhardt.gif',
    'https://cdn.discordapp.com/attachments/872737893452509246/1199198388185468958/IMG_4739.jpg?ex=65c1ab87&is=65af3687&hm=1a061b9771f318864b88ecb97f52526291386cd76d63a37719dab59a069c1301&',
  ];

  
  const randomIndex = Math.floor(Math.random() * randomPictures.length);
  return randomPictures[randomIndex];
};

export default RandomPicture;