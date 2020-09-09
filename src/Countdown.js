import React from 'react'

class Countdown extends React.Component{
    state = {
        timeLeft: 60,
        timer: null
    }

    startTimer(){
        return setInterval(()=>{
            this.setState((prevState)=>{
                return({
                    timeLeft: prevState.timeLeft - 1
                })
            }, () => console.log(this.state))
        }, 1000)
    }

    componentDidMount(){
        this.setState({
            timer: this.startTimer()
        })
    }

    componentWillUnmount(){
        clearInterval(this.state.timer)
    }


    render(){
        return(
            <div id="countdown">
                <h5>You have {this.state.timeLeft} seconds to checkout</h5>
            </div>
        )
    }
}

export default Countdown