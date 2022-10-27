import { Keyboard } from '../keyboard';
import { NoAudioMessage } from '../NoAudioMessage';
import { useAudioContext } from '../AudioContextProvider';

export const Main = () => {
	const AudioContext = useAudioContext();
	return !!AudioContext ? <keyboard /> : <NoAudioMessage />
}