import styles from './styles.module.css'
import { LinkProps } from './types'
import { FC } from 'react'

const Link: FC <LinkProps> = ({ link, text, fontWeight }) => {
    return (
        <a
            style={{ fontWeight }}
            className={`${styles.Link} .cursor-pointer h-12 font-(family-name:--fontText) text-sm`}
            href={link}
        >
            {text}
        </a>
    )
}

export default Link