import { Color, Command, Filter, Sort, Type } from "./interfaces";

export const COLOR_DATA: Color[] = [
    {
        color: 'SPARKLE',
        value: '#D9C39E',
        light: '#fceacc',
        lightest: '#fff9ef'
    },
    {
        color: 'GREY',
        value: '#8E8E8E',
        light: '#C1C1C1',
        lightest: '#FFFFFF'
    },
    {
        color: 'BLACK',
        value: '#000000',
        light: '#606060',
        lightest: '#D6D6D6'
    },
    {
        color: 'GREEN',
        value: '#38A248',
        light: '#79d186',
        lightest: '#bfffc8'
    },
    {
        color: 'RED',
        value: '#DF120F',
        light: '#ff5656',
        lightest: '#ffc9c9'
    },
    {
        color: 'BROWN',
        value: '#7F4400',
        light: '#b56305',
        lightest: '#bfa485'
    },
    {
        color: 'ORANGE',
        value: '#FF7F00',
        light: '#ffb168',
        lightest: '#fce7d4'
    },
    {
        color: 'YELLOW',
        value: '#ffc700',
        light: '#ffdd77',
        lightest: '#fff6db'
    },
    {
        color: 'VIOLET',
        value: '#8914B2',
        light: '#c04dea',
        lightest: '#f6ddff'
    },
    {
        color: 'BLUE',
        value: '#1466BC',
        light: '#4190e0',
        lightest: '#b2d8ff'
    },
    {
        color: 'CYAN',
        value: '#00FFFF',
        light: '#adffff',
        lightest: '#e5ffff'
    },
    {
        color: 'PINK',
        value: '#ff007f',
        light: '#ff72b6',
        lightest: '#ffcce4'
    }
]

export const SORT_DATA: Sort[] = [
    { value: 'date_edited', title: 'Date Edited', icon: 'edit_calendar' },
    { value: 'title', title: 'Title Alphabetically', icon: 'title' },
    { value: 'date_created', title: 'Date Created', icon: 'movie_filter' },
    { value: 'date_remainder', title: 'Date Remainder', icon: 'notification_important' },
    { value: 'color', title: 'Color', icon: 'palette' },
    { value: 'type', title: 'Content Type', icon: 'category' }
]


export const FILTER_DATA: Filter[] = [
    { value: 'checkList', title: 'Checklists', icon: 'checklist' },
    { value: 'todo', title: 'ToDos', icon: 'pending_actions' },
    { value: 'note', title: 'Notes', icon: 'description' },
    { value: 'event', title: 'Events', icon: 'notifications' },
    { value: 'link', title: 'With Links/Tags', icon: 'tag' },
    { value: 'goals', title: '100 Goals', icon: 'auto_graph' },
]

export const TYPE_DATA: Type[] = [
    { value: 'note', type: 'Notes', icon: 'description' },
    { value: 'checkList', type: 'Checklists', icon: 'checklist' },
    { value: 'todo', type: 'ToDos', icon: 'pending_actions' },
    { value: 'event', type: 'Events', icon: 'notifications' },
    { value: 'goals', type: '100 Goals', icon: 'auto_graph' },
]

const FORMAT_COMMAND_DATA: Command[] = [
    { cmd: 'bold', title: 'Bold', icon: 'format_bold' },
    { cmd: 'italic', title: 'Italics', icon: 'format_italic' },
    { cmd: 'underline', title: 'Underline', icon: 'format_underlined' },
]

const TEXT_COMMAND_DATA: Command[] = [
    { cmd: 'superscript', title: 'SuperScript', icon: 'superscript' },
    { cmd: 'subscript', title: 'SubScript', icon: 'subscript' },
    { cmd: 'strikethrough', title: 'StrikeThrough', icon: 'strikethrough_s' },
]


export const COMMAND_DATA:{[key:string]:Command[]}={
    text: TEXT_COMMAND_DATA,
    format: FORMAT_COMMAND_DATA,
}

export const DEFAULT_COLOR_VALUE: Color = { color: 'No Color', value: '' }