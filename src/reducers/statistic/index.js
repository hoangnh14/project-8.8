const initialState = {

    productName: '',
};

export default function statisticByName(state = initialState, action) {
    switch (action.type) {

        case 'STATISTIC_BY_NAME':
            return (  Object.assign({}, state, {
                productName: action.productName,
            }));
        default:
            return state;
    }
}


