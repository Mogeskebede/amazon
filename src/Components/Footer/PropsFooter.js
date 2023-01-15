import React from 'react'

function PropsFooter(props) {
    const elements = props.links;
  return (
    <>
        <ul>
                {elements.map((value, index) => {
                    return (
                        <li key={index}>
                            <a href="#">{value}</a>
                        </li>
                    );
                })}
            </ul>
    </>
  )
}

export default PropsFooter
