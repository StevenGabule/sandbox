import { FunctionComponent } from "react"
import clsx from "clsx"
import { NoteType } from "../../domain/note"
import { usePressObserver } from "../PressObserver"
import styles from "./Key.module.css"

type PressCallBack = () => void

type KeyProps = {
	type: NoteType
	label: string
	disabled?: boolean
	
	onUp: PressCallBack
	onDown: PressCallBack
}

export const Key: FunctionComponent<KeyProps> = ({type,label,onDown,onUp,...rest}) => {
	const pressed = usePressObserver({ watchKey: label, onStartPress: onDown, onFinishPress: onUp })
	
	return (
		<button 
			className={clsx(styles.key, styles[type], pressed && 'is-pressed')} 
			type="button"
			onMouseDown={onDown}
			onMouseUp={onUp}
			{...rest}>
			{label}
		</button>
	)
}