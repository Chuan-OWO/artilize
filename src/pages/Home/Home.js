//首頁
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../component/Header'

function Home(props) {
  return (
    <>
      <Header />
      <div>首頁</div>
      <Link to="/search">全站搜尋頁</Link>
      <br />
      <Link to="/users">會員資料</Link>
      <br />
      <Link to="/exhibition">展覽</Link>
      <br />
      <Link to="/product">商品</Link>
      <br />
      <Link to="/forum">討論區</Link>
      <br />
      <Link to="/b2b">廠商後臺</Link>
      <br />
      <h1>
        <Link to="/style">樣式</Link>
      </h1>
    </>
  )
}

export default Home
