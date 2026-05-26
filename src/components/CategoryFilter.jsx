function CategoryFilter ({ onCategoryChange }) {
    return (
        <select onChange={(event) => onCategoryChange(event.target.value)}>
            <option value="Any">Any</option>
            <option value="Programming">Programming</option>
            <option value="Misc">Miscellaneous</option>
            <option value="Pun">Pun</option>
        </select>
    );
}

export default CategoryFilter;