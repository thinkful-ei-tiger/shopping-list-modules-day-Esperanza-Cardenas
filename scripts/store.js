import item from './item.js';

let items = [
];
let hideCheckedItems = false;

function findById(id) {
    return items.find(current => current.id === id);
}

function addItem(name) {
    try {
        item.validateName(name);
        items.push(item.create(name));
    }
    catch (error) {
        console.log(`ERROR! ${error.message}`)
    }
}

function findAndToggleChecked(id) {
    let toggle = this.findById(id);
    toggle.checked = !toggle.checked;
}

function findAndUpdateName(id, newName) {
    try {
        item.validateName(newName);
        this.findById(id).name = newName;
    }
    catch (error) {
        console.log(`Cannot update name: ${error.message}`)
    }
}

function findAndDelete(id) {
    let item = this.items.findIndex(item => item.id === id);
    this.items.splice(item, 1);
}

function toggleCheckedFilter() {
    this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
}