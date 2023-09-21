import React from "react";
import {useState} from "react";

function ShoppingList() {
    const [rows, setRow] = useState([]);

    const [name_of_product, setName] = useState("");
    const [price_of_product, setPrice] = useState("");
    const [quantity_of_product, setQuantity] = useState("");

    function onClickAddRow(name,price,quantity) {
        setRow([...rows,{
            id: rows.length,
            value: [name,price,quantity,<input type="checkbox"></input>]    
        }]);    
    }

    return(
        <div className="shoppingList">
            <input name="name_of_product" type="text" placeholder="Nazwa produktu" onChange={e => setName(e.target.value)}></input>
            <input name="price_of_product" type="text" placeholder="Cena produktu" onChange={e => setPrice(e.target.value)}></input>
            <input name="quantity_of_product" type="text" placeholder="Ilość produktu" onChange={e => setQuantity(e.target.value)}></input>

            <input type="button" value="Wyślij wartości" name="sendValues" onClick={() => onClickAddRow(name_of_product,price_of_product,quantity_of_product)}></input>
        
            <div className='tableDiv table_container'>
            <table className='table boostrap4'>
                <thead>
                    <tr>
                        <th>Nazwa produktu</th>
                        <th>Cena</th>
                        <th>Ilość</th>
                        <th>Czy jest kupione</th>
                    </tr>
                </thead>

                <tbody>{rows.map(row => (
                    <tr key={row.id}>{row.value.map( col =>
                        <td>{col}</td>
                    )}</tr>
                ))}</tbody>
            </table>
        </div>       
        </div>
    );
}

export default ShoppingList;