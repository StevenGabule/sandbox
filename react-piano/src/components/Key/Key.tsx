// • type, a NoteType - will be used to define the styles of a key
// • label, a string - a letter that will be placed as a label of a key
// • disabled, an optional boolean - if true it will disable the key from being pressed
type KeyProps = {
	type: NoteType
	label: string
	disabled?: boolean
}

export const Key: FunctionComponent<KeyProps> = (props) => {
	const { type, label, ...rest } = props;
	
	return (
		<button 
			className={clsx(styles.key, styles[type])} 
			type="button"
			{...rest}
			>
			{label}
		</button>
	)
}