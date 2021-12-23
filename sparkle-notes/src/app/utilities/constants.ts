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
    { value: 'date_edited', title: 'Date Edited' },
    { value: 'title', title: 'Title Alphabetically' },
    { value: 'date_created', title: 'Date Created' },
    { value: 'date_remainder', title: 'Date Remainder' },
    { value: 'color', title: 'Color' },
    { value: 'type', title: 'Content Type' }
]


export const FILTER_DATA: Filter[] = [
    { value: 'checkList', title: 'Checklists' },
    { value: 'todo', title: 'ToDos' },
    { value: 'note', title: 'Notes' },
    { value: 'event', title: 'Events' },
]

export const TYPE_DATA: Type[] = [
    { value: 'checkList', type: 'Checklists' },
    { value: 'todo', type: 'ToDos' },
    { value: 'note', type: 'Notes' },
    { value: 'event', type: 'Events' },
]