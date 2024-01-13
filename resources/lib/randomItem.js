function randomItem(items) {
    if (!Array.isArray(items) || items.length === 0) {
        return null;
    }
    const index = Math.floor(Math.random() * items.length);
    return items[index];
}

export default randomItem;