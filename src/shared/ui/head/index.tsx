import { ReactElement  } from 'react'

import { Helmet } from 'react-helmet-async'

interface HeadProps {
    children: ReactElement | ReactElement[]
}

export function Head ({ children }: HeadProps ) {
    return (
        <Helmet>
            {children}
        </Helmet>
    )
}