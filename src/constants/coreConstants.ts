import { WheelMenuOption } from "../models/WheelMenuOption";

export const MENU_OPTIONS: WheelMenuOption[] = [
    new WheelMenuOption({colour: 'Blue', onOuterWheel: true, label: 'My Website', url: 'https://jaidenrm.github.io'}),
    new WheelMenuOption({colour: 'Red', onOuterWheel: true, label: 'Google Maps', url: 'https://maps.google.com.au'}),
    new WheelMenuOption({colour: 'Yellow', onOuterWheel: false, label: 'Tic Tac Toe', url: 'https://playtictactoe.org/'}),
    new WheelMenuOption({colour: 'Pink', onOuterWheel: false, label: 'Coin Flip', url: 'https://www.google.com/search?q=flip+a+coin'}),
    new WheelMenuOption({colour: 'Green', onOuterWheel: true, label: 'Feeling Lucky?', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}),
]