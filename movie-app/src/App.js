
import './App.css';
import MovieComponent from './Components/Movie/MovieComponent'


let movieArray = [
  {title:"Avengers",year:2012,genre:"Action", img:"https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg", description:"The Asgardian Loki encounters the Other, the leader of an extraterrestrial race known as the Chitauri. In exchange for retrieving the Tesseract,[N 2] a powerful energy source of unknown potential, the Other promises Loki an army with which he can subjugate Earth. ",link : "https://youtu.be/pQOiCwf_WYw"},
  {title:"Thor",year:2011,genre:"Action", img:"https://upload.wikimedia.org/wikipedia/en/9/95/Thor_%28film%29_poster.jpg", description:"In 965 AD, Odin, king of Asgard, wages war against the Frost Giants of Jotunheim and their leader Laufey, to prevent them from conquering the Nine Realms, starting with Earth. The Asgardian warriors defeat the Frost Giants in Tønsberg, Norway, and seize the source of their power, the Casket of Ancient Winters. ",link:"https://youtu.be/vJUDu40Z_RY"},
  {title:"Captain America: The First Avenger",year:2010,genre:"Action", img:"https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg", description:"In the present day, scientists in the Arctic uncover an old, frozen aircraft. In March 1942, Nazi lieutenant general Johann Schmidt and his men steal a mysterious relic called the Tesseract,[N 2] which possesses untold godly powers, from the town of Tønsberg in German-occupied Norway.",link:"https://youtu.be/-D0LD350i9A"},
  {title:"Iron Man 2",year:2013,genre:"Action", img:"https://upload.wikimedia.org/wikipedia/en/e/ed/Iron_Man_2_poster.jpg", description:"Iron Man 2 is a 2010 American superhero film based on the Marvel Comics character Iron Man. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the sequel to Iron Man (2008) and the third film in the Marvel Cinematic Universe (MCU). ",link:"https://youtu.be/wKtcmiifycU"},  
  {title:"Avengers:Endgame",year:2019,genre:"Action", img:"https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg", description:"In 2018, twenty-three days after Thanos killed half of all life in the universe,[N 1] Carol Danvers rescues Tony Stark and Nebula from deep space and they reunite with the remaining Avengers—Bruce Banner, Steve Rogers, Thor, Natasha Romanoff, and James Rhodes—and Rocket on Earth.",link:"https://youtu.be/TcMBFSGVi1c"},  
  {title:"Spider-Man:No WayHome",year:2021,genre:"Action", img:"https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg", description:"After Quentin Beck frames Peter Parker for his murder and reveals Parker's identity as Spider-Man,[N 1] Parker, his girlfriend MJ Watson, best friend Ned Leeds, and aunt May are interrogated by the Department of Damage Control. Lawyer Matt Murdock gets Parker's charges dropped, but the group grapples with negative publicity.",link:"https://youtu.be/wuyixh4SsAY"},  
  {title:"Ant man",year:2015,genre:"Action", img:"https://upload.wikimedia.org/wikipedia/en/1/12/Ant-Man_%28film%29_poster.jpg", description:"In 1989, scientist Hank Pym resigns from S.H.I.E.L.D. after discovering their attempt to replicate his Ant-Man shrinking technology. Believing the technology would be dangerous if replicated, Pym vows to hide it for as long as he lives. In the present day,[N 1] Pym's estranged daughter, Hope van Dyne, and former protégé, Darren Cross, have forced him out of his company, Pym Technologies. ",link:"https://youtu.be/z3I2YJC_97I"},  
  {title:"Captian Marvel",year:2019,genre:"Action", img:"https://upload.wikimedia.org/wikipedia/en/4/4e/Captain_Marvel_%28film%29_poster.jpg", description:"In 1995, on the Kree Empire's capital planet of Hala, Starforce member Vers suffers from amnesia and recurring nightmares involving an older woman. Yon-Rogg, her mentor and commander, trains Vers to control her abilities, while the Supreme Intelligence, the artificial intelligence that rules the Kree, urges her to keep her emotions in check. ",link:"https://youtu.be/bxQwyZUV00c"},  
]
function App() {
  return (
    <div>
      <div className='Header'>
            <h1 className='mb-0'>Movie Application</h1>
            <p className='m-0'>Developed by Kanniappan</p>
      </div>

      <div className='container'>
          <MovieComponent title={movieArray[0].title} year={movieArray[0].year} genre={movieArray[0].genre} img={movieArray[0].img} description={movieArray[0].description} link={movieArray[0].link}/>
          <MovieComponent title={movieArray[1].title} year={movieArray[1].year} genre={movieArray[1].genre} img={movieArray[1].img} description={movieArray[1].description} link={movieArray[1].link}/>
          <MovieComponent title={movieArray[2].title} year={movieArray[2].year} genre={movieArray[2].genre} img={movieArray[2].img} description={movieArray[2].description} link={movieArray[2].link}/>
          <MovieComponent title={movieArray[3].title} year={movieArray[3].year} genre={movieArray[3].genre} img={movieArray[3].img} description={movieArray[3].description} link={movieArray[3].link}/>
          <MovieComponent title={movieArray[4].title} year={movieArray[4].year} genre={movieArray[4].genre} img={movieArray[4].img} description={movieArray[4].description} link={movieArray[4].link}/>
          <MovieComponent title={movieArray[5].title} year={movieArray[5].year} genre={movieArray[5].genre} img={movieArray[5].img} description={movieArray[5].description} link={movieArray[5].link}/>
          <MovieComponent title={movieArray[6].title} year={movieArray[6].year} genre={movieArray[6].genre} img={movieArray[6].img} description={movieArray[6].description} link={movieArray[6].link}/>
          <MovieComponent title={movieArray[7].title} year={movieArray[7].year} genre={movieArray[7].genre} img={movieArray[7].img} description={movieArray[7].description} link={movieArray[7].link}/>


      </div>

    </div>
  );
}

export default App;
