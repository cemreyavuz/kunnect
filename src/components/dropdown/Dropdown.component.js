import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dialog, Popover } from '@blueprintjs/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'nysa-ui';
import { appendClasses } from 'common/common.utils';

class Drodown extends Component {
  state = {
    isDropdownMenuOpen: false,
    selectedMenuItem: null,
  }

  selectItem = (item) => {
    this.setState({ selectedMenuItem: item });
    this.props.handleChange(this.props.name, item);
  }

  renderPopoverContent = () => (
    <div className={appendClasses('knc-dropdown-popover', this.props.popoverClasses)}>
      {this.props.options.map(option => this.renderPopoverMenuItem(option))}
    </div>
  )

  renderPopoverMenuItem = item => (
    <Button
      classes="knc-dropdown-popover-menu-item-button"
      key={`knc-dropdown-popover-menu-item-button-${item}`}
      onClick={() => {
        this.setState({ isDropdownMenuOpen: false });
        this.selectItem(item);
      }}
    >
      <div className="knc-dropdown-popover-menu-item-button-is-selected">
        {
          this.state.selectedMenuItem === item
            ? <FontAwesomeIcon icon={['fas', 'check']} />
            : null
        }
      </div>
      <div className="knc-dropdown-popover-menu-item-button-text">{item}</div>
    </Button>
  )

  onPopoverInteraction = (nextOpenState) => {
    if (!nextOpenState) {
      this.setState({ isDropdownMenuOpen: false });
    }
  }

  render() {
    const modifiers = {
      arrow: { enabled: false },
      computeStyle: { gpuAcceleration: false },
    };
    const { ...props } = this.props;
    return (
      <div className={appendClasses('knc-dropdown-component', props.classes)}>
        <Popover
          content={this.renderPopoverContent()}
          isOpen={this.state.isDropdownMenuOpen}
          modifiers={modifiers}
          onInteraction={this.onPopoverInteraction}
          position="bottom-left"
        >
          <Button
            classes="knc-dropdown-button"
            onClick={() => this.setState({ isDropdownMenuOpen: true })}
          >
            <div className="knc-dropdown-button-value">
              {
                this.state.selectedMenuItem
                  ? <div className="knc-dropdown-button-value-selected">{this.state.selectedMenuItem}</div>
                  : <div className="knc-dropdown-button-value-unselected">Select item</div>
              }
            </div>
            <div className="knc-dropdown-button-icon">
              <FontAwesomeIcon icon={['fas', 'chevron-down']} />
            </div>
          </Button>
        </Popover>
      </div>
    );
  }
}

Drodown.propTypes = {
  /* Functions */
  handleChange: PropTypes.func.isRequired,
  /* Objects */
  classes: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  popoverClasses: PropTypes.string,
};

Drodown.defaultProps = {
  classes: null,
  options: [],
  popoverClasses: null,
};

export default Drodown;
