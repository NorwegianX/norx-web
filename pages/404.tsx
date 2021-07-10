import Link from 'next/link';
import Container from '../components/container';

export default function FourOhFour() {
  return (
    <Container>
      <h1 className="mt-16">404 - Page Not Found</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </Container>
  );
}
