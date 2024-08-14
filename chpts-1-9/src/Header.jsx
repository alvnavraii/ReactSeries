const Header = ({ title }) => {
  return (
    <header>
      <h1>{!title ? "Default Title" : title}</h1>
    </header>
  );
};

export default Header;
