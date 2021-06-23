import Page from '../../components/page';
import { GetStaticProps } from 'next';

export default function Contact() {
  return <Page></Page>;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
