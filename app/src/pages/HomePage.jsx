import emoji from '../images/meInComputer.png'
const HomePage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="items-center  justify-center mt-16 flex flex-col">
        <img src={emoji} alt="computer " className="mb-10" />
        <h1 className="text-white font-bold">VITÓRIA HOLANDA</h1>
        <h1 className="text-white font-extralight">Desenvolvedora  FullStack</h1>
      </div>
    </div>
  );
};

export default HomePage;
