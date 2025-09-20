import { useIntl } from "react-intl";

const Home = () => {
  const { formatMessage } = useIntl();

  return (
    <div>
      <h1>{formatMessage({ id: "home" })}</h1>
    </div>
  );
};

export default Home;