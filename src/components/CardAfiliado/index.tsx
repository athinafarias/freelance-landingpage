import Tag from "@/components/Tag"
import ButtonCTA from "@/components/ButtonCTA"

import styles from "./styles.module.css"
import { CardAfiliadoProps } from "./types"
import { FC } from 'react'

const CardAfiliado: FC <CardAfiliadoProps> = ({ txtTag, titulo, text, linkCTA, txtBotao }) => {
    return (
        <div className={`${styles.CardAfiliado} bg-(--componentsBackground) rounded-2xl px-8 py-10 flex flex-col gap-8 justify-center items-start text-base font-light`}> 
            <div className="flex flex-col gap-4">
                <Tag text={txtTag} variant="orange" />
                <h3 className="text-(--orange) text-2xl">{titulo}</h3>
            </div>
            <p>{text}</p>
            <ButtonCTA link={linkCTA} text={txtBotao} />
        </div>
    )
}

export default CardAfiliado