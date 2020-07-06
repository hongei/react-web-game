import React from 'react';

class GuGuDan extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            first: Math.ceil(Math.random() * 9),
            second: Math.ceil(Math.random() * 9),
            value: '',
            result: '',
        };
    }

    onChange = (e) => {
        this.setState({value: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(parseInt(this.state.value) === (this.state.first * this.state.second)){
            this.setState((prevState) => {
                return {
                    result: '정답 : ' + prevState.value,
                    first: Math.ceil(Math.random() * 9),
                    second: Math.ceil(Math.random() * 9),
                    value: ''
                };
            });
            this.input.focus();
        }else{
            this.setState((prevState) => {
                return {
                    result: '오답: ' + prevState.value,
                    value: ''
                }
            });
            this.input.focus();
        }
    };

    onRefInput = (c) => {
        this.input = c;
    }

    render() {
        return (
            <>
                <div>{this.state.first} X {this.state.second} = ?</div>
                <form onSubmit={this.onSubmit}>
                    <input ref={this.onRefInput} type="number" value={this.state.value} onChange={this.onChange}/>
                    <button>입력</button>
                    <div>{this.state.result}</div>
                </form>
            </>
        );
    }
}

export default GuGuDan;