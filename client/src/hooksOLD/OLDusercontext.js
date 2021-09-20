import React, { createContext, useReducer, useContext } from "react";

const UserContext = createContext();
const { Provider } = UserContext;

const reducer = (state, action) => {
    switch (action.type) {
        case "setCurrentUser":
            return {
                ...state,
                _id: action._id,
                email: action.email,
                created: action.created,
                going: action.going,
                loading: false,
            };
        default:
            return state;
    }
};

//setting initial values for the UserState
const UserProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        _id: "",
        email: "",
        created: [],    
        going: [],
        loading: false
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
    return useContext(UserContext);
};

export { UserProvider, useUserContext };