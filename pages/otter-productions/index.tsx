import Page from '../../components/page';
import { GetStaticProps } from 'next';

export default function OtterProductions() {
  return <Page></Page>;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
