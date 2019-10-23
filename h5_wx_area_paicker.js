import {
    data
} from './data.js';


let result = [];
let pro_obj = data['86'];
for (var pro_key in pro_obj) {
    let city_obj = data[pro_key];
    let temp = {
        label: pro_obj[pro_key],
        value: pro_key,
        children: []
    }
    if (city_obj) {
        for (var city_key in city_obj) {
            let area_obj = data[city_key];
            let city_temp = {
                label: city_obj[city_key],
                value: city_key,
                children: []
            }
            temp.children.push(city_temp);
            if (area_obj) {
                for (var area_key in area_obj) {
                    let area_temp = {
                        label: area_obj[area_key],
                        value: area_key
                    }
                    city_temp.children.push(area_temp);
                }
            }
        }
    }
    result.push(temp)
}


function test() {
    // 级联picker
    weui.picker(result, {
        className: 'custom-classname',
        container: 'body',
        defaultValue: [110000],
        onChange: function (result) {
            console.log(result)
        },
        onConfirm: function (result) {
            console.log(result)
        },
        id: 'doubleLinePicker'
    });
}

//绑定提交事件
// document.getElementById('btn-submit').addEventListener('click', test);
