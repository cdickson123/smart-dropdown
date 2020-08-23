import React, { useState, useEffect } from 'react'
import '../App.scss';

const SmartDropDown = ({ maxItem, itemList, addRecordsPermission, onChangeCallBack }) => {


    let [countryName, setCountryName] = useState("");
    let [listItemLimit, setItemLimit] = useState(maxItem);
    let [open, setOpen] = useState(false);
    let [items, setItems] = React.useState(itemList);
    let [defaultItem, setDefaultItem] = useState([]);
    let [isItemFound, setItemFound] = React.useState(true);
    let [showMoreOption, setShowMoreOption] = React.useState(true);


    let [addItemPermission, setaddItemPermission] = React.useState(addRecordsPermission);
    let [enbleAddItem, setEnableAddItem] = React.useState(false);
    let [searchText,SetSearchTest]=useState("");

    const showMoreClick = () => {
        console.log('smart-select');
        setItemLimit(items.length);
        setShowMoreOption(!showMoreOption);
    }

    const searchClick = (startWith) => {
        console.log('search-text-clicked');

        if (startWith) {


            SetSearchTest(startWith);
            var filtered = itemList.filter(p => String(p.value).toLocaleLowerCase().startsWith(startWith.toLocaleLowerCase()));
            setItems(filtered);

            //Enable Add Country Add Function
            console.log('Add permission : ' + addItemPermission);
            if (filtered.length == 0 && addRecordsPermission) {

                setEnableAddItem(true);

                console.log('Enable add');
            }
            else {
                setEnableAddItem(false);
            }

        }


    }

    const selectCountry = (val) => {

        setCountryName(val);
        onChangeCallBack(val);
        console.log(val);
    };



const addItem=(val)=>
{


    console.log('Not implemented');
  //  itemList.push({id: 'AFkk', value: val})

}


    useEffect(

        () => {

            // var filtered = people.filter(p => String(p.year).startsWith('198'));



        }

    );

    return <div className="dd-wrapper">
        <div>
            <form>
                <div className="form-group">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder={'Select a location'} value={countryName} readOnly={true} aria-label="Dollar amount (with dot and two decimal places)"></input>
                        <div className="input-group-append">
                            <div className="input-group-text" >
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z" />
                                    <path fillRule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="input-group" onClick={() => { searchClick() }}  >
                        <div className="input-group-text">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                            </svg>
                        </div>

                        <div className="input-group-append">
                            <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places) " onChange={(e) => { searchClick(e.target.value) }}   ></input>
                        </div>
                    </div>

                    <div id="select">
                        <div>                    {(
                            <ul className="dd-list">


                                {items.slice(0, listItemLimit).map(item => (
                                    <li className="dd-list-item" key={item.id}>
                                        <button type="button" onClick={() => selectCountry(item.value)}                 >
                                            <span>{item.value}</span>
                                            <span></span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}</div>

                        <div >
                            {showMoreOption ? <p onClick={() => showMoreClick()}> {listItemLimit} more...</p> : null}
                        </div>
                    </div>

                </div>
            </form>
            {enbleAddItem ? <div>

            <label> ' {searchText} ' Not found.. </label>
                <button onClick={() => addItem()}>Add & Select</button>
            </div> : null}
        </div>
    </div>
}

export default SmartDropDown;