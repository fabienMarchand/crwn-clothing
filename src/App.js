import Directory from "./components/directory/directory.component";

import { SEED_CATEG } from "./seed-categories";

const App = () => {
  return <Directory categories={SEED_CATEG} />;
};

export default App;
