function CategoryFilter ({ onCategoryChange }) {
    return (
        // Dropdown för kategori-val
        <select defaultValue="" onChange={(event) => onCategoryChange(event.target.value)}>
            <option value="" disabled>Select a category</option>
            <option value="Any">Any</option>
            <option value="Programming">Programming</option>
            <option value="Misc">Misc</option>
            <option value="Pun">Pun</option>
        </select>
    );
}

export default CategoryFilter;