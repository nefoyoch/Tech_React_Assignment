import React from 'react'
import './home.css';
import left from '../../assets/images/left.jpg';
import right from '../../assets/images/right.png';
import LifeCycleMethods from '../Users/LifecycleMethods';

export const Home = () => {
    return (
        <>
        <div className="lifecycle">
    <h1 className="heading">React Lifecycle Methods</h1>
        <div className="card mb-3 mt-3 first" >
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={left} alt="..."/>
    </div>
    <div className="col-md-4">
      <div className="card-body">
        <h5 className="card-title">Lifecycle of Components</h5>
        <p className="card-text pb-3">Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.<br/><br/>

The three main phases are: 
<ul className="pb-2">
    <li>Mounting</li>
    <li>Updating</li>
    <li>UnMounting</li>
</ul>
{/* Mounting, Updating, and Unmounting. */}
</p>
        {/* <p class="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
      </div>
    </div>
    <div className="col-md-4">
      <img src={right} alt="..."/>
    </div>
  </div>
</div>

{/* mounting */}

<div class="card mb-3 wheat">
  <div className="row no-gutters">
    <div className="col-md-6">
    <div class="card-body">
        <h5 class="card-title">Mounting</h5>
        <p>Mounting means putting elements into the DOM.</p>
        <p class="card-text">React has four built-in methods that gets called, in this order, when mounting a component:</p>
        <ol>
            <li>constructor()</li>
            <li>getDerivedStateFromProps()</li>
            <li>render()</li>
            <li>componentDidMount()</li>
        </ol>
        <p>The <span className="render">render()</span> method is required and will always be called, the others are optional and will be called if you define them.</p>
      </div>
    </div>
    <div class="col-md-6">
    <div class="card-body">
        <h5 class="card-title">Updating</h5>
        <p class="card-text">A component is updated whenever there is a change in the component's state or props.</p>
        <p>React has five built-in methods that gets called, in this order, when a component is updated:</p>
        <ol>
            <li>getDerivedStateFromProps()</li>
            <li>shouldComponentUpdate()</li>
            <li>render()</li>
            <li>
getSnapshotBeforeUpdate()</li>
            <li>componentDidUpdate()</li>
        </ol>
        <p>The <span className="render">render()</span> method is required and will always be called, the others are optional and will be called if you define them.</p>
      </div>

    </div>
  </div>
</div>


    <div class="card mb-3 unmounting">
  <div className="row no-gutters">
    <div className="col-md-12">
    <div class="card-body">
        <h5 class="card-title">Unmounting</h5>
        <p class="card-text">The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.</p>
        <p>React has only one built-in method that gets called when a component is unmounted:</p>
        <ul>
            <li>componentWillUnmount()</li>
            
        </ul>
      </div>
    </div>
</div>
        </div>
        <div>
        <div className="practical">
            <h2>Now See Practical Example & Open Your Console...</h2>
        </div>
        <h1>Welcome!</h1>
                <h3>Click on button to See more | Less</h3>
        <LifeCycleMethods/>
        </div>
        </div>
        </>
    )
}
