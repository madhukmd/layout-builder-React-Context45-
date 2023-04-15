// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }
      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-controller-container">
          <div className="container">
            <h1 className="controller-heading">Layout</h1>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="content"
                className="checkbox"
                checked={showContent}
                onChange={onChangeContent}
              />
              <label className="label-text" htmlFor="content">
                Content
              </label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="left-navbar"
                className="checkbox"
                checked={showLeftNavbar}
                onChange={onChangeLeftNavbar}
              />
              <label className="label-text" htmlFor="left-navbar">
                Left Navbar
              </label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="right-navbar"
                className="checkbox"
                checked={showRightNavbar}
                onChange={onChangeRightNavbar}
              />
              <label className="label-text" htmlFor="right-navbar">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
