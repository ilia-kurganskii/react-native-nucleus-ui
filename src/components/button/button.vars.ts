import { keyMirror } from '../../utils/key-mirror';

export const buttonVars = {
  appearances: keyMirror('primary', 'secondary', 'transparent', 'outline'),
  sizes: keyMirror('small', 'large', 'block'),
  iconPositions: keyMirror('left', 'right', 'side'),
};
