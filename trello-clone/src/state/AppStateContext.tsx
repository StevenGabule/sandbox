import React, { useEffect, Dispatch, createContext, useContext, FC } from 'react'
import { List, Task, AppState, appStateReducer } from './appStateReducer'
import { Action } from './actions'
import { useImmerReducer } from "use-immer"
import { DragItem } from "../DragItem"
import { save } from "../api"
import { withInitialState } from "../withInitialState"


const appData: AppState = {
	draggedItem: null,
	lists: [
		{
			id: "0",
			text: "TOdO 0",
			tasks: [{id: "c0", text: "Generate app scaffold 0"}],
		},
		{
			id: "1",
			text: "TOdO 1",
			tasks: [{id: "c1", text: "Generate app scaffold 1"}],
		},
		{
			id: "2",
			text: "TOdO 2",
			tasks: [{id: "c2", text: "Generate app scaffold 2"}],
		},
	]
}


const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

type AppStateProviderProps = {
	children: React.ReactNode;
	initialState: AppState
}

type AppStateContextProps = {
	draggedItem: DragItem | null
	lists: List[]
	getTasksByListId(id: string) : Task[]
	dispatch: Dispatch<Action>
}

export const AppStateProvider = withInitialState<AppStateProviderProps>(({ children, initialState }) => {
	const [ state, dispatch ] = useImmerReducer(appStateReducer, initialState);
	const {lists, draggedItem} = state;
	
	useEffect(() => {
		save(state)
	}, [state])
	
	
	const getTasksByListId = (id: string) => lists.find((list) => list.id === id)?.tasks || []
	
	return (
		<AppStateContext.Provider 
			value={{ draggedItem, lists, getTasksByListId, dispatch }}>
			{children}
		</AppStateContext.Provider>
	)
})

export const useAppState = () => {
	return useContext(AppStateContext)
}




















