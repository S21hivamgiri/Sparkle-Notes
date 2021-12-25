export interface Color {
    color: string;
    value: string;
    light?: string;
    lightest?: string;   
}

export interface Sort {
    title: string;
    icon: string;
    value: string;
}

export interface Filter {
    title: string;
    icon: string;
    value: string;
}

export interface Type {
    type: string;
    value: string;
    icon: string;
}

export interface Command {
    cmd: string;
    title: string;
    icon: string;
}

export interface CommandActive {
    cmd: string;
    active: boolean
}

export interface GroupCommandActive {
    group: string; 
    value: CommandActive[]
}