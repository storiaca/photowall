import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'

function PhotoWall(props) {
    return <div>
                <a className="add-icon" onClick={props.onNavigate} href="#AddPhoto"> </a>
                {/* <button onClick={props.onNavigate} className="add-icon"></button> */}
                <div className="photo-grid">
                    {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
                </div>
            </div>
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoWall