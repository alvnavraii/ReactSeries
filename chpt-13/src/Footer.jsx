const Footer = ({ lenght }) => {
  return (
    <footer>
      <p>
        {lenght} {lenght === 1 ? "Item" : "Items"}
      </p>
    </footer>
  );
};
export default Footer;
