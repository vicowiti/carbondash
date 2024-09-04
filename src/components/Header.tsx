interface Props {
  title: string;
  subtitle: string;
}

const Header = (props: Props) => {
  return (
    <div className=" p-3 mb-3 bg-[#1f2a40] rounded-lg">
      <h3 className="text-xl">{props.title}</h3>
      <h6 className="">{props.subtitle}</h6>
    </div>
  );
};

export default Header;
