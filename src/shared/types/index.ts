import { ReactElement  } from 'react'

export interface FeaturesContent {
    title: string
    content: string
    icon?: string
}

export interface HeadProps {
    children: ReactElement | ReactElement[]
}
