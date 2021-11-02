import "./App.css";
import MovieList from "./components/MovieList/movieList";
import Header from "./components/header/header";


function App() {
  const martinscorses = [
    {
      name: "Taxi Driver",
      pic: "https://i.pinimg.com/originals/8c/9c/50/8c9c507d71317328576b81cdeb402868.jpg",
      summary:
        "Taxi Driver is the story of how Travis gets ORGANIZED—how he makes himself into a person out of his scattered scraps of information about life as gleaned from the nocturnal undergrounds of the city.",
      rating: "8.2",
      year: "1972",
    },
    {
      name: "Raging Bull",
      pic: "https://th.bing.com/th/id/R.2436835c74b8017745b04a020d0174e6?rik=NU9IGHDvYIYi0w&riu=http%3a%2f%2fwww.cultjer.com%2fimg%2fug_photo%2f2014_01%2ftumblr_mdnxv8jJ201qm7fcfo6_12820140127170303.jpg&ehk=sAn2RgGdPJaMi9zoX5c1ikWGxuIeY%2fSp6fP0zsh%2ftq0%3d&risl=&pid=ImgRaw&r=0",
      summary:
        "A fighter noted less for his technique than his ability to inflict physical punishment on his opponents, La Motta was once banned from the sport for throwing a fight. His life outside of sports was no less unsettled, marked by stormy marriages and brief imprisonment on a morals charge.",
      rating: "8.2",
      year: "1980",
    },
    {
      name: "The Irishman",
      pic: "https://th.bing.com/th/id/R.4ec60047951c34d4979373db84d6601f?rik=YQ%2fJFcGVDS0R8Q&riu=http%3a%2f%2fprodimage.images-bn.com%2fpimages%2f0715515253215_p0_v1_s1200x630.jpg&ehk=%2b0r0uJPvNVfz5QFhBpjW1yGwduoelrLGy5Zwe0lmR%2fs%3d&risl=&pid=ImgRaw&r=0",
      summary:
        "The Irishman is an epic saga of organized crime in post-war America told through the eyes of World War II veteran Frank Sheeran.",
      rating: "7.8",
      year: "2019",
    },
    {
      name: "The King Of Comedy",
      pic: "https://i.pinimg.com/474x/c8/7b/a4/c87ba4ec4c235780746c4205ba62753a--s-movies-comedy-movies.jpg",
      summary:
        "Rupert Pupkin is a passionate yet unsuccessful comic who craves nothing more than to be in the spotlight and to achieve this, he stalks and kidnaps his idol to take the spotlight for himself.",
      rating: "7.8",
      year: "1983",
    },
    {
      name: "The Wolf of Wall Street",
      pic: "https://th.bing.com/th/id/R.268dae17633ae6f0084dd1b2c1ab6975?rik=BvoMFD%2b7TCr5QQ&riu=http%3a%2f%2ffc05.deviantart.net%2ffs70%2ff%2f2013%2f228%2f7%2fb%2fthe_wolf_of_wall_street_minimalist_poster_by_dcomp-d6ie0cr.jpg&ehk=MX1r8PqVmNKg5KGJ%2bpmzUefZkqyW%2ffQfiK26NQoPsJ4%3d&risl=&pid=ImgRaw&r=0",
      summary:
        "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      rating: "8.2",
      year: "2013",
    },
    {
      name: "Shutter Island",
      pic: "https://i.pinimg.com/originals/a6/5e/51/a65e51e99c84df7fa20d5fa5e872058d.jpg",
      summary:
        "When a patient at an isolated asylum disappears from a locked room, US Marshall Edward Teddy Daniels investigates but discovers that Shutter Island has a sinister secret.",
      rating: "8.2",
      year: "2010",
    },
  ];

  return (
    <div className="App">
      {/* <MartinScorsese /> */}

      <Header />
      <MovieList martinscorses={martinscorses} />

    </div>
  );
}

export default App;
