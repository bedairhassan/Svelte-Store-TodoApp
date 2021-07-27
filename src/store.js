import { writable } from 'svelte/store';


export const tasks = writable([]); // []: array of tasks! // all user's tasks!
export const task = writable({}) // temporary input field  // {name,tag}
export const taskTags = writable([]) // temporary input field  // {name,tag}
export const user = writable({}) // user.tags // tags as array!
export const routes = {
    home:'',
    tag:'tag',
    signpage:'signpage'
}

// working examples
// export const user = writable({tags:['school','work']}) // user.tags // tags as array!