import { Color, Filter, Sort, Type } from "./interfaces";

export const COLOR_DATA: Color[] = [
    {
        color: 'SPARKLE',
        value: '#D9C39E'
    },
    {
        color: 'GREY',
        value: '#8E8E8E'
    },
    {
        color: 'BLACK',
        value: '#000000'
    },
    {
        color: 'GREEN',
        value: '#38A248'
    },
    {
        color: 'RED',
        value: '#DF120F'
    },
    {
        color: 'BROWN',
        value: '#7F4400'
    },
    {
        color: 'ORANGE',
        value: '#FF7F00'
    },
    {
        color: 'YELLOW',
        value: '#ffc700'
    },
    {
        color: 'VIOLET',
        value: '#8914B2'
    },
    {
        color: 'BLUE',
        value: '#1466BC'
    },
    {
        color: 'CYAN',
        value: '#00FFFF'
    },
    {
        color: 'PINK',
        value: '#ff007f'
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
]

export const TYPE_DATA: Type[] = [
    { value: 'checkList', type: 'Checklists', icon: 'checklist' },
    { value: 'todo', type: 'ToDos', icon: 'pending_actions' },
    { value: 'note', type: 'Notes', icon: 'description' },
    { value: 'event', type: 'Events', icon: 'notifications' },
]

export const DEFAULT_VALUE: Color = { color: 'No Color', value: '' }