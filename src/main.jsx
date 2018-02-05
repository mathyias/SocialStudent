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

            textStart: 'Welcome',
            textPage: 'SoundPlay',

        }

    }

	render(){

            return <div className="widget center">
                        <div className="container">
                            <div className="row">
                                <div className="col-8">
                                   {this.props.children}
                                </div>
                            </div>
                        </div>
                   </div>

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
