export const rootReducer = (state = {}, {type, data}) => {
    if (type === 'GET_ALL_TRANSACTIONS')
        return {...state, backendTransactionData: data};
    else if (type === 'UPSERT_TRANSACTION')
        return {backendTransactionData: {...state.backendTransactionData, ...data}};
    else return state;
};

export const offlineReducer = (state = {}, {type, data}) => ({
    ...state,
    isOffline: type === 'Offline',
});
