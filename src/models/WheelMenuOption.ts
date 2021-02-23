interface DataEntry {
    color: string;
    value: number;
    key?: string | number;
    title?: string | number;
};

export interface IWheelMenuOption {
    key?: string | number;
    label?: string | number;
    scale?: number;
    colour: string;
    onOuterWheel: boolean;
    isHovered?: boolean;
    url?: string;
    icon?: string;
}

export class WheelMenuOption implements IWheelMenuOption {
    key?: string | number;
    label?: string | number;
    scale: number = 1;
    colour: string;
    onOuterWheel: boolean;
    isHovered: boolean;
    url?: string;
    icon?: string;

    constructor(
        option: IWheelMenuOption
    ) {
        this.scale = option.scale || this.scale; //0 also shouldn't be considered hence the '||' instead of '??'
        this.colour = option.colour;
        this.onOuterWheel = option.onOuterWheel;
        this.key = option.key;
        this.label = option.label;
        this.url = option.url;
        this.icon = option.icon;
        this.isHovered = option.isHovered || false
    }

    ToDataEntry(): DataEntry {
        return { 
            color: this.colour, value: this.scale,
            title: this.label, key: this.key
        };
    }
}