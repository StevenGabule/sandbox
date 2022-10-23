import { useRef } from 'react'
import { ColumnContainer, ColumnTitle } from './styles'
import { Card } from './Card'
import { DragItem } from "./DragItem"
import { AddNewItem } from './AddNewItem'
import { useAppState } from './state/AppStateContext'
import { useItemDrag } from './utils/useItemDrag'
import { useDrop } from 'react-dnd'
import { moveList, addTask, moveTask, setDraggedItem } from './state/actions'
import { isHidden } from "./utils/isHidden"

type ColumnProps = {
	text: string;
	id: string;
	isPreview?: boolean
}

export const Column = ({text, id, isPreview} : ColumnProps) => {
	const { getTasksByListId, dispatch, draggedItem } = useAppState();
	const tasks = getTasksByListId(id);
	const ref = useRef<HTMLDivElement>(null)
	
	const [,drop] = useDrop({
		accept: ["COLUMN", "CARD"],
		hover() {
			if (!draggedItem) {
				return;
			}

			if(draggedItem.type === "COLUMN") {
				if(draggedItem.id === id) {
					return;
				}
				dispatch(moveList(draggedItem.id, id))
			} else {
				if(draggedItem.columnId === id) {
					return;
				}
				
				if(tasks.length) {
					return;
				}
				
				dispatch(moveTask(draggedItem.id, null, draggedItem.columnId, id))
				dispatch(setDraggedItem({ ...draggedItem, columnId: id }))
			}
		}
	})
	
	const {drag} = useItemDrag({ type: "COLUMN", id, text })
	
	drag(drop(ref))
	
	
	
	return (
		<ColumnContainer 
			isPreview={isPreview} 
			ref={ref} 
			isHidden={isHidden(isPreview, draggedItem, "COLUMN", id)}>
			
			<ColumnTitle>
				{text}
			</ColumnTitle>
			
			{tasks.map((task) => (
				<Card 
					key={task?.id} 
					id={task?.id} 
					columnId={id} 
					text={task?.text} 
				/>
			))}		  
			
			<AddNewItem 
				toggleButtonText="+ Add another cad" 
				onAdd={text => {
					dispatch(addTask(text, id))
				}} 
				dark />
		</ColumnContainer>
	)
}