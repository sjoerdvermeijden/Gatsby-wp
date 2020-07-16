import React from 'react'

export default ({pageContext}) => (
    <div>
        <h1>{pageContext.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </div>
);