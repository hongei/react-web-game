import React from 'react';

const GuGuDan = () => {
    //* jsx로 처리되는 변수들은 shadowing이 되서 eslint가 찾지 못하여 오류가 발생 해당 오류가 발생하는 변수 뒤에 아래 주석 추가 필요
    const [first, setFirst] = React.useState(Math.ceil(Math.random()* 9)); // eslint-disable-line no-unused-vars
    const [second, setSecond] = React.useState(Math.ceil(Math.random()* 9)); // eslint-disable-line no-unused-vars 
    const [value, setValue] = React.useState(''); // eslint-disable-line no-unused-vars
    const [result, setResult] = React.useState(''); // eslint-disable-line no-unused-vars
    const inputRef = React.useRef(null);

    const onChange = (e) => {
        // this.setState({value: e.target.value});
        setValue(e.target.value); 
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(parseInt(value) === (first * second)){
            setResult('정답 : ' + value);
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            inputRef.current.focus();
        }else{
            setResult('오답: ' + value);
            setValue('');
            inputRef.current.focus();
        }
    };

    return (
        <>
            <div>{first} X {second} = ?</div>
            <form onSubmit={onSubmit}>
                <input ref={inputRef} type="number" value={value} onChange={onChange}/>
                <button>입력</button>
                <div>{result}</div>
            </form>
        </>
    );
}
export default GuGuDan;