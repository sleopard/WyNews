import React from 'react'
import ReactDOM from 'react-dom'
export default function (el) {
    class PersonalCenter extends React.Component {
        constructor(props) {
            super(props)
        }
        render() {
            return (
                <div>
                    12321312
            </div>
            )
        }
    }
    ReactDOM.render(
        <PersonalCenter />,
        el,
    );
}