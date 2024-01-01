import compose from "compose-function";

import { withUi } from "./withUi";
import { withRouter } from "./withRouter";

export const withProviders = compose(withUi, withRouter);
