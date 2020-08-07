const initialState = {

    nameProduct: '',
    loading: ''
};

export default function listProduct(state = initialState, action) {
    switch (action.type) {

        case 'VIEW_LIST_BY_NAME':
            return Object.assign({}, state, {
                nameProduct: action.nameProduct,
            });
        default:
            return state;
    }
}


