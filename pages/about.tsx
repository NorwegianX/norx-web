import Link from 'next/link';
import Container from '../components/container';
import VerticalSeperator from '../components/vertical-seperator';
import HorizontalSeperator from '../components/horizontal-seperator';
import aboutImage from '../public/images/rein-oterholm-min.jpg';
import Image from 'next/image';

export default function FourOhFour() {
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
        <div className="m-4 w-2/3 bg-red-400"></div>
      </div>
    </Container>
  );
}
