//Import the Link API to support client-side navigation
import Link from 'next/link'
import MyLayout from '../components/MyLayout'

const Projects = () => (
  <MyLayout>
  <style jsx>{`
      img {
        border-radius: 4px;
        padding: 5px;
        width:23rem;
        height:20rem;
        margin-left: auto;
        margin-right: auto;
      }
    `}</style>


    <h1>Projects </h1>
    <h2> Lightsaber store</h2>
     <img src="/public/images/lightsaber.PNG/"  />
    <p>
    This project was one of my early projects, it's a Lightsaber website where a user can look at various and place a hypothetical order.
    It was made using html ,css and javascript.

    </p>

    <h2>Minesweeper</h2>
     <img src="/public/images/Minesweeper.PNG/"  />
    <p>This project was showcasing my react skills, it's a game with similar game mechanics to Minesweeper</p>

    <h2>Itunes Search</h2>
     <img src="/public/images/itunes.PNG/" thumbnail />
    <p>
    This project is a website where a user can search the itunes store for songs , artist and then add this result to their favourites.
    It was made using React , Express and the Itunes search API
    </p>

    <Link href="https://github.com/Nhlanhla-Mdakane">
      <a >Github Link</a>
    </Link>
  </MyLayout>
)
export default Projects
