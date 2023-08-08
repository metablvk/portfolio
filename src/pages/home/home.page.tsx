import './home.styles.css';
import brackets from './../../assets/img/brackets.svg';
const Home = () => {
  return (
    <div className="pt-24 relative">
      <div className="md:flex">
        <div className="z-10 relative">
          <h1 className="text-xl text-custom-purple font-bold md:text-2xl">
            I'm Jordan.
          </h1>
          <p className="text-3xl max-w-prose font-bold md:text-4xl  lg:text-6xl">
            And, welcome to my <br />
            digital playground!
          </p>
        </div>
        <img
          className="absolute top-0 brackets md:right-0 md:top-10"
          src={brackets}
          alt=""
        />
      </div>
      <div className="mt-48 relative md:mt-60">
        <h2 className="text-6xl font-bold text-custom-grey md:text-8xl">
          Whoami
        </h2>
        <p className="absolute top-10 max-w-prose md:top-16">
          I&apos;m a junior web developer who enjoys coding, chugging back
          coffee and trying to find the latest code meet ups too attend.
        </p>
      </div>
    </div>
  );
};

export default Home;
