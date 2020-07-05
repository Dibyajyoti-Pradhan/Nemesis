export const rootReducer = (state = {}, {type, data}) => {
    return (type === 'UPDATE_TRANSACTIONS' ? {...state, backendTransactionData: data} : state);
};

export const offlineReducer = (state= {}, {type, data}) =>
    ({
        ...state,
            ifOffline: type === 'Offline'
    });

