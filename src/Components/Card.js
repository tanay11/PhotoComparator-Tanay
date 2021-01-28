import React from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex: 1 0 21%;
    border: 1px solid grey;
    max-width: 35%;
    max-height: 35%;
    margin: 15px;
    flex-direction: column;
    .img-style{
        width: 40%;
        padding: 5px;
        margin: 0 auto;
    }
    .btn{
        max-width: 50%;
        margin: 5px auto;
    }
`

export const Card = (props) => {
    const {id, title, url} = props.details;
    const {setTableData} = props;
    return (
        <StyledDiv>
            <img className="img-style" src={url} />
           <h6>Id : {id}</h6> 
           <h6>Title : {title}</h6> 
           <h6>URL : {url}</h6> 
           <button className="btn" onClick={() => setTableData(table => [...table,props.details])}>Compare</button>
        </StyledDiv>
    )
}

