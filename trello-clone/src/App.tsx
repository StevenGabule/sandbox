import { AppContainer } from './styles';
import { CustomDragLayer } from './CustomDragLayer';
import { Column } from './Column';
import { AddNewItem } from './AddNewItem';
import { useAppState } from './state/AppStateContext';
import { addList } from './state/actions';


export const App = () => {
	const { lists, dispatch } = useAppState();
	return (
		<AppContainer>
			<CustomDragLayer />
			{lists.map(list => (
				<Column id={list.id} key={list.id} text={list.text} />
			))}
		  <AddNewItem 
			toggleButtonText="+ Add another list" 
			onAdd={text => dispatch(addList(text))} 
		  />
		</AppContainer>
	);
}
