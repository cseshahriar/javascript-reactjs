import React, {Component} from 'react';

// dynamic component
// const DynamicComponent = (props) => {
//     return (
//         <div>
//             {/* can receive a component */}
//             {props.children}
//         </div>
//     );
// };

class DynamicComponent extends Component {
    render() {
        return <div>{this.props.children}</div>
    }
}

export default DynamicComponent;