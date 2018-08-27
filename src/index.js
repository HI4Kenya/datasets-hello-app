import React from 'react';
import ReactDOM from 'react-dom';

// DOM Element to Render our app
const rootElement = document.querySelector("#root");

const headers ={
    headers:{
        'Authorization': `Basic ${btoa('kenya:Last#2002')}`
}
}

// DataSet function - View

function DataSet({dataset}){
    return <div><a href={dataset.href}>{dataset.name}</a></div>;
}

// DataSet List

function DataSetList({datasets}){
    return (
        <div>
            <h4>WakandaLand DataSets</h4>
            <div>{datasets.map((dataset) => <DataSet dataset={dataset} />)}</div>
        </div>
    );
}

// Pulling datasets via API
fetch('http://197.136.81.99:8080/training/api/dataSets?paging=false&fields=id,name,code,shortName,description,href', headers
).then((fetchData) => fetchData.json()).then((jsonData)=>{
    ReactDOM.render(<DataSetList datasets={jsonData.dataSets}/>, rootElement);
}).catch((error)=>{console.log('Error', error)});