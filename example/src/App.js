import React from 'react'

import { JumboGrid } from 'jumbo-grid'
import 'jumbo-grid/dist/index.css'
import axios from "axios"
import { Layout} from "antd";

const App = () => {

  const getAd = async (type, page) => {
    console.log(type);
    console.log(page);
  };

  return (
  <Layout>
    <Layout.Content>
      <div>
        <JumboGrid  getAd={getAd} page={"home"} />
      </div>
    </Layout.Content>
  </Layout>
  )
}

export default App
