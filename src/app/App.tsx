/* eslint-disable react-refresh/only-export-components */
import { withProviders } from "./providers";
import { AppRouter } from "./router/AppRouter";

const App = () => {
  return <AppRouter />;
};

export default withProviders(App);
