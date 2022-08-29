import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appId, appName, imageUrl, category} = appsList
  return (
    <li className="appItem_container">
      <div className="app_card">
        <img src={imageUrl} className="App_img" alt={appName} />
        <h1 className="appName">{appName}</h1>
      </div>
    </li>
  )
}
export default AppItem
