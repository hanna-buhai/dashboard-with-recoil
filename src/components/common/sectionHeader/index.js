import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const SectionHeader = ({ header, actionLinkName, actionLink, actionsList, selectedActionId }) => {
  const renderActionLink = () => {
    if (!actionLink) return null
    return (
      <button className="section-header__action--default" onClick={actionLink}>
        {actionLinkName}
      </button>
    )
  }

  const renderActionlist = () => {
    if (!actionsList) return null
    const defaultAction = actionsList.find(action => action.isDefault)
    const activeAction = actionsList.find(action => action.id === selectedActionId)
    const actionToDisplay = activeAction || defaultAction

    return (
      <button className="section-header__action--highlight" onClick={actionToDisplay.onPress}>
        {actionToDisplay.text}
      </button>
    )
  }

  return (
    <div className="section-header">
      <p className="section-header__text">{header}</p>
      {renderActionLink()}
      {renderActionlist()}
    </div>
  )
}

SectionHeader.propTypes = {
  header: PropTypes.string,
  actionsList: PropTypes.array,
  selectedActionId: PropTypes.string,
  actionLinkName: PropTypes.string,
  actionLink: PropTypes.func,
}
SectionHeader.defaultProps = { selectorType: 'default' }

export default SectionHeader
