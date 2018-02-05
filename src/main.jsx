import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
Route,
Link,
IndexLink,
IndexRoute,
hashHistory
} from 'react-router';

document.addEventListener('DOMContentLoaded', function(){

    class Main extends React.Component {


     constructor(props){

        super(props);
        this.state = {

            textPage: 'KnowMe',

        }

    }

	render(){

            return  <main>
                      <div className="background-start-page"></div>
                        <div className="content">
                          <div className="left-bar"></div>
                          <div className="right-bar">
                            <p className="welcome">{ this.state.textPage }</p>
                            <p className="text-welcome">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada, leo eu varius convallis, justo tellus egestas urna, eu luctus sapien ante at massa. Vivamus in volutpat diam. Vivamus eu dui blandit, luctus arcu quis, laoreet enim. Maecenas enim ipsum, tristique bibendum pretium id, auctor sit amet neque. Nulla vitae dolor mi. Integer convallis felis sed lacus congue suscipit. Aenean posuere libero ut tortor scelerisque lacinia. Nulla facilisi. Aliquam erat volutpat. Vivamus vitae porta quam. Nullam ornare, dolor in pellentesque iaculis, ligula ligula ornare nunc, non luctus nulla nunc eu tortor. Nulla finibus ligula velit, in facilisis neque eleifend eu.
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada, leo eu varius convallis, justo tellus egestas urna, eu luctus sapien ante at massa. Vivamus in volutpat diam. Vivamus eu dui blandit, luctus arcu quis, laoreet enim. Maecenas enim ipsum, tristique bibendum pretium id, auctor sit amet neque. Nulla vitae dolor mi. Integer convallis felis sed lacus congue suscipit. Aenean posuere libero ut tortor scelerisque lacinia. 
                            </p>
                            <div className="button-welcome">Join to Us!</div>
                          </div>
                        </div>
                    </main>



}

}


    class App extends React.Component {

        render(){

            return <Router history={hashHistory}>
                        <Route path='/' component={Main} >
                        </Route>
                   </Router>;

        }


    }

	ReactDOM.render(

	<App />,
	document.getElementById('app')


	);

});
