import { combineReducers } from 'redux';
import { useDispatch, useSelector,  } from 'react-redux';
import { setSessionData } from '../../redux/SessionActions';

export default function HomeConteiner (props) {
    //const dispatch = useDispatch();
    const session = useSelector(state => state.Session);
    
    return props.children({ session });
}