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
            this.setState({
                result: '정답',
                first: Math.ceil(Math.random() * 9),
                second: Math.ceil(Math.random() * 9),
                value: ''
            });
        }else{
            this.setState({
                result: '오답',
                value: ''
            });
        }
    };

    render() {
        return (
            <div>
                <div>{this.state.first} X {this.state.second} = ?</div>
                <form onSubmit={this.onSubmit}>
                    <input type="number" value={this.state.value} onChange={this.onChange}/>
                    <button>입력</button>
                    <div>{this.state.result}</div>
                </form>
            </div>
        );
    }
}

export default GuGuDan;