import React, { Component } from 'react'
import  {PersonProps, PersonState} from '../types/index';

export class PersonData extends Component<PersonProps, PersonState>{

  componentDidMount(){
    this.setState({
      ...this.props
    })
  }
  componentDidUpdate(){
    {console.log('State: ', this.state)}
  }
    render() {

        return (
            <div>
                <p>{this.props.first_name}</p>
            </div>
        )
    }
}

export default PersonData
