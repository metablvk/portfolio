type TitleProps = {
  title: string;
  subTitle: string;
};

const Title = ({title, subTitle}: TitleProps) => (
  <div className="relative my-4">
    <h1 className="text-5xl md:text-6xl text-inter text-custom-grey font-black  tracking-widest">
      {title}
    </h1>
    <p className="top-8 md:top-10 absolute">{subTitle}</p>
  </div>
);

export default Title;
