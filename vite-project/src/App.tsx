import Header from './component/Header'
import SearchForm from './component/SearchForm'
import SearchResult from './component/SearchResult'
import { useState } from 'react'
import React from 'react'
import {ProductData} from'./model/model.ts'
import store from './Store.ts';
import {Tabs, TabType } from './component/Tabs'



function App() {
  const [searchKeyword, setSearchKeyword] = useState("")
  const [searchResult, setSearchResult] = useState<ProductData[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [selectedTab, setSelectedTab] = useState(TabType.KEYWORD)

  function handleChangeInput(keyword:string) {

    if (keyword.length <= 0) {
      handleReset()
    }
    setSearchKeyword(keyword)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const result = store.search(searchKeyword)
    setSearchResult(result)
    setSubmitted(true)
  }

  function handleReset() {
    setSearchKeyword("")
    setSearchResult([])
    setSubmitted(false)

  }

  return (
    <>
      <Header/>
      <div className="container">
        <SearchForm 
          searchKeyword={searchKeyword} 
          handleChangeInput={handleChangeInput} 
          handleSubmit = {handleSubmit}
          handelReset = {handleReset}
        />
      </div>
      <div className="content">
        {submitted ? 
          (<SearchResult data={searchResult}/>)
        : <Tabs
            selectedTab={selectedTab}
            onChange={(selectedTab) => setSelectedTab(selectedTab)}
          />}

      </div>
    </>
  )
}

export default App
