import { WheelMenuOption } from "../models/WheelMenuOption";

export const MENU_OPTIONS: WheelMenuOption[] = [
    new WheelMenuOption('Blue', true, 'My Website'),
    new WheelMenuOption('Red', true, '{placeholderName}'),
    new WheelMenuOption('Yellow', false, 'Tic Tac Toe'),
    new WheelMenuOption('Pink', false, 'Randomness'),
    new WheelMenuOption('Green', true, '{placeholderName}'),
]