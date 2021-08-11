import Link from 'next/link';
import Container from '../components/container';
import VerticalSeperator from '../components/vertical-seperator';
import HorizontalSeperator from '../components/horizontal-seperator';
import aboutImage from '../public/images/rein-oterholm-min.jpg';
import Image from 'next/image';

export default function FourOhFour() {
  const logos = ['/images/companies/twitch.png', '/images/companies/rex.png', '/images/companies/fleks.png', '/images/companies/dreamhack.png']
  return (
    <Container>
      <div className="flex mt-2 md:mt-24 w-full flex-col md:flex-row">
        <div className="m-4 ">
          <Image
            alt="Mountains"
            src={aboutImage}
            layout="intrinsic"
            width={500}
            height={750}
          />
        </div>
        <VerticalSeperator className="hidden md:flex" />
        <HorizontalSeperator className="flex md:hidden" />
        <div className="flex flex-col m-4 w-2/3">
          <h1 className="mb-8">
              Rein Oterholm
          </h1>
          <p>
          Starting in 1996 Rein was born and raised in Norway, but as of 2020, he is a dual citizen working in both the United States and EU!
          He is an energetic person that always pays attention to detail. He is impacient if nothing is happening, and always the first person to take initiative for new projects!
          </p><br></br>
          <p>
            At an age of 13, he worked his way from the bottom of the food-chain to running a company at the age of 18. During his already long career, he has been a key part of the largest esport festivals in the world!
            Over the cause of 30+ events in 9 different countries, he delivered high quality broadcast and event production on an impressive scale.
          </p><br></br>
          <p>
            These days he is working as one of the youngest Senior Software Engineers and delivering high impact products to a range of industies.
          </p>
          <div className="logos flex grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 w-full my-16">
            {logos.map(logo => {
              return <div className="flex justify-center items-center h-16 w-full">
                <img src={logo} className="max-h-full" key={logo} />
              </div>
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}
