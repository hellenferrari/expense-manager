import React from 'react';
import { connect } from 'react-redux';

const EditExpensePage = (props) => {
  console.log(props);
  
    return (
        <div>
            Edit Page
        </div>
    );
};

// const mapStateToProps = () = {

// };

export default connect()(EditExpensePage);