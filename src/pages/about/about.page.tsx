import jsLogo from './../../assets/img/js_logo.svg';
import tsLogo from './../../assets/img/ts_logo.svg';
import reactLogo from './../../assets/img/react_logo.svg';
import Title from '../../components/title/title.component';

const About = () => {
  return (
    <div className="relative mt-12">
      <Title title={'About'} subTitle={"I'm not good at writing these."} />
      <div className="hidden xl:block absolute right-0 top-10 space-y-1 ">
        <p className="hidden xl:block text-custom-grey text-3xl">{`func main() {`}</p>
        <p className="hidden xl:block ml-8 text-custom-grey text-3xl">
          name := "Jordan Myers"
        </p>
        <p className="hidden xl:block ml-8 text-custom-grey text-3xl">
          age := 29
        </p>
        <p className="hidden xl:block ml-8 text-custom-grey text-3xl">
          fmt.Println(name)
        </p>
        <p className="hidden xl:block ml-8 text-custom-grey text-3xl">
          fmt.Println(age)
        </p>
        <p className="hidden xl:block text-custom-grey text-3xl">{'}'}</p>
        <p className="hidden xl:block text-custom-grey text-3xl">
          go run main.go
        </p>
      </div>
      <div className="my-8">
        <h2 className="mb-8 text-3xl font-bold">Main Skills</h2>
        <ul className="flex flex-wrap space-x-4">
          <li>
            <img src={jsLogo} alt="javascript logo" height={55} width={55} />
          </li>
          <li>
            <img src={tsLogo} alt="typescript logo" height={55} width={55} />
          </li>
          <li>
            <img src={reactLogo} alt="react logo" height={55} width={55} />
          </li>
        </ul>
      </div>
      <div className="mt-20">
        <h2 className="mb-2 text-2xl font-bold">Also busy doing</h2>
        <ul className="flex flex-wrap space-x-4">
          <li>Learning Rust & Go</li>
          <li>Playing games</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
