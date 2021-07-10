import Page from '../../components/page';
import { GetStaticProps } from 'next';

export default function Resume() {
  return (
    <Page>
      <div className="flex w-full h-48 bg-green-400">Resume</div>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
