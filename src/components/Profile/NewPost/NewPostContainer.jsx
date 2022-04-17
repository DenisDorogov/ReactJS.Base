import {addPost, updateNewPostText} from "../../../redux/profile-reducer";
import NewPost from './NewPost';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (event) => {
            let text = event.target.value;
            let action = updateNewPostText(text);
            dispatch(action);
        },
        addPost: (event) => {
            event.preventDefault();
            dispatch(addPost());
        }
    }
}


const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer;