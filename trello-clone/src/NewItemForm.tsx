import React, { useState } from 'react';
import { NewItemFormContainer, NewItemButton, NewItemInput } from './styles'
import { useFocus } from './utils/useFocus'

type NewItemFormProps = {
	onAdd(text: string) : void;
}

export const NewItemForm = ({onAdd} : NewItemFormProps) => {
	const [text, setText] = useState("")
	const inputRef = useFocus();
	
	// https://reactjs.org/docs/events.html
	// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/14d95eb0fe90f5e0579c49df136cccdfe89b2855/types/react/index.d.ts#L1211
	const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if(event.key === "Enter") onAdd(text)
	}
	
	return (
	  <NewItemFormContainer>
		<NewItemInput 
			ref={inputRef} 
			value={text} 
			onKeyPress={handleAddText}
			onChange={(e: any) => setText(e.target.value)} />
		<NewItemButton onClick={() => onAdd(text)}>
			Create
		</NewItemButton>
	  </NewItemFormContainer>
	)
}









