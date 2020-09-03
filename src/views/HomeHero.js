import React, { useState } from 'react'
import './HomeHero.scss'
import { List, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../store/actions/repos';
const { Search } = Input;

const HomeHero = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const data = useSelector( state => state.repos.reposList)

  const onSearch = async value => {
    setLoading(true)
    await dispatch(getRepos(value))
    setLoading(false)
  }
   
  return (
    <div className="wrapper">
      <div className="wrapper-top">
        <Search
          placeholder="search username"
          onSearch={onSearch}
          style={{ maxWidth: 400 }}
          enterButton
          loading={loading}
        />

      </div>
      <div className="wrapper-bottom">
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={item.name}
                description={item.full_name}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

export default HomeHero
