interface DataEntry {
    color: string;
    value: number;
    key?: string | number;
    title?: string | number;
};

export class WheelMenuOption {
    key?: string | number;
    label?: string | number;
    value: number;
    colour: string;
    onOuterWheel: boolean;

    constructor(
        value: number, colour: string, onOuterWheel: boolean,
        label?: string | number, key?: string | number
    ) {
        this.value = value;
        this.colour = colour;
        this.onOuterWheel = onOuterWheel;
        this.key = key;
        this.label = label;
    }

    ToDataEntry(): DataEntry {
        return { 
            color: this.colour, value: this.value,
            title: this.label, key: this.key
        };
    }
}