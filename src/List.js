import React, { Component } from 'react'
import Item from './Item'

export class List extends Component {

  render() {
    const info = {
      name: 'React Lesson',
      price: 3200,
      videos: 60,
      teacher: 'scars'
    };

    const info2 = [
      { label: 'name', data: 'React Lesson' },
      { label: 'price', data: 3200 },
      { label: 'videos', data: 60 },
      { label: 'teacher', data: 'scars' },
    ];
    return (
      <div>
        {/* Obejct作法 順序不重要時可用，順序重要請改用陣列方式宣告 */}
        {Object.keys(info).map(key => {
          const value = info[key];
          return (
            <Item>{key}:{value}</Item>
          )

        })}
        <hr />
        {/* 陣列作法 順序重要時可用 */}
        {info2.map((item) => (
          <Item>
            {item.label} : {item.data}
          </Item>

        ))}
        <hr />
        {/* 陣列作法 順序重要時可用 將lable跟data解構 */}
        {info2.map(({ label, data }) => (
          <Item>
            {label} : {data}
          </Item>

        ))}
      </div>
    )
  }
}

export default List
