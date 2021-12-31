import { notesService } from '../services/note.service.js'


export class AddNote extends React.Component {
    state = {
        input: null,
        type:'note-txt',
        
    }

   
	getPlaceHolder = () => {
        // this.cleanForm()
        const { type } = this.state
        if (type === 'note-todos') return 'Enter comma sepaeated list'
        else if (type === 'note-img') return 'Enter imge URL'
        else if (type === 'note-video') return 'Enter video URL'
        else return 'Enter your text note here'
            
	
    } 

    changeNoteType = (type) =>{
        console.log(this.state.type)
        this.setState((prevState) => ({...prevState, type }))
    }

    handleInputChange = ({target}) =>{
        console.log(target.value)
        const value = target.value 
        this.setState((prevState) => ({...prevState, input: value }))
        this.props.onSetInput(value)
    }

    onAddnote = (ev) => {
        ev.preventDefault()
        console.log(ev)
        this.props.onSetInput(this.state.input)
        const { type, input } = this.state
        const info = this.getInfo(type,input)
        notesService.addNote(type,info).then(() => {
            this.props.loadNotes()
        })
        this.cleanForm()       
    }

    getInfo = (type,input) => {
        if (type === 'note-todos'){
            return {
            todos:input.split(',').map( todo => ( {txt: todo}))
            }
        }else if (type === 'note-img'){
            return {url: input}
        }else if (type === 'note-video'){
            var url = input.split('=')
             return {url: url[1]}
        }else return {txt:input}
    }

    cleanForm = () => {
        this.setState({ input: '' })
    }

    render(){
        const placeholder = this.getPlaceHolder()
        return(
            <div className="input-text-container">
                <form className="add-note-box" onSubmit={this.onAddnote}>
                    <input className="keep-input-text" type="text" placeholder={placeholder} onChange={this.handleInputChange}></input>
                    <div className="btn-choose-input-type">
                        <img className="btn-add-todo" onClick={()=> this.changeNoteType('note-todos')} src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj48cGF0aCBkPSJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY1aDE0djE0eiIvPgogIDxwYXRoIGQ9Ik0xOCA5bC0xLjQtMS40LTYuNiA2LjYtMi42LTIuNkw2IDEzbDQgNHoiLz4KPC9zdmc+Cg=="/>
                        <img className="btn-add-txt" onClick={()=>this.changeNoteType('note-txt')} src="https://iconsplace.com/wp-content/uploads/_icons/000000/256/png/letter-a-icon-256.png"/>
                        <img className="btn-add-img" onClick={()=>this.changeNoteType('note-img')} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY1aDE0djE0em0tNS03bC0zIDMuNzJMOSAxM2wtMyA0aDEybC00LTV6Ii8+Cjwvc3ZnPgo="/>
                        <img className="btn-add-video" onClick={()=>this.changeNoteType('note-video')} src="https://cdn-icons-png.flaticon.com/512/1077/1077046.png"/>
                    </div>
                </form>
            </div>
        )
    }
}