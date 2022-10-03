import Directory from "../../components/directory/directory.component";
import { SEED_CATEG } from "../../seed-categories";

const Home = () => {
  return <Directory categories={SEED_CATEG} />;
};

export default Home;
