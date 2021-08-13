import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux'
import { props } from 'bluebird';

 const SmurfList = (props)=> {

    if (props.isLoading) {
        return <h1>Loading...</h1>;
    }

    if (props.error !== '')
        return <h3>We've encountered an error: {props.error}</h3>

    return(<div className="listContainer">
        {props.smurfs.map(smurf => <Smurf smurf={smurf}/>)}
    </div>);
}

function mapStateToProps (state){
    return ({
        smurfs: state.smurfs,
        error: state.error,
        isLoading: state.isLoading
    })
}

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.