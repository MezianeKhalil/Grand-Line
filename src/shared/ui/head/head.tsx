import { Helmet } from 'react-helmet-async'

import { HeadProps } from '@/shared/types'

export default function Head ({ children }: HeadProps ) {
    return (
        <Helmet>
            {children}
        </Helmet>
    )
}