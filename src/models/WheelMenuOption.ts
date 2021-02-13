interface DataEntry {
    color: string;
    value: number;
    key?: string | number;
    title?: string | number;
};

export class WheelMenuOption {
    key?: string | number;
    label?: string | number;
    scale: number = 1;
    colour: string;
    onOuterWheel: boolean;

    constructor(
        colour: string, onOuterWheel: boolean,
        label?: string | number, key?: string | number,
        scale?: number
    ) {
        this.scale = scale || this.scale; //0 also shouldn't be considered hence the '||' instead of '??'
        this.colour = colour;
        this.onOuterWheel = onOuterWheel;
        this.key = key;
        this.label = label;
    }

    ToDataEntry(): DataEntry {
        return { 
            color: this.colour, value: this.scale,
            title: this.label, key: this.key
        };
    }
}