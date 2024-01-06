import { HelmetProvider } from 'react-helmet-async'

export const withHelmetProvider = (component: () => React.ReactNode) => () => (
    <HelmetProvider>{component()}</HelmetProvider>
)
