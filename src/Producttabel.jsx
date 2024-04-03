import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import Image from './headphones.jpg';

const Producttable = () => {
    const [selecteddays, setSelecteddays] = useState(null);
    const days = [
        { name: 'Last 30 days' },
        { name: 'Last 15 days' },
        { name: 'Last 10 days' },
        { name: 'Last 5 days' }
    ];

    // Dummy data for the table
    const products = [
        { 
            id: 1,
            name: 'Abstract 3D',
            stock: '10 in stock',
            price: '$50',
            totalSales: '100'
        },
        { 
            id: 2,
            name: 'Sarphnes Illustration',
            stock: '20 in stock',
            price: '$30',
            totalSales: '200'
        },
        { 
            id: 3,
            name: 'Abstraction',
            stock: '50 in stock',
            price: '$60',
            totalSales: '800'
        },
        { 
            id: 4,
            name: 'Adobe Illustration',
            stock: '100 in stock',
            price: '$30',
            totalSales: '600'
        },
    ];

    return (
        <div className="card" style={{ backgroundColor: "whitesmoke", width: '100%', minHeight: "50%", position: "relative" ,borderRadius:'5px'}}>
            <b><p style={{ margin: "2px", padding: "0px", position: "absolute", top: '2px', left: '4px' }}>Product Sell</p></b>
            <div className="search-container" >
                <InputText type="text" placeholder="Search" className="pi pi-search" style={{height:"30px",width:'150px'}} />
                <Dropdown
                value={selecteddays}
                onChange={(e) => setSelecteddays(e.value)}
                options={days}
                optionLabel="name"
                placeholder="Last 30 days"
                className="w-full md:w-14rem"
                style={{ borderRadius: "5px", fontFamily: "sans-serif", fontSize: "3px",position: "absolute", top: '4px', right: '4px',height:"30px",width:'150px'}}
            />
            </div>
           
            <DataTable value={products} tableStyle={{ width: "100%", height: "50%" }}>
                <Column
                    field="image"
                    header="Product"
                    body={(rowData) => (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={Image} alt={rowData.name} style={{ width: '50px', marginRight: '10px' }} />
                            <span>{rowData.name}</span>
                        </div>
                    )}
                />
                <Column field="stock" header="Stock" />
                <Column field="price" header="Price" />
                <Column field="totalSales" header="Total Sales" />
            </DataTable>
        </div>
    );
}

export default Producttable;
