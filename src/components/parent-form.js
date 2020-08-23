import React, { useState, useEffect } from 'react';
import SmartDropDown from './smart-dropdown';

const ParentForm = () => {

    const [selectedItem, setSelectedItem] = useState("");

    var countries = [

        { id: 'AF', value: 'Afghanistan' },
        { id: 'AL', value: 'Albania' },
        { id: 'AS', value: 'American Samoa' },
        { id: 'AD', value: 'Andorra' },
        { id: 'AG', value: 'Angola' },
        { id: 'AR', value: 'Anguilla' },
        { id: 'AN', value: 'Antarctica' },
        { id: 'SG', value: 'Singapore' },
        { id: 'ML', value: 'Malaysia' },
        { id: 'IN', value: 'Indonesia' },
        { id: 'PH', value: 'Philippines' }
    ];
  

    return (
        <div>
            <label>Selected Country :{selectedItem}</label>
            <SmartDropDown maxItem={4} itemList={countries} addRecordsPermission={true} onChangeCallBack={(value) => setSelectedItem(value)}></SmartDropDown>
        </div>
    )


}


export default ParentForm;