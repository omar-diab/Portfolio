
type MainTitleProps = {
  title: string;
}

const MainTitle = ({ title } : MainTitleProps ) => {
  return (
    <div className="text-start mb-5" data-aos="fade-up" data-aos-delay="100">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        MY <span className="text-primary">{title}</span>
      </h2>
      <div className="w-28 h-1 bg-blue-600"></div>
    </div>
  );
};

export default MainTitle;
