const Quiz = () => {
    return (

        //todo
        // handleKeyChange(e){
        //     console.log('aaa');
        // }
        <div>
            <h5>Keydown Event</h5>
            <p>Are you Smart (y/n)</p>
            <input type="text" onKeyDown={console.log} />
        </div>
    );
}

export default Quiz;
