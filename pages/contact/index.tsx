import Page from '../../components/page';
import { GetStaticProps } from 'next';
import { motion } from 'framer-motion';

export default function Contact() {
  let easing = [0.175, 0.85, 0.42, 0.96];
  return (
    <Page>
      <motion.div
        initial="exit"
        animate="enter"
        exit="exit"
        variants={{
          exit: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <div className="flex flex-col">
          <div className="flex w-full h-48 bg-red-400">Contact</div>
          <div className="flex w-full h-48 bg-red-400">Contact</div>
          <div className="flex w-full h-48 bg-red-400">Contact</div>
          <div className="flex w-full h-48 bg-red-400">Contact</div>
        </div>
      </motion.div>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
