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

export interface NoteType {
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
    active: boolean;
    value?: string;
}

export interface GroupCommandActive {
    group: string; 
    value: CommandActive[]
}

export interface ThemeBar {
    title: string;
    linked: boolean;
    bookmarked: boolean;
}


export interface SparkleData {
    content: string|string[];
    initialContent: string | string[];
    hasUrl: boolean;
    hashtags: string[];
    title: string;
    bookmarked: boolean;
    theme: string;
    type: string;
    timeCreated: Date;
    timeEdited: Date;
}