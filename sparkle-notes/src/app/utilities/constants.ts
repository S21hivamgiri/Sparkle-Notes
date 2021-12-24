import { Color, Filter, Sort, Type } from "./interfaces";

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
        light: '#5bd36d',
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
        lightest: '#ffc289'
    },
    {
        color: 'YELLOW',
        value: '#ffc700',
        light: '#ffd756',
        lightest: '#ffe79b'
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
        light: '#72ffff',
        lightest: '#ceffff'
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
    { value: 'checkList', type: 'Checklists', icon: 'checklist' },
    { value: 'todo', type: 'ToDos', icon: 'pending_actions' },
    { value: 'note', type: 'Notes', icon: 'description' },
    { value: 'event', type: 'Events', icon: 'notifications' },
    { value: 'goals', type: '100 Goals', icon: 'auto_graph' },
]

export const DEFAULT_COLOR_VALUE: Color = { color: 'No Color', value: '' }