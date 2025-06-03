import styles from './styles.module.css'
import { ListTopicProps } from './types'
import { FC } from 'react'

const ListTopic: FC <ListTopicProps> = ({ text }) => {
    return (
        <div
            className={`${styles.ListTopic} flex gap-6 justify-center items-center text-base`
        }>
            <img src="/assets/icons/icon-topic.svg" alt="" />
            <p className="break-words">{text}</p>
        </div>
    )
}

export default ListTopic