import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const SectionHeader = ({ header, actionsList, selectedActionId, selectorType }) => {
  const defaultAction = actionsList.find(action => action.isDefault)
  const activeAction = actionsList.find(action => action.id === selectedActionId)
  const actionToDisplay = activeAction || defaultAction

  const renderAction = () => {
    if (!actionToDisplay) return null
    const actionStyling =
      selectorType === 'highlight'
        ? 'section-header__action--highlight'
        : 'section-header__action--default'
    return (
      <button className={actionStyling} onClick={actionToDisplay.onPress}>
        {actionToDisplay.text}
      </button>
    )
  }

  return (
    <div className="section-header">
      <p className="section-header__text">{header}</p>
      {renderAction()}
    </div>
  )
}

SectionHeader.propTypes = {
  header: PropTypes.string,
  actionsList: PropTypes.array,
  selectedActionId: PropTypes.string,
  selectorType: PropTypes.string,
}
SectionHeader.defaultProps = { selectorType: 'default' }

export default SectionHeader
