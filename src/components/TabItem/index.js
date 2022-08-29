import './index.css'

const TabItems = props => {
  const {tabsList, updateTabItem, isTabItemClicked} = props
  const {tabId, displayText} = tabsList

  const onClickTab = () => {
    updateTabItem(tabId)
  }

  const ActiveBtnClassName = isTabItemClicked ? 'active_btn' : ''

  return (
    //   <div className="TabItem_container">
    //   </div>
    <li className="TabItem_card">
      <button
        type="button"
        className={`TabItem_button ${ActiveBtnClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItems
