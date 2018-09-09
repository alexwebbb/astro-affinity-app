import { reducer as reduxForm } from 'redux-form';

export default function() {
  return reduxForm.plugin({
    account: (state, action) => {
      // <------ 'account' is name of form given to reduxForm()
      switch (action.type) {
        case ACCOUNT_SAVE_SUCCESS:
          return undefined; // <--- blow away form data
        default:
          return state;
      }
    }
  });
};
