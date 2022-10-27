import { InstrumentName } from 'soundfont-player';
import { MidiValue } from './note';
import { Optional } from './types';

export const DEFAULT_INSTRUMENT: InstrumentName = "acoustic_grand_piano";
export type AudioNodeRegistry = Record<MidiValue, Optional<Player>>;