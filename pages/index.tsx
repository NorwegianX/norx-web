import Page from '../components/page';
import { GetStaticProps } from 'next';

export default function Home() {
  return <Page></Page>;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
