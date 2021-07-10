import Page from '../../components/page';
import { GetStaticProps } from 'next';

export default function OtterProductions() {
  return (
    <Page>
      <div className="flex w-full h-48 bg-blue-400">Otter Productions</div>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
