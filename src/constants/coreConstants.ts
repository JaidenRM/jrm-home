import { WheelMenuOption } from "../models/WheelMenuOption";

export const MENU_OPTIONS: WheelMenuOption[] = [
    new WheelMenuOption({colour: 'Blue', onOuterWheel: true, label: 'My Website', url: 'https://www.google.com.au'}),
    new WheelMenuOption({colour: 'Red', onOuterWheel: true, label: '{placeholderName}'}),
    new WheelMenuOption({colour: 'Yellow', onOuterWheel: false, label: 'Tic Tac Toe'}),
    new WheelMenuOption({colour: 'Pink', onOuterWheel: false, label: 'Randomness'}),
    new WheelMenuOption({colour: 'Green', onOuterWheel: true, label: '{placeholderName}'}),
]