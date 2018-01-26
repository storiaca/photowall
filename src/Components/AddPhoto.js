import React, {Component} from 'react'

class AddPhoto extends Component {
    constructor() {
        super()
        this.handleSumbit = this.handleSumbit.bind(this)
    }
    handleSumbit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const post = {
            id: 0,
            description: description,
            imageLink: imageLink
        }
        if(description && imageLink) {
            this.props.onAddPhoto(post)
        }
    }
    render() { 
        return  (
            <div>
                <h1>Photowall</h1>
                <div className="form">
                    <form onSubmit={this.handleSumbit}>
                        <input type="text" placeholder="Link" name="link"/>
                        <input type="text" placeholder="Decsription" name="description"/>
                        <button>Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto