import compose from "compose-function"

import { withUi } from "./withUi"
import { withRouter } from "./withRouter"
import { withHelmetProvider } from "./withHelmetProvider"

export const withProviders = compose(withUi, withRouter, withHelmetProvider)
