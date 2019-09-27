// Higher Order Component (HOC) - A component (HOC) that renders another component - This is
// a design pattern
// Some advantages of using HOC:
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    // console.log (props.isAdmin);
    return (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info} {props.isAdmin}</p>
    </div>
);
}

const withAdminWarning = (WrappedComponent) => { // WrappedComponent my the local
    // name for the Info parameter
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props} /> {/*-- using the spread operator. That's what you must use in order to pass
        along 'props' that were passed in */}
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => { // WrappedComponent my the local
    //  name for the Info parameter
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <div>
                    <p>This is private info. Please don't share!</p>
                    <WrappedComponent {...props} /></div>
            ) :
                (<p>Please log in to view the info!</p>)
            }
        </div>
    )
};
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="Here are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are some details" />, document.getElementById('app'));