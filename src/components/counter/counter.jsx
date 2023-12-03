import {useComputed, useSignal } from "@preact/signals-react";

///counter app
export default function Counter() {
    //using signals hooks
    const count = useSignal(0)
    const double = useComputed(()=>count.value*2)

    console.log('render counter');

    const increment = () => {
        count.value=count.value+1;
        console.log(count);
    }

    return (
        <div className='container'>
            <div className='card shadow mx-auto mt-5 p-2 border-0' style={{ maxWidth: "600px" }}>
                <h2 className='text-center'>COUNTER APP</h2>
                <div className='d-flex flex-row justify-content-evenly m-3 '>
                    <button className='btn btn-primary w-25' onClick={increment} >+</button>
                    <span className='fw-bold fs-2'>{count.value}</span>
                    <button className='btn btn-dark w-25' onClick={()=>count.value--} >-</button>
                </div>
                <div className="text-muted text-center">double count {double}</div>
            </div>
        </div>
    )
}
