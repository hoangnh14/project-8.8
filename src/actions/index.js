

export const listByName = (nameProduct) => ({
    type: 'VIEW_LIST_BY_NAME',
    nameProduct,
});

export const statisticByName = (productName) => ({
    type: 'STATISTIC_BY_NAME',
    productName,
});