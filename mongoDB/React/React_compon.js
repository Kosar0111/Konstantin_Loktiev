// exempal button

class Count extends React.Componetn {
    constructor(props) {
        super(props);


        this.state = { count: 0 };
        this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount() {
        this.state(state => ({ count: state.count + 1 }))
    }

    renser() {
        return <div></div>
    }

}


// event 

function ActLink() {
    function handClick(e) {
        e.preventDefault()// в jsx не можем отменить, отменяем поведение в функции
    }
    return <a href="" onClick={handClick}>Click</a>
}