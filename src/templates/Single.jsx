import React from 'react'

function Single(props){
    return<div>
            <h1>This is the page content {props.match.params.slug}</h1>
          </div>
}

export default Single;