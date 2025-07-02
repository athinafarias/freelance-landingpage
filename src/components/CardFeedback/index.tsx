import styles from "./styles.module.css"
import { CardFeedbackProps } from "./types"
import { FC } from 'react'

import UserImg from "../UserImg"

const CardFeedback: FC <CardFeedbackProps> = ({ srcImg, nome, cargo, text, data }) => {
    return (
        <div className={`${styles.CardFeedback} bg-(--componentsBackground) rounded-xl px-3 py-3 lg:px-6 lg:py-6 gap-2 lg:gap-4 text-base font-light`}> 
            {/* Header com foto e informações */}
            <div className="flex gap-2 lg:gap-3 items-start mb-2 lg:mb-3">
                <div className={`${styles.CardFeedbackImg}`}>
                    <UserImg src={srcImg} />
                </div>
                <div className="flex flex-col justify-start items-start min-w-0 flex-1">
                    <h4 className="text-(--orange)">{nome}</h4>
                    <h5 className="text-(--orangeHover)">{cargo}</h5>
                </div>
            </div>
            
            {/* Conteúdo do depoimento */}
            <div className="mb-2 lg:mb-3 flex-1">
                <p>{text}</p>
            </div>
            
            {/* Informações da data */}
            <div className="border-t border-gray-700 pt-2 lg:pt-3 mt-auto">
                <span className="font-normal text-xs text-(--textColorMain) opacity-60 block">Data do trabalho conjunto:</span>
                <p className="text-xs opacity-80 mt-1">{data}</p>
            </div>
        </div>
    )
}

export default CardFeedback