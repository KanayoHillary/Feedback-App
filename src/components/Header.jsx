

function Header() {

    const HeaderStyle = {
        backgroundColor: 'rgba(0,0,0,0.4)',
        color: '#ff6a95'
    }

    return (
        <header style={HeaderStyle}>
            <div className="container">
                <h1> Feedback App </h1>
            </div>
        </header>
    )
}



export default Header