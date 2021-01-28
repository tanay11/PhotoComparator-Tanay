import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Card} from './Card';
import styled from 'styled-components';
import { TableComponent } from './TableComponent';

const StyledWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
`

export const List = () => {
    const [photosData, setPhotosData] = useState([]);
    const [page, setPage] = useState(null);
    const [response, setResponse] = useState([]);
    const [resState, setResState] = useState("Loading")
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then( data => {
            setResponse(data.data);
            setResState("Success");
            setPage(0);
        })
    }, [])

    useEffect(() => {
        console.log((page*10),"10")
        const photos = response.filter((item,index) => (page*10)<=index && index <(page*10+10));
        console.log("photos",photos)
        setPhotosData(photos);
    }, [page])

    console.log(tableData)
    if(resState == "Success")
    return (
        <>
        <div>
        <button onClick={()=> setPage(page => page-1)} disabled={page < 1}> Prev </button> {page+1} <button onClick={()=> setPage(page => page+1)} disabled={page > 498}> Next </button>
        </div>
        <StyledWrapper>
            {photosData.map( item => {
                return <Card key={item.id} details={item} setTableData={setTableData}/>
            })}
        </StyledWrapper>
        <TableComponent tableData={tableData} setTableData = {setTableData}/>
        </>
    )
    else return <h6>Loading...</h6>
}

