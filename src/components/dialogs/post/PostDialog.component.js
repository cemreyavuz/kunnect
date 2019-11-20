import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Link } from 'nysa-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Dialog } from '@blueprintjs/core';

library.add(faTimes);

class PostDialog extends Component {
  /* Post Getters */

  getCommentCount = post => post.post && post.post.comment_count;

  getKulusterName = post => post.kuluster && post.kuluster.name;

  getKulusterImageSrc = post => post.kuluster && post.kuluster.image;

  getPostedAt = post => post.post && post.post.posted_at;

  getPostContent = post => post.post && post.post.content;

  getPostImage = post => post.post && post.post.image;

  getPostTitle = post => post.post && post.post.title;

  getUserName = post => post.user && post.user.name;

  getVoteCount = post => post.post && post.post.vote_count;

  onClose = () => {
    this.props.onClose();
  }

  render() {
    const { ...props } = this.props;
    return (
      <Dialog
        className="knc-post-dialog-component"
        isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <div className="knc-post-dialog-container">
          <div className="knc-post-dialog-top">
            <div className="knc-post-dialog-top-left">
              <div className="knc-post-dialog-info">
                <div className="knc-post-dialog-info-left">
                  <div className="knc-post-dialog-info-kuluster-image-container">
                    <Button classes="knc-post-dialog-info-kuluster-image-button">
                      <img alt="kuluster" className="knc-post-dialog-info-kuluster-image" src={this.getKulusterImageSrc(props.data)} />
                    </Button>
                  </div>
                </div>
                <div className="knc-post-dialog-info-right">
                  <div className="knc-post-dialog-info-kuluster-name">
                    <Link
                      classes="knc-post-dialog-info-kuluster-name-link"
                      href={`http://kunnect.co/k/${this.getKulusterName(props.data)}`}
                      intent="default"
                      onClick={event => this.onLinkClick(event, `/k/${this.getKulusterName(props.data)}`)}
                      text={`k/${this.getKulusterName(props.data)}`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="knc-post-dialog-top-right">
              <div className="knc-post-dialog-info-user-name-and-posted-at">
                <span>posted by</span>
                <span>&nbsp;</span>
                <Link
                  classes="knc-post-dialog-info-user-name-and-posted-at-link"
                  href={`http://kunnect.co/u/${this.getUserName(props.data)}`}
                  intent="default"
                  onClick={event => this.onLinkClick(event, `/u/${this.getUserName(props.data)}`)}
                  text={`u/${this.getUserName(props.data)}`}
                />
                <span>&nbsp;·&nbsp;</span>
                <Link classes="knc-post-dialog-info-user-name-and-posted-at-link" href="http://kunnect.co" text="bsd">{this.getPostedAt(props.data)}</Link>
              </div>
              <div className="knc-post-dialog-top-right-close-button-container">
                <Button
                  classes="knc-post-dialog-top-right-close-button"
                  onClick={props.onClose}
                >
                  <FontAwesomeIcon icon={['fas', 'times']} />
                </Button>
              </div>
            </div>
          </div>
          <div className="knc-post-dialog-middle">
            <div className="knc-post-dialog-title">{this.getPostTitle(props.data)}</div>
            <div className="knc-post-dialog-content">{this.getPostContent(props.data)}</div>
            <div className="knc-post-dialog-image-container">
              {
                this.getPostImage(props.data)
                  ? <img alt="post-dialog-content" className="knc-post-dialog-image" src={this.getPostImage(props.data)} />
                  : null
              }
            </div>
          </div>
          <div className="knc-post-dialog-dialog-content">{props.children}</div>
        </div>
      </Dialog>
    );
  }
}

PostDialog.propTypes = {
  /* Functions */
  data: PropTypes.shape({}),
  onClose: PropTypes.func.isRequired,
  /* Objects */
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
};

PostDialog.defaultProps = {
  data: null,
  title: 'null',
};

export default PostDialog;
