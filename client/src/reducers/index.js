import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import profilesReducer from './profilesReducer';
import selectionReducer from './selectionReducer';


export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  profiles: profilesReducer,
  selected: selectionReducer
});
