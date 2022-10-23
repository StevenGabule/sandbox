import {DragItem} from '../DragItem';

// • ADD_LIST - contains the list title.
// • ADD_TASK - text is the task text, and listId is the reference to the list it belongs to.
export type Action = 
	| { type: "ADD_LIST", payload: string } 
	| { type: "ADD_TASK", payload: { text: string; listId: string } }
	| { type: "MOVE_LIST", payload: { draggedId: string; hoverId: string } }
	| { type: "SET_DRAGGED_ITEM", payload: DragItem | null }
	| { 
		type: "MOVE_TASK", 
		payload: {
			draggedItemId: string,
			hoveredItemId: string | null,
			sourceColumnId: string,
			targetColumnId: string,
		}
	  }
	
interface AddListAction {
	type: "ADD_LIST"
	payload: string
}

interface AddTaskAction {
	type: "ADD_TASK"
	payload: { text: string; listId: string }
}

interface MoveListAction {
	type: "MOVE_LIST"
	payload: { draggedId: string; hoverId: string }
}


interface DragItemAction {
	type: "SET_DRAGGED_ITEM"
	payload: DragItem | null
}

interface MoveTaskAction {
	type: "MOVE_TASK"
	payload: {
		draggedItemId: string,
		hoveredItemId: string | null,
		sourceColumnId: string,
		targetColumnId: string,
	}
}

type TAction = AddListAction | AddTaskAction | MoveListAction | DragItemAction | MoveTaskAction;

export const addTask = (text: string, listId: string) : TAction => ({
	type: "ADD_TASK",
	payload: {
		text,
		listId
	}
})

export const addList = (text: string) : TAction => ({
	type: "ADD_LIST",
	payload: text
})

export const moveList = (draggedId: string, hoverId: string) : TAction => ({
	type: "MOVE_LIST",
	payload: {
		draggedId,
		hoverId
	}
})

export const setDraggedItem = (draggedItem: DragItem | null) : TAction => ({
	type: "SET_DRAGGED_ITEM",
	payload: draggedItem
})

export const moveTask = (
	draggedItemId: string,
	hoveredItemId: string | null,
	sourceColumnId: string,
	targetColumnId: string
) : TAction => ({
	type: "MOVE_TASK",
	payload: {
		draggedItemId,
		hoveredItemId,
		sourceColumnId,
		targetColumnId,
	}
})











