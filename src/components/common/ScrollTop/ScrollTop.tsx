import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/fontawesome-free-solid';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

class ScrollTop extends React.PureComponent {
  state = {
    showButton: false
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  handleScroll = () => {
    const scrollPos = window.pageYOffset;
    if (scrollPos > 300) {
      this.setState({ showButton: true });
    } else {
      this.setState({ showButton: false });
    }
  }
  
  render() {
    const { showButton } = this.state;
    return (
      <div className={`transition-all ease-out fixed bottom-3 right-6 pointer bg-primary-green
        rounded-full h-10 w-10 flex-center shadow-md ${showButton ? 'visible ease-in bottom-6' : 'invisible'}`} onClick={this.goToTop}>
        <FontAwesomeIcon
          className="p-2 w-9 h-auto"
          icon={faChevronUp as IconProp}
          color="#fff"
        />
      </div>
    )
  }
};

export default ScrollTop;
