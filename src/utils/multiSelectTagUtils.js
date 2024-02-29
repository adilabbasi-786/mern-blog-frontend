export const categoryToOption = (category) => ({
  value: category._id,
  label: category.title,
});

export const filterCategories = (inputValue, categoriesData) => {
  console.log("categories=", categoriesData);
  const filteredOptions = categoriesData
    .map(categoryToOption)
    .filter((category) =>
      category.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  console.log("filter categories=", filteredOptions);

  return filteredOptions;
};
