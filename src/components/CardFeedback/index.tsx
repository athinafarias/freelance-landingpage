import styles from "./styles.module.css"
import { CardFeedbackProps } from "./types"
import { FC } from 'react'

import UserImg from "../UserImg"

const CardFeedback: FC <CardFeedbackProps> = ({ srcImg, nome, cargo, text, data }) => {
    return (
        <div className={`${styles.CardFeedback} bg-(--componentsBackground) rounded-2xl px-8 py-10 flex flex-col gap-8 justify-center items-start text-base font-light h-full`}> 
            <div className="flex gap-8">
                <div className={`${styles.CardFeedbackImg}`}>
                    <UserImg src={srcImg} />
                </div>
                <div className="flex flex-col justify-center items-start">
                    <h4 className="text-(--orange) text-xl">{nome}</h4>
                    <h5 className="text-(--orangeHover)">{cargo}</h5>
                </div>
            </div>
            <p>{text}</p>
            <div className="flex flex-col justify-center items-start">
                <span className="font-normal">Data do trabalho conjunto:</span>
                <p>{data}</p>
            </div>
        </div>
    )
}

export default CardFeedback