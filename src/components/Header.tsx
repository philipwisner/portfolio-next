interface Props {
  name: string;
}

function Header(props: Props) {
  return <h1>&lt;{props.name}&gt; </h1>;
}

export default Header;
