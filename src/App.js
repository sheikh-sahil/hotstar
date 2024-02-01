import Movies from "./Movies.js";
import Header from './Header.js';


class Film{
  name;
  poster;
  src;
  constructor(n,p,s){
      this.name=n;
      this.poster=p;
      this.src=s;
  }
  showDetails(){   console.log(this.name,this.poster,this.src);  }
}



function App(props)
{
  
  let topmovies=[
    new Film('3 idiots','https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg','https://www.youtube.com/watch?v=lBbIXBTqkEE'),
    new Film('bhaagi','https://movie.webindia123.com/movie/2020/Bollywood/October/Baaghi3/Baaghi3.jpg','https://www.youtube.com/watch?v=7Alrbs5ESOQ'),
    new Film('3 idiots','https://imgshare.info/images/2021/04/08/acb5f9acef04a570a1836685fcd54fba.jpg','https://www.youtube.com/watch?v=lBbIXBTqkEE'),
    new Film('bhaagi','https://pbs.twimg.com/media/FunLJ8kXgAEwtpv.jpg','https://www.youtube.com/watch?v=7Alrbs5ESOQ'),
    new Film('3 idiots','https://th.bing.com/th/id/OIP.-Bsy06PiSvPB70ifa_6KoQHaEL?w=292&h=180&c=7&r=0&o=5&pid=1.7','https://www.youtube.com/watch?v=lBbIXBTqkEE'),
    new Film('bhaagi','https://i.servimg.com/u/f85/11/45/73/12/poste113.jpg','https://www.youtube.com/watch?v=7Alrbs5ESOQ'),
    new Film('3 idiots','https://th.bing.com/th/id/OIP.-Bsy06PiSvPB70ifa_6KoQHaEL?w=292&h=180&c=7&r=0&o=5&pid=1.7','https://www.youtube.com/watch?v=lBbIXBTqkEE'),
    new Film('bhaagi','https://movie.webindia123.com/movie/2020/Bollywood/October/Baaghi3/Baaghi3.jpg','https://www.youtube.com/watch?v=7Alrbs5ESOQ')
   ];


   let newmovies=[
    new Film('3 idiots','https://i.servimg.com/u/f85/11/45/73/12/poste113.jpg','https://www.youtube.com/watch?v=lBbIXBTqkEE'),
    new Film('bhaagi','https://i.imgur.com/ZsbaH8I.jpeg','https://www.youtube.com/watch?v=7Alrbs5ESOQ'),
    new Film('3 idiots','https://i.pinimg.com/originals/f5/6a/ae/f56aaec94e18181ec2582755ca8a1871.jpg','https://www.youtube.com/watch?v=lBbIXBTqkEE'),
    new Film('3 idiots','https://cdnb.artstation.com/p/assets/images/images/038/542/949/large/supreme-artwork-73a692be-c6dc-498a-92cc-09574ba9b197.jpg?1623365932','https://www.youtube.com/watch?v=lBbIXBTqkEE'),
    new Film('bhaagi','https://i.imgur.com/ZsbaH8I.jpeg','https://www.youtube.com/watch?v=7Alrbs5ESOQ'),
    new Film('3 idiots','https://i.pinimg.com/originals/f5/6a/ae/f56aaec94e18181ec2582755ca8a1871.jpg','https://www.youtube.com/watch?v=lBbIXBTqkEE')
   ];

   let hollywoodmovies=[
    new Film('3 idiots','https://cdnb.artstation.com/p/assets/images/images/038/542/949/large/supreme-artwork-73a692be-c6dc-498a-92cc-09574ba9b197.jpg?1623365932','https://www.youtube.com/watch?v=lBbIXBTqkEE'),
    new Film('bhaagi','https://i.servimg.com/u/f85/11/45/73/12/poste113.jpg','https://www.youtube.com/watch?v=7Alrbs5ESOQ'),
    new Film('3 idiots','https://pbs.twimg.com/media/FunLJ8kXgAEwtpv.jpg','https://www.youtube.com/watch?v=lBbIXBTqkEE'),
    new Film('3 idiots','https://cdnb.artstation.com/p/assets/images/images/038/542/949/large/supreme-artwork-73a692be-c6dc-498a-92cc-09574ba9b197.jpg?1623365932','https://www.youtube.com/watch?v=lBbIXBTqkEE'),
    new Film('bhaagi','https://i.servimg.com/u/f85/11/45/73/12/poste113.jpg','https://www.youtube.com/watch?v=7Alrbs5ESOQ'),
    new Film('3 idiots','https://pbs.twimg.com/media/FunLJ8kXgAEwtpv.jpg','https://www.youtube.com/watch?v=lBbIXBTqkEE'),
    
   ];

   let comeingsoon=[
    new Film('3 idiots','https://i.pinimg.com/originals/80/ed/ea/80edeab0da25c1e445e33121b3d5cb4f.jpg','https://www.youtube.com/watch?v=lBbIXBTqkEE'),
    new Film('bhaagi','https://images.justwatch.com/poster/306716547/s718/haunted-mansion-2023.%7Bformat%7D','https://www.youtube.com/watch?v=7Alrbs5ESOQ'),
    new Film('3 idiots','https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EA323203792380708101B2B1A52FE02AF191D34FBBE3CBD97827FE402A756591/scale?width=506&aspectRatio=2.00&format=jpeg','https://www.youtube.com/watch?v=lBbIXBTqkEE'),
    new Film('3 idiots','','https://www.youtube.com/watch?v=lBbIXBTqkEE'),
    new Film('bhaagi','','https://www.youtube.com/watch?v=7Alrbs5ESOQ'),
   ];

   let sport=[
    new Film('3 idiots','https://th.bing.com/th/id/R.c094f9edf3470fae01bf5371b710e743?rik=IN14xElzJ0P2aA&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f13400000%2fArgentina-v-Mexico-2010-FIFA-World-Cup-Round-of-Sixteen-soccer-13404451-408-594.jpg&ehk=bGIs6UyLsYYQx0o7sfx9j2NDFjPcn1amAz5nrXWBnA8%3d&risl=&pid=ImgRaw&r=0','https://www.youtube.com/watch?v=lBbIXBTqkEE'),
    new Film('bhaagi','https://i.pinimg.com/originals/a9/68/04/a9680487efe0075eea3852478a3b8d84.png','https://www.youtube.com/watch?v=7Alrbs5ESOQ'),
    new Film('3 idiots','https://live.staticflickr.com/206/518678124_4fa0aaf29d_n.jpg','https://www.youtube.com/watch?v=lBbIXBTqkEE')
   ]

   

  
    return<div style={{backgroundColor:'black'}}>
      <Header/>
       <div style={{  paddingTop:'100px'  }}>
      <Movies movies={topmovies}   label='Top Picks For You' />
      <Movies movies={newmovies} label='Latest Releases'/>
      <Movies movies={hollywoodmovies} label="Hollywood Movies"/>
      <Movies movies={comeingsoon} label="Coming Soon"/>
      <Movies movies={sport} label="Sports"/>
        </div>

     
    </div>
}
export default App;